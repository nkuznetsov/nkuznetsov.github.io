export interface IImageProps {
  alt?: string;
  className?: string;
  cursor?: Cursor;
  glow?: boolean;
  link?: string;
  onClick?: (event: any, index?: number) => void;
  effect?: ImageEffect;
  src?: string;
  Svg?: any;
  themed?: boolean;
  tooltip?: string;
  tooltipBackground?: string;
  tooltipPosition?: TooltipPosition;
  tooltipStyle?: TooltipStyle;
  index?: number; // used in gallery
}

export enum ImageEffect {
  None,
  PopOutOnHover,
  PopOutOnHoverSmall,
  Rotate360OnHover,
  ShakeOnHover
}

export enum Cursor {
  Pointer,
  Wand
}

export enum TooltipStyle {
  Fade,
  Zoom
}

export enum TooltipPosition {
  Left,
  Top,
  Right,
  Bottom
}
