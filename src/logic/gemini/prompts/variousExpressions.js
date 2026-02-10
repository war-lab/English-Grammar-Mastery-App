import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const topics = ['Imperative Sentence', 'Impersonal it', 'There is/are', 'Quantity Expressions'];
  // Mix topics for variety in the batch

  return `
Generate 5 distinct English grammar questions focusing on Various Expressions: ${topics.join(', ')}.
Level: ${level}/10.

${commonInstructions}

Additional Constraints:
- Try to include at least one question from each topic if possible.
- 'Imperative Sentence': Don't, Let's, Be...
- 'Impersonal it': Weather, time, distance, dark/light.
- 'There is/are': Singular vs plural validation.
- 'Quantity Expressions': many/much/few/little/a lot of.
`;
};
