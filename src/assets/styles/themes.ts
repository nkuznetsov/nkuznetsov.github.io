import colors from './colors';
import { ITheme, ThemeType } from '../models';

const lightTheme: ITheme = {
  type: ThemeType.Light,
  primary: colors.purple,
  accent: colors.lightGray,
  warn: colors.red,
  foreground: colors.brown,
  background: colors.white
};

const darkTheme: ITheme = {
  type: ThemeType.Dark,
  primary: colors.purple,
  accent: colors.darkGray,
  warn: colors.red,
  foreground: colors.darkWhite,
  background: colors.gray
};

export default { lightTheme, darkTheme };
