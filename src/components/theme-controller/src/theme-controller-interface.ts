export interface IThemeControllerContainerProps {
  changeTheme: (isChecked: boolean) => void;
}

export interface IThemeControllerRendererProps {
  switchTheme: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
