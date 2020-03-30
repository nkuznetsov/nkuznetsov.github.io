import React from 'react';
import { Lobster } from '../../lobster';
import { ThemeController } from '../../theme-controller';
import { IAppRendererProps } from './app-interface';

export const AppRenderer = (props: IAppRendererProps) => {
  return (
    <>
      <Lobster />
      <ThemeController changeTheme={props.changeTheme} />
    </>
  );
};
