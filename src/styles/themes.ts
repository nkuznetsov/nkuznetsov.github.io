// Reference:
// https://material.io/design/material-theming/implementing-your-theme.html#

import { IBaseTheme, ITheme, ThemeType } from '../models';
import colors from './colors';

const baseTheme: IBaseTheme = {
  primary: colors.purple[300],
  primaryVariant: colors.purple[200],
  secondary: colors.teal[100],
  secondaryVariant: colors.teal[200],
  surface: colors.white,
  error: colors.red[200],

  onPrimary: colors.brown,
  onSecondary: colors.brown,
  onSurface: colors.brown,
  onError: colors.brown
};

const lightTheme: ITheme = {
  base: baseTheme,

  type: ThemeType.Light,
  background: colors.white,
  onBackground: colors.brown
};

const darkTheme: ITheme = {
  base: baseTheme,

  type: ThemeType.Dark,
  background: colors.gray[400],
  onBackground: colors.white
};

export default { lightTheme, darkTheme };
