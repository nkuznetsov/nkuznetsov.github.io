export interface IImageProps {
  ariaLabel?: string;
  className?: string;
  cursor?: Cursor;
  glow?: boolean;
  link?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  popOutOnHover?: boolean;
  rotate360OnHover?: boolean;
  src?: string;
  Svg?: any;
  themed?: boolean;
  tooltip?: string;
  tooltipBackground?: string;
  tooltipPosition?: TooltipPosition;
  tooltipStyle?: TooltipStyle;
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
