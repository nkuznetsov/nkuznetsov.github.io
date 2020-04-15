enum ThemeType {
  Light = 'lightTheme',
  Dark = 'darkTheme'
}

interface IBaseTheme {
  // Styles, common across themes

  // Key surface categories, excluding background
  primary: string;
  primaryVariants: string[];
  secondary: string;
  secondaryVariants: string[];
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

  isDebug: boolean;
}

export { ThemeType };
export type { IBaseTheme, ITheme };
