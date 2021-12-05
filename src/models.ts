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

type Theme = ITheme | Jss.Theme | any;

interface ITheme {
  base: IBaseTheme;
  type: ThemeType;

  // Styles, specific to a theme
  background: string;
  onBackground: string;

  secondaryBackground: string;
  secondaryBackgroundBorder: string;

  tooltipBackground: string;

  isDebug: boolean;
}

export { ThemeType };
export type { IBaseTheme, Theme };
