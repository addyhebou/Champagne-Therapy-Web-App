export interface RosterMember {
  name: string;
  imageURL: string;
}

export interface Writer {
  name: string;
  imageURL: string;
  biography: string;
  bigImageURL: string;
  socials: Record<SocialMediaPlatform, string>;
}

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
