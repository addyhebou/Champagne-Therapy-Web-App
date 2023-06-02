import { Producer, Writer } from './types';
import { WRITERS } from './writerMetadata';

export const Genres = {
  POP: 'Pop',
  HIPHOP: 'Hip-Hop',
  RNB: 'R&B',
  REGGAETON: 'Reggaeton',
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
  producers: [WRITERS.TOMMY_BROWN],
  writers: [WRITERS.MELANIE_JOY_FONTANA],
  img: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png',
};
const DAWN_FM: Record = {
  title: 'Dawn FM',
  artist: 'The Weeknd',
  genre: Genres.POP,
  producers: [WRITERS.PETER_LEE_JOHNSON, WRITERS.TOMMY_BROWN],
  writers: [],
  img: 'https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png',
};
const POSITIONS: Record = {
  title: 'Positions',
  artist: 'Ariana Grande',
  genre: Genres.POP,
  producers: [
    WRITERS.PETER_LEE_JOHNSON,
    WRITERS.TOMMY_BROWN,
    WRITERS.MR_FRANKS,
  ],
  writers: [],
  img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Ariana_Grande_-_Positions.png/220px-Ariana_Grande_-_Positions.png',
};
const CERTIFIED_LOVER_BOY: Record = {
  title: 'Certified Lover Boy',
  artist: 'Drake',
  genre: Genres.HIPHOP,
  producers: [WRITERS.PETER_LEE_JOHNSON],
  writers: [],
  img: 'https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png',
};
const MAP_OF_THE_SOUL_7: Record = {
  title: 'Map Of the Soul: 7',
  artist: 'BTS',
  genre: Genres.POP,
  producers: [],
  writers: [WRITERS.MELANIE_JOY_FONTANA],
  img: 'https://upload.wikimedia.org/wikipedia/en/2/21/BTS_-_Map_of_the_Soul_7.png',
};
const LEGEND: Record = {
  title: 'Legend',
  artist: 'John Legend',
  genre: Genres.RNB,
  producers: [],
  writers: [WRITERS.MELANIE_JOY_FONTANA],
  img: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Legend_%28John_Legend_album%29.jpg',
};
const UN_VERANO_SIN_TI: Record = {
  title: 'Un Verano Sin Ti',
  artist: 'Bad Bunny',
  genre: Genres.REGGAETON,
  producers: [WRITERS.BASS_CHARITY],
  writers: [WRITERS.BASS_CHARITY],
  img: 'https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png',
};
const LLNM2: Record = {
  title: 'LLNM2',
  artist: 'Anuel AA',
  genre: Genres.REGGAETON,
  producers: [WRITERS.BASS_CHARITY, WRITERS.RHYS],
  writers: [WRITERS.BASS_CHARITY, WRITERS.RHYS],
  img: 'https://upload.wikimedia.org/wikipedia/en/b/be/Anuel_AA_-_LLNM2.jpg',
};

export const DISCOGRAPHY = [
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  DAWN_FM,
  POSITIONS,
  CERTIFIED_LOVER_BOY,
  MAP_OF_THE_SOUL_7,
  LEGEND,
  UN_VERANO_SIN_TI,
  LLNM2,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  DAWN_FM,
  POSITIONS,
  CERTIFIED_LOVER_BOY,
  MAP_OF_THE_SOUL_7,
  LEGEND,
  UN_VERANO_SIN_TI,
  LLNM2,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  THANK_U_NEXT,
  DAWN_FM,
  POSITIONS,
  CERTIFIED_LOVER_BOY,
  MAP_OF_THE_SOUL_7,
  JUSTICE,
  UN_VERANO_SIN_TI,
  LEGEND,
  FUTURE_NOSTALIGA,
  LLNM2,
  THANK_U_NEXT,
  JUSTICE,
  DAWN_FM,
  POSITIONS,
  CERTIFIED_LOVER_BOY,
  MAP_OF_THE_SOUL_7,
  FUTURE_NOSTALIGA,
  UN_VERANO_SIN_TI,
  LEGEND,
  LLNM2,
  THANK_U_NEXT,
  JUSTICE,
  FUTURE_NOSTALIGA,
  DAWN_FM,
  POSITIONS,
  CERTIFIED_LOVER_BOY,
  MAP_OF_THE_SOUL_7,
  LLNM2,
  THANK_U_NEXT,
  UN_VERANO_SIN_TI,
  JUSTICE,
  LEGEND,
  FUTURE_NOSTALIGA,
  DAWN_FM,
  LLNM2,
  THANK_U_NEXT,
  POSITIONS,
  CERTIFIED_LOVER_BOY,
  MAP_OF_THE_SOUL_7,
  JUSTICE,
  UN_VERANO_SIN_TI,
  FUTURE_NOSTALIGA,
  JUSTICE,
  LEGEND,
  DAWN_FM,
  FUTURE_NOSTALIGA,
  POSITIONS,
  CERTIFIED_LOVER_BOY,
  MAP_OF_THE_SOUL_7,
  LEGEND,
  UN_VERANO_SIN_TI,
  LLNM2,
];
