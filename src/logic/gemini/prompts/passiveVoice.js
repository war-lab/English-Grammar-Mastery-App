import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const types = ['active-to-passive', 'fill-blank'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  return `
Generate 5 distinct English grammar questions focusing on Passive Voice (be + past participle).
Level: ${level}/10.
Selected Type: ${selectedType}

${commonInstructions}

Additional Constraints:
- If 'active-to-passive': Provide an active sentence and ask for the correct passive transformation.
- If 'fill-blank': Focus on the 'be' verb form or 'past participle'.
- Include advanced passive forms (modals + passive) for higher levels.
`;
};
