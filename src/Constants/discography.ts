import { Producer, Writer } from './types';
import { WRITERS } from './writerMetadata';

export const Genres = {
  POP: 'pop',
  HIPHOP: 'hip-hop',
  RNB: 'r&b',
};

export interface Record {
  title: string;
  artist: string;
  genre: string;
  producers: Producer[];
  writers: Writer[];
  img: string;
}

export interface FilterMap {
  album: string[];
  artist: string[];
  genre: string[];
  producers: string[];
  writers: string[];
}

const THANK_U_NEXT: Record = {
  title: 'Thank U Next',
  artist: 'Ariana Grande',
  genre: Genres.POP,
  producers: [WRITERS.TOMMY_BROWN],
  writers: [WRITERS.TOMMY_BROWN],
  img: 'https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png',
};

const JUSTICE: Record = {
  title: 'Justice',
  artist: 'Justin Bieber',
  genre: Genres.POP,
  producers: [WRITERS.TOMMY_BROWN, WRITERS.MR_FRANKS],
  writers: [WRITERS.TOMMY_BROWN, WRITERS.MR_FRANKS],
  img: 'https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png',
};

const FUTURE_NOSTALIGA: Record = {
  title: 'Future Nostalgia',
  artist: 'Dua Lipa',
  genre: Genres.POP,
  producers: [WRITERS.SAINT_STEPH],
  writers: [],
  img: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png',
};

export const DISCOGRAPHY = [
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  JUSTICE,
  FUTURE_NOSTALIGA,
];
