export interface IThemeControllerContainerProps {
  changeTheme: (isLight: boolean) => void;
}

export interface IThemeControllerRendererProps {
  switchTheme: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
