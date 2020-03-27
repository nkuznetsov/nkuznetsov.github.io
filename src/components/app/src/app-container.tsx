import React from 'react';
import { AppRenderer } from './app-renderer';
import { ThemeProvider } from 'react-jss';
import { ThemeConsumer } from './theme-consumer';
import { themes } from '../../../assets/styles/themes';

export const AppContainer = () => {
  return (
    <ThemeProvider theme={themes.lightTheme}>
      <ThemeConsumer>
        <AppRenderer />
      </ThemeConsumer>
    </ThemeProvider>
  );
};
