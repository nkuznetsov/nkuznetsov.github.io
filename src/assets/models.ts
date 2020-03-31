enum ThemeType {
  Light = 'lightTheme',
  Dark = 'darkTheme'
}

interface ITheme {
  type: ThemeType;
  primary: string;
  accent: string;
  warn: string;
  foreground: string;
  background: string;
}

export { ThemeType };
export type { ITheme };
