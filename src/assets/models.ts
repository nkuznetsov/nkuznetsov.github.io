enum ThemeType {
  Light = 'lightTheme',
  Dark = 'darkTheme'
}

interface ITheme {
  type: ThemeType;
  primary: string;
  accent1: string;
  accent2: string;
  warn: string;
  foreground: string;
  background: string;
}

export { ThemeType };
export type { ITheme };
