export interface ICardFlipProps {
  /** z-Index for the flip card. Used to help solve context stack issues while using multiple flip cards */
  cardZIndex?: string;

  isFlipped?: boolean;

  /** The speed of the flip animation when the card flips from back to front, the higher the number the slower the flip animation */
  flipSpeedBackToFront?: number;

  /** The speed of the flip animation when the card flips from front to back, the higher the number the slower the flip animation */
  flipSpeedFrontToBack?: number;

  /** False to rotate in opposite directions on both sides of the card, true to rotate in the same direction */
  infinite?: boolean;

  flipDirection: CardFlipDirection;

  children: [React.ReactNode, React.ReactNode];

  containerStyle?: string;
}

export enum CardFlipDirection {
  None,
  Horizontal,
  Vertical
}
