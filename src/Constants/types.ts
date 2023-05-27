import { FILTERS } from './constants';

export interface RosterMember {
  name: string;
  imageURL: string;
}

export interface Writer extends RosterMember {
  biography: string;
  bigImageURL: string;
  socials: Record<SocialMediaPlatform, string>;
}

export interface Producer extends Writer {}

export type SocialMediaPlatform =
  | 'Tik Tok'
  | 'Spotify'
  | 'Apple Music'
  | 'YouTube';

export interface NewRelease {
  artworkURL: string;
  title: string;
  description: string;
  buttonText: string;
  redirectURL: string;
}

export type ModalType = string;
export const ModalTypes = {
  NEWS_ALERT: 'news_alert',
  STANDARD: 'standard',
  EMAIL: 'email',
  RECORD: 'record',
};

export type FilterCategory = (typeof FILTERS)[number];

export type RGB = number[];
