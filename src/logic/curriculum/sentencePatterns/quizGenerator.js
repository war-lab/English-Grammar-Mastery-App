import { generateQuiz } from '../../geminiService.js';

export const generateSentencePatternQuiz = (level = 1, isAIMode = false) => {
  // Deprecated isAIMode argument support kept for backward compatibility if needed locally,
  // but strictly speaking the new UI routes AI requests to generateAIQuiz.
  const patterns = ['SV', 'SVC', 'SVO', 'SVOO', 'SVOC'];
  let targetPattern;
  let complexity = 1; // 1: Basic, 2: Intermediate, 3: Advanced

  // --- Granular Level Logic (1-10) ---
  if (level === 1) targetPattern = 'SV';
  else if (level === 2) targetPattern = 'SVC';
  else if (level === 3) targetPattern = 'SVO';
  else if (level === 4) targetPattern = 'SVOO';
  else if (level === 5) targetPattern = 'SVOC';
  else {
    // Levels 6-10: Mixed patterns, increasing complexity
    targetPattern = patterns[Math.floor(Math.random() * patterns.length)];
    if (level <= 7) complexity = 1;
    else if (level <= 9) complexity = 2;
    else complexity = 3;
  }

  let question = '';
  let answer = targetPattern;

  // Data pools for generation
  // Level 1: Basic
  const subjectsL1 = ['I', 'You', 'He', 'She', 'We', 'They', 'The dog', 'The cat'];
  const svVerbsL1 = ['run', 'swim', 'sleep', 'smile', 'walk'];
  const svcVerbsL1 = ['am', 'is', 'are', 'look', 'become'];
  const svcComplementsL1 = ['happy', 'sad', 'tired', 'a student', 'busy'];
  const svoVerbsL1 = ['play', 'eat', 'drink', 'study', 'like'];
  const svoObjectsL1 = ['tennis', 'lunch', 'water', 'English', 'apples'];
  const svooVerbsL1 = ['give', 'show', 'teach'];
  const svooIndirectL1 = ['me', 'him', 'her', 'us'];
  const svooDirectL1 = ['a book', 'a pen', 'a gift'];
  const svocVerbsL1 = ['call', 'name', 'make'];
  const svocObjectsL1 = ['him', 'her', 'it', 'me'];
  const svocComplementsL1 = ['Tom', 'happy', 'sad'];

  // Level 2: Intermediate (More vocab, longer sentences)
  const subjectsL2 = ['My father', 'The teacher', 'Our team', 'The new student', 'Everyone'];
  const svVerbsL2 = ['exist', 'fly', 'arrive', 'disappear', 'laugh'];
  const svcVerbsL2 = ['seem', 'feel', 'taste', 'smell', 'remain', 'stay'];
  const svcComplementsL2 = ['excited', 'nervous', 'delicious', 'strange', 'calm'];
  const svoVerbsL2 = ['watch', 'have', 'love', 'know', 'understand', 'finish'];
  const svoObjectsL2 = ['the movie', 'a great idea', 'classical music', 'the answer', 'the project'];
  const svooVerbsL2 = ['buy', 'make', 'send', 'lend', 'offer', 'pass'];
  const svooIndirectL2 = ['them', 'you', 'the customer', 'my friend'];
  const svooDirectL2 = ['an email', 'some money', 'a job', 'the salt', 'a cup of tea'];
  const svocVerbsL2 = ['keep', 'find', 'think', 'leave'];
  const svocObjectsL2 = ['the room', 'the door', 'the test', 'the baby'];
  const svocComplementsL2 = ['clean', 'open', 'difficult', 'alone', 'safe'];

  // Level 3: Advanced (Abstract, tricky verbs)
  const subjectsL3 = ['The sudden noise', 'His explanation', 'The long journey', 'Her decision', 'The weather', 'The AI'];
  const svVerbsL3 = ['occurred', 'happened', 'lasted', 'ended', 'rose', 'evolved'];
  const svcVerbsL3 = ['proved', 'turned out', 'sounded', 'appeared'];
  const svcComplementsL3 = ['wrong', 'true', 'reasonable', 'impossible', 'complex'];
  const svoVerbsL3 = ['discuss', 'mention', 'approach', 'resemble', 'attend', 'analyze'];
  const svoObjectsL3 = ['the issue', 'the problem', 'the station', 'his father', 'the meeting', 'the data'];
  const svooVerbsL3 = ['award', 'grant', 'promise', 'deny'];
  const svooIndirectL3 = ['the winner', 'the applicant', 'him', 'the prisoner', 'the user'];
  const svooDirectL3 = ['a prize', 'permission', 'support', 'freedom', 'access'];
  const svocVerbsL3 = ['consider', 'elect', 'appoint', 'believe'];
  const svocObjectsL3 = ['him', 'her', 'the plan', 'the situation', 'the system'];
  const svocComplementsL3 = ['a genius', 'president', 'chairman', 'a success', 'hopeless', 'optimal'];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Select pools based on complexity
  let sub, svV, svcV, svcC, svoV, svoO, svooV, svooI, svooD, svocV, svocO, svocC;

  if (complexity === 1) {
    sub = subjectsL1; svV = svVerbsL1; svcV = svcVerbsL1; svcC = svcComplementsL1;
    svoV = svoVerbsL1; svoO = svoObjectsL1; svooV = svooVerbsL1; svooI = svooIndirectL1; svooD = svooDirectL1;
    svocV = svocVerbsL1; svocO = svocObjectsL1; svocC = svocComplementsL1;
  } else if (complexity === 2) {
    sub = [...subjectsL1, ...subjectsL2]; svV = [...svVerbsL1, ...svVerbsL2]; svcV = [...svcVerbsL1, ...svcVerbsL2]; svcC = [...svcComplementsL1, ...svcComplementsL2];
    svoV = [...svoVerbsL1, ...svoVerbsL2]; svoO = [...svoObjectsL1, ...svoObjectsL2]; svooV = [...svooVerbsL1, ...svooVerbsL2]; svooI = [...svooIndirectL1, ...svooIndirectL2]; svooD = [...svooDirectL1, ...svooDirectL2];
    svocV = [...svocVerbsL1, ...svocVerbsL2]; svocO = [...svocObjectsL1, ...svocObjectsL2]; svocC = [...svocComplementsL1, ...svocComplementsL2];
  } else {
    // Level 3 includes everything
    sub = [...subjectsL1, ...subjectsL2, ...subjectsL3];
    svV = [...svVerbsL1, ...svVerbsL2, ...svVerbsL3];
    svcV = [...svcVerbsL1, ...svcVerbsL2, ...svcVerbsL3];
    svcC = [...svcComplementsL1, ...svcComplementsL2, ...svcComplementsL3];
    svoV = [...svoVerbsL1, ...svoVerbsL2, ...svoVerbsL3];
    svoO = [...svoObjectsL1, ...svoObjectsL2, ...svoObjectsL3];
    svooV = [...svooVerbsL1, ...svooVerbsL2, ...svooVerbsL3];
    svooI = [...svooIndirectL1, ...svooIndirectL2, ...svooIndirectL3];
    svooD = [...svooDirectL1, ...svooDirectL2, ...svooDirectL3];
    svocV = [...svocVerbsL1, ...svocVerbsL2, ...svocVerbsL3];
    svocO = [...svocObjectsL1, ...svocObjectsL2, ...svocObjectsL3];
    svocC = [...svocComplementsL1, ...svocComplementsL2, ...svocComplementsL3];
  }

  // Fallback to random pattern generator for quick testing if needed
  switch (targetPattern) {
    case 'SV': question = `${getRandom(sub)} ${getRandom(svV)}.`; break;
    case 'SVC': question = `${getRandom(sub)} ${getRandom(svcV)} ${getRandom(svcC)}.`; break;
    case 'SVO': question = `${getRandom(sub)} ${getRandom(svoV)} ${getRandom(svoO)}.`; break;
    case 'SVOO': question = `${getRandom(sub)} ${getRandom(svooV)} ${getRandom(svooI)} ${getRandom(svooD)}.`; break;
    case 'SVOC':
      const verb = getRandom(svocV);
      let obj = getRandom(svocO);
      let comp = getRandom(svocC);
      if (['call', 'name', 'elect', 'appoint'].includes(verb)) {
        comp = Math.random() > 0.5 ? 'Tom' : 'captain';
        if (complexity > 1) comp = getRandom(['president', 'chairman', 'leader']);
      } else if (['make', 'keep', 'leave', 'find', 'consider'].includes(verb)) {
        comp = getRandom(['happy', 'sad', 'clean', 'safe', 'difficult', 'wrong']);
      }
      question = `${getRandom(sub)} ${verb} ${obj} ${comp}.`;
      break;
  }

  question = fixGrammar(question);

  return {
    question: `次の英文の文型を答えなさい：\n\n"${question}"`,
    options: patterns,
    answer: answer
  };
};

