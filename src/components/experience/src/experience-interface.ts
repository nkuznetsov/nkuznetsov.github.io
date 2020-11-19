import { IImage } from 'components/gallery/src/gallery-interface';

export interface IExperienceRendererProps {
  experiences: IExperience[];
}

export interface IExperience {
  name: string;
  position: string;

  /** Translation is based on the display name */
  displayName: string;

  descriptions: string[];
  logo: any;
  tech: any[];
  workUrl?: string;
  period?: string;

  /** Details to show on the back side */
  details?: IDetails;
}

export interface IDetails {
  flipEffect: FlipEffect;
  flipIconBackStyle: FlipIconStyle;
  images: IImage[];
}

export enum FlipEffect {
  None,
  FlipVertical,
  FlipHorizontal
}

export enum FlipIconStyle {
  Dark,
  Light
}
