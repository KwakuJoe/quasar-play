export interface Word {
  word?:       string;
  phonetic?:   string;
  phonetics?:  Phonetic[];
  meanings?:   Meaning[];
  license?:    License;
  sourceUrls?: string[];
}

export interface License {
  name: string;
  url:  string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions:  Definition[];
  synonyms:     any[];
  antonyms:     string[];
}

export interface Definition {
  definition: string;
  synonyms:   any[];
  antonyms:   any[];
  example?:   string;
}

export interface Phonetic {
  text:       string;
  audio:      string;
  sourceUrl?: string;
  license?:   License;
}

export interface Errors {
  notFoundIcon:boolean,
  title:string,
  message:string,
  resolution:string,
}
