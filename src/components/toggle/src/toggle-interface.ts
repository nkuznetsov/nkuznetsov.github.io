export enum ToggleType {
  Debug,
  Magic,
  Theme
}

export interface IToggleProps {
  type: ToggleType;
  toggle: (isChecked: boolean) => void;
}
