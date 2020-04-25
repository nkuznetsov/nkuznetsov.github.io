export enum ToggleType {
  Debug,
  Magic,
  Theme
}

export interface IToggleProps {
  customCursor?: boolean;
  glow?: boolean;
  rotate360OnHover?: boolean;
  toggle: (isChecked: boolean) => void;
  type: ToggleType;
}
