enum ThemeType {
  Light = 'lightTheme',
  Dark = 'darkTheme'
}

interface IBaseTheme {
  // Styles, common across themes

  // Key surface categories, excluding background
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  surface: string;
  error: string;

  // On categories, excluding onBackground
  onPrimary: string;
  onSecondary: string;
  onSurface: string;
  onError: string;
}

interface ITheme {
  base: IBaseTheme;
  type: ThemeType;

  // Styles, specific to a theme
  background: string;
  onBackground: string;
}

export { ThemeType };
export type { IBaseTheme, ITheme };
