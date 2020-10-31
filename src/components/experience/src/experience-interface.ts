export interface IExperienceRendererProps {
  experiences: IExperience[];
}

export interface ICardFrontRendererProps {
  experience: IExperience;
}

export interface IExperienceCardRendererProps {
  experience: IExperience;
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
  effect?: ExperienceCardEffect;
}

export enum ExperienceCardEffect {
  None,
  Flip,
  LightUp
}
