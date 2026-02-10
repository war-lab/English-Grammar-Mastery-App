import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const types = ['pattern-id', 'fill-blank'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  return `
Generate 5 distinct English grammar questions focusing on Sentence Patterns (SV, SVC, SVO, SVOO, SVOC).
Level: ${level}/10.
Selected Type: ${selectedType}

${commonInstructions}

Additional Constraints:
- If 'pattern-id': Ask to identify the pattern of the given sentence (e.g. "Identify the sentence pattern"). Options: ["SV","SVC","SVO","SVOO","SVOC"].
- If 'fill-blank': Ask to complete a sentence to match a specific pattern.
- The 'sentence' field MUST be a complete, correct English sentence.
  - For 'pattern-id', show the full sentence.
  - For 'fill-blank', usage a blank (____).
`;
};
