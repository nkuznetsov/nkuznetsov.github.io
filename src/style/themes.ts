// Reference:
// https://material.io/design/material-theming/implementing-your-theme.html#

import { DEFAULT_IS_DEBUG } from 'utils/constants';
import { IBaseTheme, Theme, ThemeType } from 'models';
import { colors } from './colors';

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

const lightTheme: Theme = {
  base: baseTheme,

  type: ThemeType.Light,
  background: colors.gray[100],
  onBackground: colors.brown,

  secondaryBackground: colors.gray[200],
  secondaryBackgroundBorder: colors.gray[250],

  tooltipBackground: colors.pink[200],

  isDebug: DEFAULT_IS_DEBUG
};

const darkTheme: Theme = {
  base: baseTheme,

  type: ThemeType.Dark,
  background: colors.gray[800],
  onBackground: colors.white,

  secondaryBackground: colors.gray[400],
  secondaryBackgroundBorder: colors.gray[300],

  tooltipBackground: colors.purple[200],

  isDebug: DEFAULT_IS_DEBUG
};

const themes = { lightTheme, darkTheme };
export default themes;
