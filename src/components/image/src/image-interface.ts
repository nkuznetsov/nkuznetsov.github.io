export interface IImageProps {
  ariaLabel?: string;
  className?: string;
  link?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  popOutOnHover?: boolean;
  rotate360OnHover?: boolean;
  src?: string;
  Svg?: any;
  themed?: boolean;
}
