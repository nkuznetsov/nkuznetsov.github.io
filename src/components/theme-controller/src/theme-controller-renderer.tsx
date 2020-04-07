import React from 'react';
import { ITheme, ThemeType } from '../../../models';
import { IThemeControllerRendererProps } from './theme-controller-interface';
import { useTheme } from 'react-jss';
import Checkbox from '@material-ui/core/Checkbox';
import darkThemeActive from './style/moon_light.svg';
import darkThemeInactive from './style/moon_dark.svg';
import themeControllerStyle from './style/theme-controller-style';

export const ThemeControllerRenderer = (
  props: IThemeControllerRendererProps
) => {
  const theme = useTheme() as ITheme;
  const isChecked = theme.type === ThemeType.Dark;
  const styles = themeControllerStyle(theme);

  return (
    <div className={styles.themeController}>
      <Checkbox
        icon={
          <img
            src={darkThemeInactive}
            alt='dark theme active icon'
            className={styles.themeIcon}
          ></img>
        }
        checkedIcon={
          <img
            src={darkThemeActive}
            alt='dark theme inactive icon'
            className={styles.themeIcon}
          ></img>
        }
        onChange={props.switchTheme}
        checked={isChecked}
      />
    </div>
  );
};