const fixGrammar = (sentence) => {
  let s = sentence;
  // Basic Subject-Verb Agreement fixes
  s = s.replace(/^I (is|are|run|swim|sleep|smile|cry|walk|exist|fly|play|eat|drink|study|watch|have|like|love|know|give|show|tell|teach|buy|make|send|lend|call|name|keep|find|think)/, (match, verb) => {
    if (verb === 'is') return 'I am';
    if (verb === 'are') return 'I am';
    return `I ${verb}`; // I run (no s)
  });

  const singularSubjects = ['He', 'She', 'The dog', 'The cat', 'The bird', 'My father', 'The teacher', 'The new student', 'The sudden noise', 'His explanation', 'The long journey', 'Her decision', 'The weather', 'Everyone'];

  singularSubjects.forEach(sub => {
    if (s.startsWith(sub + ' ')) {
      s = s.replace(new RegExp(`^${sub} am`), `${sub} is`);
      s = s.replace(new RegExp(`^${sub} are`), `${sub} is`);

      const words = s.split(' ');
      if (words[1] && !['is', 'was', 'can', 'will', 'must', 'should'].includes(words[1]) && !words[1].endsWith('s') && !words[1].endsWith('ed')) {
        if (words[1] === 'have') words[1] = 'has';
        else if (words[1] === 'study') words[1] = 'studies';
        else if (words[1] === 'fly') words[1] = 'flies';
        else if (words[1] === 'cry') words[1] = 'cries';
        else if (words[1] === 'watch') words[1] = 'watches';
        else if (words[1] === 'teach') words[1] = 'teaches';
        else if (words[1] === 'go') words[1] = 'goes';
        else if (words[1] === 'pass') words[1] = 'passes';
        else if (words[1] === 'discuss') words[1] = 'discusses';
        else if (words[1] === 'approach') words[1] = 'approaches';
        else if (words[1] === 'finish') words[1] = 'finishes';
        else words[1] += 's';
        s = words.join(' ');
      }
    }
  });

  const pluralSubjects = ['You', 'We', 'They', 'Our team'];
  pluralSubjects.forEach(sub => {
    if (s.startsWith(sub + ' ')) {
      s = s.replace(new RegExp(`^${sub} am`), `${sub} are`);
      s = s.replace(new RegExp(`^${sub} is`), `${sub} are`);
    }
  });

  return s;
};

