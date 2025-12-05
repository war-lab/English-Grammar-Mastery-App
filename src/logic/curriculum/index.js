
import { sv } from './sentencePatterns/sv.js';
import { svc } from './sentencePatterns/svc.js';
import { svo } from './sentencePatterns/svo.js';
import { svoo } from './sentencePatterns/svoo.js';
import { svoc } from './sentencePatterns/svoc.js';

import { noun } from './partsOfSpeech/noun.js';
import { verb } from './partsOfSpeech/verb.js';
import { adjective } from './partsOfSpeech/adjective.js';
import { adverb } from './partsOfSpeech/adverb.js';
import { preposition } from './partsOfSpeech/preposition.js';
import { pronoun } from './partsOfSpeech/pronoun.js';
import { conjunction } from './partsOfSpeech/conjunction.js';
import { interjection } from './partsOfSpeech/interjection.js';

export const curriculum = [
  {
    id: 'sentence-patterns',
    title: '5つの文型 (5 Sentence Patterns)',
    topics: [sv, svc, svo, svoo, svoc]
  },
  {
    id: 'parts-of-speech',
    title: '品詞マスター (Parts of Speech)',
    topics: [noun, verb, adjective, adverb, preposition, pronoun, conjunction, interjection]
  }
];
