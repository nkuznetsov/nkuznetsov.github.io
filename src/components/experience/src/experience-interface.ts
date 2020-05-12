export interface IExperienceRendererProps {
  experiences: IExperience[];
}

export interface IExperienceCardRendererProps {
  experience: IExperience;
}

export interface IExperience {
  name: string;
  position: string;

  /**
   * Translation is based on the display name
   */
  displayName: string;
  descriptions: string[];
  logo: any;
  tech: any[];
  companyUrl: string;
  workUrl?: string;
}
