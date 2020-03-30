import React from 'react';
import { IThemeControllerContainerProps } from './theme-controller-interface';
import { ThemeControllerRenderer } from './theme-controller-renderer';

export const ThemeControllerContainer = (
  props: IThemeControllerContainerProps
) => {
  const { changeTheme } = props;

  const switchTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTheme(event.target.checked);
  };

  return <ThemeControllerRenderer switchTheme={switchTheme} />;
};
