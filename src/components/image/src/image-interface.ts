export interface IImageProps {
  ariaLabel?: string;
  className?: string;
  customCursor?: boolean;
  glow?: boolean;
  link?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  popOutOnHover?: boolean;
  rotate360OnHover?: boolean;
  src?: string;
  Svg?: any;
  themed?: boolean;
}
