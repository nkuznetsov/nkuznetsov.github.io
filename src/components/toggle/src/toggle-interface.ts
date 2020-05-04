import { Cursor } from '../../image/src/image-interface';

export enum ToggleType {
  Debug,
  Magic,
  Theme
}

export interface IToggleProps {
  cursor?: Cursor;
  glow?: boolean;
  rotate360OnHover?: boolean;
  toggle: (isChecked: boolean) => void;
  type: ToggleType;
}
