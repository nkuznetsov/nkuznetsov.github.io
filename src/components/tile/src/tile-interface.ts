export interface ITileProps {
  index: number;
  thumbnail: string;
  alt?: string;
  onClick?: (event: any, index?: number) => void;
  isDynamic?: boolean;
}
