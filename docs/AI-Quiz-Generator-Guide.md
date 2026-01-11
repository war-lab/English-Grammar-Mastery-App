# AI Quiz Generator Creation Guide

This guide explains how to create new AI-powered quiz generators for the English Grammar Mastery App.

## Overview

The app uses a generic `GeminiService` to interact with the Google Gemini API. Each lesson has a specific `quizGenerator.js` that defines a `generateAIQuiz` function. This function constructs a specific prompt for the lesson and handles the API response.

## Architecture

1.  **`src/logic/geminiService.js`**:
    *   `generateQuiz({ prompt, systemInstruction, model, temperature, responseMimeType, signal })`: The generic function that handles the API call, error handling, and JSON parsing.

2.  **`src/logic/curriculum/<lesson>/quizGenerator.js`**:
    *   `generateAIQuiz(level, signal)`: The lesson-specific function.
    *   Defines `prompt` based on quiz types (e.g., 'fill-blank', 'translate').
    *   Calls `generateQuiz`.
    *   Validates the returned JSON structure.

3.  **`src/ui/views/<LessonView>.js`**:
    *   Passes `generateAIQuiz` to `LearningPageTemplate` as the `aiQuizGenerator` prop.
    *   Updates `aiPromptContext` if needed (optional, logic moved mostly to generator).

## Step-by-Step Guide

### 1. Create/Update `quizGenerator.js`

In your lesson's folder (e.g., `src/logic/curriculum/newLesson/quizGenerator.js`), add the `generateAIQuiz` function.

```javascript
import { generateQuiz } from '../../geminiService.js';

export const generateAIQuiz = async (level = 1, signal) => {
  // 1. Define Quiz Types
  const types = ['type-1', 'type-2'];
  const selectedType = types[Math.floor(Math.random() * types.length)];
  
  // 2. Construct Prompt
  let prompt = '';
  if (selectedType === 'type-1') {
    prompt = `Generate 1 question about [Topic].
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"...", "options":["..."], "answer":"...", "explanation":"..."}
Note: ...`;
  }

  // 3. Call Service
  const result = await generateQuiz({
    prompt,
    temperature: 0.8,
    responseMimeType: 'application/json',
    signal // Important: Pass the abort signal!
  });

  // 4. Validate Response (Crucial!)
  if (!result || typeof result !== 'object') throw new Error('Invalid response format');
  if (!result.question) throw new Error('Missing question');
  if (!Array.isArray(result.options) || result.options.length < 2) throw new Error('Invalid options');
  if (!result.answer) throw new Error('Missing answer');

  return result;
};
```

### 2. Update UI View

In your view file (e.g., `src/ui/views/NewLesson.js`), import the function and pass it to the template.

```javascript
import { generateAIQuiz } from '../../logic/curriculum/newLesson/quizGenerator.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';

export const NewLesson = () => {
  // ...
  return LearningPageTemplate({
    // ...
    aiQuizGenerator: (level, signal) => generateAIQuiz(level, signal),
    // ...
  });
};
```

## Best Practices

*   **Prompt Engineering**: Be very specific about the JSON format in the prompt. Provide a literal template.
*   **Validation**: Always validate the returned object properties (`question`, `options`, `answer`, `explanation`). The AI might occasionally halluciation or format incorrectly.
*   **Cancellation**: Always pass the `signal` explicitly to ensure `AbortController` works when the user leaves the page or retries.
*   **Error Handling**: The `LearningPageTemplate` handles the UI for errors, but your generator should throw meaningful errors if validation fails.
