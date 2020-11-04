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
  effect: CardEffect;
}

export enum CardEffect {
  None,
  FlipVertical,
  FlipHorizontal
}
