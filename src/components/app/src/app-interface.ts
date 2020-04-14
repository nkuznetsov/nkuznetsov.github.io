export interface IAppContext {
  isMagic: boolean;
  isDebug: boolean;
}

export interface IAppRendererProps {
  toggleDebug: (isDebug: boolean) => void;
  toggleMagic: (isMagic: boolean) => void;
  toggleTheme: (isLight: boolean) => void;
}
