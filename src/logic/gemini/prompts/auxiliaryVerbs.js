import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const types = ['fill-blank', 'nuance-check'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  return `
Generate 5 distinct English grammar questions focusing on Auxiliary Verbs (can, could, will, would, must, should, may, might).
Level: ${level}/10.
Selected Type: ${selectedType}

${commonInstructions}

Additional Constraints:
- If 'fill-blank': Choose the best auxiliary verb for the context.
- If 'nuance-check': Ask about the meaning (ability, permission, obligation, etc.).
- Ensure options are confusing but have one clear best answer based on context.
`;
};
