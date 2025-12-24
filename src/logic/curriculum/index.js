
import { sv } from './sentencePatterns/sv.js';
import { svc } from './sentencePatterns/svc.js';
import { svo } from './sentencePatterns/svo.js';
import { svoo } from './sentencePatterns/svoo.js';
import { svoc } from './sentencePatterns/svoc.js';

import { presentSimple } from './tenses/presentSimple.js';
import { presentComparison } from './tenses/presentComparison.js';
import { pastTense } from './tenses/pastTense.js';
import { pastComparison } from './tenses/pastComparison.js';
import { progressiveTense } from './tenses/progressiveTense.js';
import { futureTense } from './tenses/futureTense.js';
import { perfectTense } from './tenses/perfectTense.js';
import { presentPerfectProgressive } from './tenses/presentPerfectProgressive.js';

import { noun } from './partsOfSpeech/noun.js';
import { verb } from './partsOfSpeech/verb.js';
import { adjective } from './partsOfSpeech/adjective.js';
import { adverb } from './partsOfSpeech/adverb.js';
import { preposition } from './partsOfSpeech/preposition.js';
import { pronoun } from './partsOfSpeech/pronoun.js';
import { conjunction } from './partsOfSpeech/conjunction.js';
import { interjection } from './partsOfSpeech/interjection.js';


import { canCould } from './auxiliaryVerbs/canCould.js';
import { willWould } from './auxiliaryVerbs/willWould.js';
import { mustShould } from './auxiliaryVerbs/mustShould.js';
import { mayMight } from './auxiliaryVerbs/mayMight.js';

import { passiveBasics } from './passiveVoice/basics.js';

export const curriculum = [
  {
    id: 'sentence-patterns',
    title: '5つの文型 (5 Sentence Patterns)',
    topics: [sv, svc, svo, svoo, svoc]
  },
  {
    id: 'tenses',
    title: '時制マスター (Verb Tenses)',
    topics: [presentSimple, presentComparison, pastTense, pastComparison, progressiveTense, futureTense, perfectTense, presentPerfectProgressive]
  },
  {
    id: 'auxiliary-verbs',
    title: '助動詞 (Auxiliary Verbs)',
    topics: [canCould, willWould, mustShould, mayMight]
  },
  {
    id: 'passive-voice',
    title: '受動態 (Passive Voice)',
    topics: [passiveBasics]
  },
  {
    id: 'parts-of-speech',
    title: '品詞マスター (Parts of Speech)',
    topics: [noun, verb, adjective, adverb, preposition, pronoun, conjunction, interjection]
  }
];

