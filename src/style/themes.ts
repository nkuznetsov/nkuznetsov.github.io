// Reference:
// https://material.io/design/material-theming/implementing-your-theme.html#

import { IBaseTheme, ITheme, ThemeType } from '../models';
import colors from './colors';
import { defaultIsDebug } from '../constants';

const baseTheme: IBaseTheme = {
  primary: colors.teal[100],
  primaryVariants: [colors.teal[200], colors.teal[300]],
  secondary: colors.pink[100],
  secondaryVariants: [colors.pink[200], colors.pink[300]],
  surface: colors.gray[300],
  error: colors.red[100],

  onPrimary: colors.brown,
  onSecondary: colors.brown,
  onSurface: colors.brown,
  onError: colors.brown
};

const lightTheme: ITheme = {
  base: baseTheme,

  type: ThemeType.Light,
  background: colors.white,
  onBackground: colors.brown,

  isDebug: defaultIsDebug
};

const darkTheme: ITheme = {
  base: baseTheme,

  type: ThemeType.Dark,
  background: colors.gray[400],
  onBackground: colors.white,

  isDebug: defaultIsDebug
};

export default { lightTheme, darkTheme };
