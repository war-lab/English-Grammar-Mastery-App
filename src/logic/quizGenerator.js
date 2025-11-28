export const generateSentencePatternQuiz = (level = 1, isAIMode = false) => {
  const patterns = ['SV', 'SVC', 'SVO', 'SVOO', 'SVOC'];
  let targetPattern;
  let complexity = 1; // 1: Basic, 2: Intermediate, 3: Advanced

  // --- AI Mode Logic ---
  if (isAIMode) {
    targetPattern = patterns[Math.floor(Math.random() * patterns.length)];
    complexity = 3; // Always max complexity
    // In AI mode, we might want even crazier sentences, handled by complexity 3 pools for now
  }
  // --- Granular Level Logic (1-10) ---
  else {
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

  switch (targetPattern) {
    case 'SV':
      question = `${getRandom(sub)} ${getRandom(svV)}.`;
      break;
    case 'SVC':
      question = `${getRandom(sub)} ${getRandom(svcV)} ${getRandom(svcC)}.`;
      break;
    case 'SVO':
      question = `${getRandom(sub)} ${getRandom(svoV)} ${getRandom(svoO)}.`;
      break;
    case 'SVOO':
      question = `${getRandom(sub)} ${getRandom(svooV)} ${getRandom(svooI)} ${getRandom(svooD)}.`;
      break;
    case 'SVOC':
      const verb = getRandom(svocV);
      let obj = getRandom(svocO);
      let comp = getRandom(svocC);

      // Basic logic to avoid nonsense
      if (['call', 'name', 'elect', 'appoint'].includes(verb)) {
        comp = Math.random() > 0.5 ? 'Tom' : 'captain';
        if (complexity > 1) comp = getRandom(['president', 'chairman', 'leader']);
      } else if (['make', 'keep', 'leave', 'find', 'consider'].includes(verb)) {
        // Adjectives usually
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

  // He/She/The dog/The bird/My father/The teacher -> needs 's' for 3rd person singular
  // Expanded list for new subjects
  const singularSubjects = ['He', 'She', 'The dog', 'The cat', 'The bird', 'My father', 'The teacher', 'The new student', 'The sudden noise', 'His explanation', 'The long journey', 'Her decision', 'The weather', 'Everyone'];

  singularSubjects.forEach(sub => {
    if (s.startsWith(sub + ' ')) {
      // Fix be verbs
      s = s.replace(new RegExp(`^${sub} am`), `${sub} is`);
      s = s.replace(new RegExp(`^${sub} are`), `${sub} is`);

      // Add 's' to other verbs if not already ending in s (rough heuristic)
      const words = s.split(' ');
      if (words[1] && !['is', 'was', 'can', 'will', 'must', 'should'].includes(words[1]) && !words[1].endsWith('s') && !words[1].endsWith('ed')) {
        // specific irregulars
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

  // You/We/They -> are, no 's'
  const pluralSubjects = ['You', 'We', 'They', 'Our team'];

  pluralSubjects.forEach(sub => {
    if (s.startsWith(sub + ' ')) {
      s = s.replace(new RegExp(`^${sub} am`), `${sub} are`);
      s = s.replace(new RegExp(`^${sub} is`), `${sub} are`);
    }
  });

  return s;
};
