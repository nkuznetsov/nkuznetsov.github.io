import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DarkThemeActiveIcon from '../../../assets/images/dark_theme_active.png';
import DarkThemeInactiveIcon from '../../../assets/images/dark_theme_inactive.png';
import { IThemeControllerRendererProps } from './theme-controller-interface';

export const ThemeControllerRenderer = (
  props: IThemeControllerRendererProps
) => {
  return (
    <>
      <Checkbox
        icon={
          <img src={DarkThemeActiveIcon} alt='dark theme active icon'></img>
        }
        checkedIcon={
          <img src={DarkThemeInactiveIcon} alt='dark theme inactive icon'></img>
        }
        onChange={props.switchTheme}
      />
    </>
  );
};
