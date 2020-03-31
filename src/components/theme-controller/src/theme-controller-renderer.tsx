import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DarkThemeActiveIcon from '../../../assets/images/dark_theme_active.svg';
import DarkThemeInactiveIcon from '../../../assets/images/dark_theme_inactive.svg';
import { IThemeControllerRendererProps } from './theme-controller-interface';
import { ITheme, ThemeType } from '../../../assets/models';
import localStyles from '../../../assets/styles/local';
import { useTheme } from 'react-jss';

export const ThemeControllerRenderer = (
  props: IThemeControllerRendererProps
) => {
  const styles = localStyles();
  const theme = useTheme() as ITheme;
  const isChecked = theme.type === ThemeType.Dark;

  return (
    <>
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
    </>
  );
};
