
export const generatePOSQuiz = (level = 1) => {
  const partsOfSpeech = [
    { id: 'noun', label: '名詞 (Noun)' },
    { id: 'verb', label: '動詞 (Verb)' },
    { id: 'adjective', label: '形容詞 (Adjective)' },
    { id: 'adverb', label: '副詞 (Adverb)' },
    { id: 'preposition', label: '前置詞 (Preposition)' },
    { id: 'pronoun', label: '代名詞 (Pronoun)' },
    { id: 'conjunction', label: '接続詞 (Conjunction)' },
    { id: 'interjection', label: '間投詞 (Interjection)' }
  ];

  // Sentence Templates
  // Each template has a structure and a list of words with their POS
  const templates = [
    {
      structure: '{Pronoun} {Verb} {Adjective} {Noun}.',
      words: {
        Pronoun: ['I', 'You', 'He', 'She', 'We', 'They'],
        Verb: ['have', 'want', 'like', 'see', 'buy'],
        Adjective: ['red', 'big', 'new', 'good', 'old'],
        Noun: ['apples', 'cars', 'books', 'houses', 'dogs']
      }
    },
    {
      structure: '{Article} {Adjective} {Noun} {Verb} {Adverb}.',
      words: {
        Article: ['The', 'A'],
        Adjective: ['quick', 'slow', 'happy', 'sad', 'angry'],
        Noun: ['fox', 'turtle', 'boy', 'girl', 'cat'],
        Verb: ['runs', 'walks', 'sings', 'cries', 'sleeps'],
        Adverb: ['fast', 'slowly', 'loudly', 'quietly', 'peacefully']
      }
    },
    {
      structure: '{Preposition} {Article} {Noun}, {Pronoun} {Verb}.',
      words: {
        Preposition: ['In', 'On', 'Under', 'Near'],
        Article: ['the'],
        Noun: ['park', 'table', 'tree', 'house'],
        Pronoun: ['he', 'she', 'it', 'we'],
        Verb: ['plays', 'sits', 'stands', 'waits']
      }
    },
    {
      structure: '{Interjection}! {Pronoun} {Verb} {Conjunction} {Pronoun} {Verb}.',
      words: {
        Interjection: ['Wow', 'Oh', 'Hey', 'Ouch'],
        Pronoun: ['I', 'you', 'he', 'she'],
        Verb: ['run', 'jump', 'sing', 'dance', 'laugh'],
        Conjunction: ['and', 'but', 'or', 'so']
      }
    },
    // New Templates for Phase 5
    {
      structure: '{Article} {Noun} {Verb} {Preposition} {Article} {Noun}.',
      words: {
        Article: ['The', 'A'],
        Noun: ['cat', 'dog', 'bird', 'book', 'pen'],
        Verb: ['is', 'sits', 'stands', 'lies'],
        Preposition: ['on', 'in', 'under', 'near', 'beside']
      }
    },
    {
      structure: '{Pronoun} {Verb} {Adverb} {Conjunction} {Pronoun} {Verb} {Adjective}.',
      words: {
        Pronoun: ['He', 'She', 'They', 'We'],
        Verb: ['works', 'studies', 'plays', 'eats'],
        Adverb: ['hard', 'well', 'fast', 'slowly'],
        Conjunction: ['but', 'and'],
        Adjective: ['tired', 'happy', 'hungry', 'thirsty']
      }
    },
    {
      structure: '{Article} {Adjective} {Noun} {Verb} {Adjective}.',
      words: {
        Article: ['The', 'This', 'That'],
        Adjective: ['big', 'small', 'red', 'blue'],
        Noun: ['flower', 'sky', 'car', 'house'],
        Verb: ['looks', 'smells', 'feels', 'seems'],
      }
    }
  ];

  // Select a random template
  const template = templates[Math.floor(Math.random() * templates.length)];

  // Generate the sentence and track word-POS mapping
  let sentence = template.structure;
  const wordMap = [];

  // Replace placeholders
  for (const [pos, wordList] of Object.entries(template.words)) {
    const placeholder = `{${pos}}`;
    if (sentence.includes(placeholder)) {
      // Handle multiple occurrences if needed (simple replacement for now)
      // For this simple generator, we assume one occurrence per type per template or handle sequentially if we improved logic
      // But regex replace only replaces first occurrence by default with string, so let's use a loop if needed.
      // Actually, let's pick a word first.

      // We need to handle the case where the same POS appears twice differently?
      // For simplicity, the templates above use distinct POS keys mostly.
      // Let's iterate through the sentence to find placeholders.
    }
  }

  // Better approach: Parse the structure
  const parts = template.structure.split(' ');
  let finalSentenceWords = [];
  let targetCandidates = [];

  parts.forEach((part, index) => {
    // Remove punctuation for POS mapping but keep for sentence
    let cleanPart = part.replace(/[.,!]/g, '');
    let punctuation = part.slice(cleanPart.length);

    // Check if it's a placeholder like {Noun}
    if (cleanPart.startsWith('{') && cleanPart.endsWith('}')) {
      const posType = cleanPart.slice(1, -1);
      const wordList = template.words[posType];

      if (wordList) {
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        finalSentenceWords.push(randomWord + punctuation);

        // Map this word to its POS (normalized to our ID list)
        let mappedPosId = posType.toLowerCase();
        if (mappedPosId === 'article') mappedPosId = null; // We don't test articles in this simple set

        if (mappedPosId) {
          targetCandidates.push({
            word: randomWord,
            posId: mappedPosId
          });
        }
      } else {
        finalSentenceWords.push(part);
      }
    } else {
      finalSentenceWords.push(part);
    }
  });

  const finalSentence = finalSentenceWords.join(' ');

  // Select a target word
  if (targetCandidates.length === 0) {
    // Fallback
    return {
      question: 'Error generating quiz.',
      options: [],
      answer: ''
    };
  }

  const target = targetCandidates[Math.floor(Math.random() * targetCandidates.length)];

  // Find the label for the answer
  const answerLabel = partsOfSpeech.find(p => p.id === target.posId).label;

  // Generate options (Answer + 3 random others)
  const otherOptions = partsOfSpeech
    .filter(p => p.id !== target.posId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(p => p.label);

  const options = [answerLabel, ...otherOptions].sort(() => 0.5 - Math.random());

  return {
    question: `次の文中の " ${target.word} " の品詞はどれですか？\n\n"${finalSentence}"`,
    options: options,
    answer: answerLabel,
    explanation: `"${target.word}" はこの文では **${answerLabel}** として使われています。`,
    japaneseTranslation: '（自動生成された文のため、翻訳は省略されます）'
  };
};