// --- New AI Quiz Generator ---

/**
 * Generates an AI-powered quiz for 5 Sentence Patterns.
 * @param {number} level - Difficulty level (1-10).
 * @param {AbortSignal} signal - Abort signal for cancellation.
 * @returns {Promise<Object>} Quiz object.
 */
export const generateAIQuiz = async (level = 1, signal) => {
  const types = ['pattern-id', 'fill-blank', 'error-correction', 'transformation'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  let prompt = '';

  if (selectedType === 'pattern-id') {
    prompt = `Generate 1 English sentence using one of 5 patterns (SV, SVC, SVO, SVOO, SVOC).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の英文の文型を答えなさい：\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "answer":"[Pattern(SV/SVC/SVO/SVOO/SVOC)]", "options":["SV","SVC","SVO","SVOO","SVOC"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The 'sentence' MUST be in English. Answer MUST be one of SV, SVC, SVO, SVOO, SVOC.`;
  }
  else if (selectedType === 'fill-blank') {
    prompt = `Generate 1 fill-in-the-blank question using 5 patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な語を選びなさい：\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer Word (English)]", "answer":"[Answer Word (English)]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The 'sentence' and options MUST be in English. Provide 4 options.`;
  }
  else if (selectedType === 'error-correction') {
    prompt = `Generate 1 error correction question related to sentence patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の誤りを訂正しなさい：\\n\\n\\"[Wrong English Sentence]\\"", "japaneseTranslation":"[Correct Japanese Translation]", "wrongSentence":"[Wrong English Sentence]", "correctSentence":"[Correct English Sentence]", "answer":"[Correct English Word/Phrase]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The sentences and options MUST be in English. Provide 4 options found in the sentence or corrections.`;
  }
  else if (selectedType === 'transformation') {
    prompt = `Generate 1 sentence pattern transformation question.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文を指定された文型に書き換えなさい：\\n\\n元の文: \\"[Original English Sentence]\\"\\n目標文型: [Target Pattern]", "japaneseTranslation":"[Japanese Translation]", "originalSentence":"[Original English Sentence]", "targetPattern":"[Target Pattern]", "answer":"[Correct English Sentence]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The sentences and options MUST be in English. Target pattern must be SV/SVC/SVO/SVOO/SVOC. Provide 4 full sentence options.`;
  }

  const result = await generateQuiz({
    prompt,
    temperature: 0.8,
    responseMimeType: 'application/json',
    signal
  });

  // Strict Validation
  if (!result || typeof result !== 'object') throw new Error('Invalid response format');
  if (!result.question || typeof result.question !== 'string') throw new Error('Missing question field');
  if (!Array.isArray(result.options) || result.options.length < 2) throw new Error('Invalid options array');
  if (!result.answer || !result.options.includes(result.answer)) throw new Error('Answer not found in options');

  // Trim strings
  result.question = result.question.trim();
  result.answer = result.answer.trim();
  result.options = result.options.map(o => o.trim()).filter(o => o.length > 0);

  if (result.options.length < 2) throw new Error('Not enough valid options');

  return result;
};

