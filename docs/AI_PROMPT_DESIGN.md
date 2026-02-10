# AI Prompt Design & Gemini Service Architecture

## Overview
The application uses Google's Gemini AI to generate infinite practice questions for the "Expert Challenge" mode. To ensure high-quality and relevant questions for each lesson category, the prompt generation logic is modularized using a **Strategy Pattern**.

## Prompt Strategy & Batching
To improve efficiency and response speed, questions are generated in **batches of 5**.
- **Request**: The prompt explicitly asks for 5 distinct questions.
- **Response Format**: A JSON object containing an array of questions.

```json
{
  "quizData": [
    {
      "question": "Question 1 (Japanese)",
      ...
    },
    ...
  ]
}
```

## Localization (Common Utility)
To ensure consistent Japanese output for explanations and instructions, a common utility `src/logic/gemini/prompts/common.js` is used by all prompt modules.
- **Enforced Rules**:
  - `question`: MUST be in Japanese (e.g., "次の文の...")
  - `explanation`: MUST be in Japanese
  - `japaneseTranslation`: MUST be in Japanese
  - `sentence`: MUST be in English

## Adding a New Category
To add AI support for a new lesson category:

1.  **Create a new prompt module**:
    Create `src/logic/gemini/prompts/newCategory.js`. 
    Import `getCommonInstructions` from `./common.js`.
    Implement `generatePrompt(level)` to return a batch request.

    ```javascript
    import { getCommonInstructions } from './common.js';
    
    export const generatePrompt = (level) => {
      const baseInstructions = getCommonInstructions();
      return `Generate 5 questions... ${baseInstructions}`;
    };
    ```

2.  **Register the strategy**:
    (Same as before)

## Error Handling
- **Batch Validation**: The service validates that the response contains the expected `quizData` array.
- **Fallbacks**: If one question in a batch is malformed, it can be skipped (or the whole batch rejected).
