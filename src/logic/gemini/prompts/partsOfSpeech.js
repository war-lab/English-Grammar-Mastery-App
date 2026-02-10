import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const types = ['identify-pos', 'fill-blank-pos'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  return `
Generate 5 distinct English grammar questions focusing on Parts of Speech (Noun, Verb, Adjective, Adverb, Preposition, Pronoun, Conjunction, Interjection).
Level: ${level}/10.
Selected Type: ${selectedType}

${commonInstructions}

Additional Constraints:
- If 'identify-pos': Ask to identify the part of speech of a specific word (targetWord) in the sentence. Options: ["Noun","Verb","Adjective","Adverb","Preposition","Pronoun","Conjunction","Interjection"].
- If 'fill-blank-pos': Ask to choose the correct word form to fit the part of speech required by the context.
- Ensure 5 distinct questions covering different parts of speech.
`;
};
