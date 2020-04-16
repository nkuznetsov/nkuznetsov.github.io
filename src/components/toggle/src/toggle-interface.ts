export enum ToggleType {
  Debug,
  Magic,
  Theme
}

export interface IToggleProps {
  glow?: boolean;
  rotate360OnHover?: boolean;
  toggle: (isChecked: boolean) => void;
  type: ToggleType;
}
