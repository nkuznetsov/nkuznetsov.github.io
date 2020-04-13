import React from 'react';
import { Image } from '../../image';
import { ITheme, ThemeType } from '../../../models';
import { IThemeControllerRendererProps } from './theme-controller-interface';
import { useTheme } from 'react-jss';
import Checkbox from '@material-ui/core/Checkbox';
import darkThemeActiveImage from './style/moon_light.svg';
import darkThemeInactiveImage from './style/moon_dark.svg';
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
          <Image
            src={darkThemeInactiveImage}
            ariaLabel='dark theme active icon'
            className={styles.themeIcon}
          />
        }
        checkedIcon={
          <Image
            src={darkThemeActiveImage}
            ariaLabel='dark theme inactive icon'
            className={styles.themeIcon}
          />
        }
        onChange={props.switchTheme}
        checked={isChecked}
      />
    </div>
  );
};
