import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const types = ['fill-blank', 'transformation', 'error-correction'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  return `
Generate 5 distinct English grammar questions focusing on Verb Tenses (Present, Past, Future, Progressive, Perfect, Perfect Progressive).
Level: ${level}/10.
Selected Type: ${selectedType}

${commonInstructions}

Additional Constraints:
- Include time expressions to clarify the tense (e.g., yesterday, now, since, by the time).
- Ensure options are different forms of the same verb.
- Cover different tenses across the 5 questions if possible.
`;
};
