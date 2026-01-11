# AI Quiz Generator Creation Guide (English Grammar Mastery App)

This guide explains how to add **new AI-powered quiz generators** for a lesson while keeping the system **robust**, **cancel-safe**, and **UI-crash-proof**.

---

## TL;DR (What you implement)

For each lesson:

1. Create or update: `src/logic/curriculum/<lesson>/quizGenerator.js`
   - Export `generateAIQuiz(level, signal)`
   - Build a prompt
   - Call `GeminiService.generateQuiz(options)`
   - **Strictly validate** the returned JSON
   - Throw `ValidationError` when invalid (UI will show Retry)

2. Update the view: `src/ui/views/<LessonView>.js`
   - Pass `aiQuizGenerator(level, signal)` to `LearningPageTemplate`

---

## Architecture (Separation of Concerns)

### 1) `src/logic/geminiService.js` (Service)
**Responsibilities**
- API call (fetch)
- Abort support (pass `signal` to fetch)
- Error handling for non-200 responses (fail-fast, **no internal retries**)
- JSON extraction + `JSON.parse` (no schema validation)

**Non-responsibilities**
- No prompt construction
- No schema validation
- No “magic retries” (UI Retry controls attempts)

---

### 2) `src/logic/curriculum/<lesson>/quizGenerator.js` (Generator)
**Responsibilities**
- Prompt construction (lesson + quizType specific)
- Define/choose quiz types
- **Strict validation** of returned JSON
- Throw meaningful errors (especially `ValidationError`)

---

### 3) `src/ui/components/LearningPageTemplate.js` (UI Template)
**Responsibilities**
- Loading state (`isAILoading`)
- Error state (`aiError`)
- Retry button
- Cancel button (AbortController)
- Prevent stale results from rendering (abort + “latest only” logic)

---

## API Contracts

### Generator Function Contract

```js
export async function generateAIQuiz(level = 1, signal) => QuizJSON
```

- `level`: number (typically 1–10)
- `signal`: `AbortSignal` (must be forwarded to the service call)
- Returns a validated quiz object in the **Quiz JSON Contract** format

---

### Quiz JSON Contract (Minimum Required)

All AI quizzes must return a single JSON object with the following fields:

```json
{
  "quizType": "string",
  "question": "string",
  "options": ["string", "string", "string", "string"],
  "answer": "string",
  "explanation": "string"
}
```

#### Field rules (MUST)
- `quizType`: must be one of the generator’s allowed quiz types
- `question`: non-empty string after trim
- `options`: array of **exactly 4** non-empty strings after trim
- `answer`: non-empty string after trim AND **must be included in** `options`
- `explanation`: non-empty string after trim (keep it short: 1–2 sentences recommended)

#### Optional fields (MAY)
You may include additional fields if the lesson needs them, e.g.
- `hint`, `tags`, `tense`, `patternId`, `metadata`, etc.

If you add optional fields, the UI must **not** depend on them unless the lesson UI explicitly supports them.

---

## Error Contract (What to throw and why)

To keep the UI behavior predictable, use these conventions:

### Validation errors (bad AI JSON)
Throw `ValidationError` (or an Error with `name = 'ValidationError'`).
- UI should show: **“Generation Failed”** + **Retry**.
- Typical causes:
  - options not length 4
  - answer not in options
  - empty strings
  - unknown quizType

### Abort errors (user cancelled / navigated away)
If `fetch` throws an `AbortError`, do **not** turn it into a scary UI error.
- Either rethrow as-is (UI should ignore AbortError)
- Or swallow and return nothing (depending on your app pattern)

### Network / API errors (429 / 503 / 401)
Service fails fast; UI shows a friendly message + Retry.
- 429: rate limited → “Busy, try again shortly.”
- 503: temporary failure → “Service unavailable, retry.”
- 401/403: missing/invalid key → “Check API key configuration.”

---

## Prompt Template (Copy-Paste Safe)

Use this structure to reduce “API chatter” and formatting drift:

```txt
You are a quiz generator for an English grammar learning app.

Return ONLY valid JSON. Do NOT include markdown, backticks, explanations outside JSON, or extra text.

Rules:
- quizType must be one of: <QUIZ_TYPES>
- options must be an array of exactly 4 strings
- answer must be exactly equal to one of the options
- question/options/answer/explanation must be non-empty strings
- Use double quotes for all JSON strings
- No trailing commas

Difficulty:
- level: <LEVEL>/10

Output JSON schema (example format):
{
  "quizType": "<one-of-quizTypes>",
  "question": "...",
  "options": ["...", "...", "...", "..."],
  "answer": "...",
  "explanation": "..."
}

Lesson constraints:
<LESSON_SPECIFIC_RULES>
```

**Important:** If you use `responseMimeType: 'application/json'`, still keep **Return ONLY JSON** inside the prompt. Do both.

---

## Implementation Template (Recommended)

