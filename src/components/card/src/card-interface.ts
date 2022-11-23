import { IExperience } from 'components/experience/src/experience-interface';

export interface ICardRendererProps {
  experience: IExperience;
}

export interface ICardSideRendererProps {
  experience: IExperience;
  cardContainerStyle: string;
  onFlip?: (isFlipped: boolean) => void;
  flipImage?: any;
}
