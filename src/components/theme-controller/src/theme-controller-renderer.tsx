import React from 'react';
import { ITheme, ThemeType } from '../../../assets/models';
import { IThemeControllerRendererProps } from './theme-controller-interface';
import { useTheme } from 'react-jss';
import Checkbox from '@material-ui/core/Checkbox';
import DarkThemeActiveIcon from '../../../assets/images/dark_theme_active.svg';
import DarkThemeInactiveIcon from '../../../assets/images/dark_theme_inactive.svg';
import localStyles from '../../../assets/styles/local';

export const ThemeControllerRenderer = (
  props: IThemeControllerRendererProps
) => {
  const theme = useTheme() as ITheme;
  const isChecked = theme.type === ThemeType.Dark;
  const styles = localStyles(theme);

  return (
    <Checkbox
      icon={
        <img
          src={DarkThemeInactiveIcon}
          alt='dark theme active icon'
          className={styles.themeIcon}
        ></img>
      }
      checkedIcon={
        <img
          src={DarkThemeActiveIcon}
          alt='dark theme inactive icon'
          className={styles.themeIcon}
        ></img>
      }
      onChange={props.switchTheme}
      checked={isChecked}
    />
  );
};