### 1) Define a small shared validator (per generator file)

```js
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function assertNonEmptyString(value, fieldName) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new ValidationError(`Invalid ${fieldName}`);
  }
  return value.trim();
}

function validateQuiz(result, allowedTypes) {
  if (!result || typeof result !== 'object') {
    throw new ValidationError('Response is not an object');
  }

  const quizType = assertNonEmptyString(result.quizType, 'quizType');
  if (!allowedTypes.includes(quizType)) {
    throw new ValidationError(`Unknown quizType: ${quizType}`);
  }

  const question = assertNonEmptyString(result.question, 'question');
  const answer = assertNonEmptyString(result.answer, 'answer');
  const explanation = assertNonEmptyString(result.explanation, 'explanation');

  if (!Array.isArray(result.options) || result.options.length !== 4) {
    throw new ValidationError('options must be an array of length 4');
  }

  const options = result.options.map((x, i) => assertNonEmptyString(x, `options[${i}]`));

  if (!options.includes(answer)) {
    throw new ValidationError('answer must be one of options');
  }

  return { ...result, quizType, question, options, answer, explanation };
}
```

### 2) Implement `generateAIQuiz(level, signal)` (per lesson)

```js
import { generateQuiz } from '../../geminiService.js';
import { ValidationError, validateQuiz } from './validationHelpers.js'; // if you split files

export async function generateAIQuiz(level = 1, signal) {
  const quizTypes = [
    'fill-blank',
    'error-correction',
    'transformation'
  ];

  const quizType = quizTypes[Math.floor(Math.random() * quizTypes.length)];

  const prompt = buildPrompt({ level, quizType, quizTypes });

  const result = await generateQuiz({
    prompt,
    // systemInstruction: optional,
    model: 'gemini-<your-model>',
    temperature: 0.8,
    responseMimeType: 'application/json',
    signal
  });

  return validateQuiz(result, quizTypes);
}

function buildPrompt({ level, quizType, quizTypes }) {
  return `
You are a quiz generator for an English grammar learning app.

Return ONLY valid JSON. Do NOT include markdown, backticks, or extra text.

Rules:
- quizType must be one of: ${quizTypes.join(', ')}
- options must be an array of exactly 4 strings
- answer must be exactly equal to one of the options
- question/options/answer/explanation must be non-empty strings
- Use double quotes for all JSON strings
- No trailing commas

Difficulty:
- level: ${level}/10

Output JSON schema:
{
  "quizType": "${quizType}",
  "question": "...",
  "options": ["...", "...", "...", "..."],
  "answer": "...",
  "explanation": "..."
}

Lesson constraints:
- Topic: <YOUR LESSON TOPIC HERE>
- quizType: ${quizType}
`.trim();
}
```

---

## UI Wiring (View → Template)

In `src/ui/views/<LessonView>.js`:

```js
import { generateAIQuiz } from '../../logic/curriculum/<lesson>/quizGenerator.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';

export function LessonView() {
  return LearningPageTemplate({
    // ...
    aiQuizGenerator: (level, signal) => generateAIQuiz(level, signal),
    // ...
  });
}
```

---

## Testing Checklist (Manual)

### 1) Happy path
- Open each lesson → AI Mode
- Generate quiz → answer works → explanation renders properly

### 2) Cancellation
- Click AI Challenge → immediately navigate away (or press Cancel)
- Confirm request is **aborted** in DevTools Network tab
- Confirm UI state resets (no stuck spinner)
- Confirm stale response does not overwrite UI

### 3) Validation failure
- Force a bad prompt (e.g., “Tell me a joke”) or temporarily disable validation
- Confirm UI shows **Generation Failed** + **Retry**
- Confirm Retry recovers

### 4) Rate limit / service down
- Simulate 429/503 (or temporarily mock)
- Confirm friendly error message and Retry flow

### 5) Rapid clicks
- Click AI Challenge twice quickly
- Confirm first request aborts and only second result is displayed

---

## Troubleshooting

### “Invalid JSON” errors
- Tighten the prompt:
  - add “Return ONLY JSON”
  - add “No markdown/backticks”
  - add “No trailing commas”
- Ensure `responseMimeType` is set to `application/json`
- Confirm GeminiService’s JSON extraction logic is working (```json block or `{...}` substring)

### “answer must be one of options”
- Prompt: “answer must exactly match one option string”
- Consider forbidding punctuation variations in options or enforce exact match

### Abort issues (Cancel doesn’t stop)
- Ensure the view/template creates an AbortController per request
- Ensure `signal` is passed to `aiQuizGenerator(level, signal)`
- Ensure GeminiService passes `signal` to `fetch`

---

## Appendix: What NOT to do
- Don’t put lesson prompt logic inside GeminiService.
- Don’t skip validation “because it usually works.” It will break in production.
- Don’t implement hidden retries in service; use UI Retry for control and cost visibility.
