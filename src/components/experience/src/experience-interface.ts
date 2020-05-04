import { Tech } from '../../../utils/utils-interface';

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
  description: string;
  logo: any;
  tech: Tech[];
}
