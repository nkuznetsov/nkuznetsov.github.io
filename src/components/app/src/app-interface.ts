export interface IAppContext {
  isMagic: boolean;
  isDebug: boolean;
}

export interface IAppRendererProps {
  changeTheme: (isLight: boolean) => void;
  toggleMagic: (isMagic: boolean) => void;
}
