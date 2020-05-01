export interface IExperienceRendererProps {
  experiences: IExperience[];
}

export interface IExperienceCardRendererProps {
  experience: IExperience;
}

export interface IExperience {
  /**
   * Logo is obtained based on experience's name
   */
  name: string;

  /**
   * Translation is based on the display name
   */
  displayName: string;

  description: string;

  // tech
}
