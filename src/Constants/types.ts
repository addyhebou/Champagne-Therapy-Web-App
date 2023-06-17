import { FILTERS } from './constants';

export interface RosterMember {
  name: string;
  imageURL: string;
  biography: string;
  bigImageURL: string;
  socials?: Record<SocialMediaPlatform, string>;
  roles: string[];
}

export interface Writer extends RosterMember {}

export interface Producer extends RosterMember {}

export interface Artist extends RosterMember {}

export const ROLES = {
  PRODUCER: 'Producer',
  ARTIST: 'Artist',
  WRITER: 'Writer',
};

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
