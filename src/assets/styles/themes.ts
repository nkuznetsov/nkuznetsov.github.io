import { ITheme, ThemeType } from '../models';
import colors from './colors';

const lightTheme: ITheme = {
  type: ThemeType.Light,
  primary: colors.purple,
  accent1: colors.gray[0],
  accent2: colors.purple,
  warn: colors.red,
  foreground: colors.brown,
  background: colors.white
};

const darkTheme: ITheme = {
  type: ThemeType.Dark,
  primary: colors.purple,
  accent1: colors.darkGray[0],
  accent2: colors.darkGray[1],
  warn: colors.red,
  foreground: colors.darkWhite,
  background: colors.gray[0]
};

export default { lightTheme, darkTheme };
