export interface IAppRendererProps {
  changeTheme: (isLight: boolean) => void;
  toggleMagic: (isMagic: boolean) => void;
  isMagic: boolean;
}
