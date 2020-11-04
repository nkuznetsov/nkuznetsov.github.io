export interface IImageProps {
  ariaLabel?: string;
  className?: string;
  cursor?: Cursor;
  glow?: boolean;
  link?: string;
  onClick?: (event: any) => void;
  effect?: ImageEffect;
  src?: string;
  Svg?: any;
  themed?: boolean;
  tooltip?: string;
  tooltipBackground?: string;
  tooltipPosition?: TooltipPosition;
  tooltipStyle?: TooltipStyle;
}

export enum ImageEffect {
  None,
  PopOutOnHover,
  Rotate360OnHover
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
