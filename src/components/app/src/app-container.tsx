import React, { useState } from 'react';
import { AppRenderer } from './app-renderer';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'react-jss';
import { ThemeWrapper } from './theme-wrapper';
import { themes } from '../../../assets/styles/themes';
import messages from '../../../assets/messages';

export const AppContainer = () => {
  const locale = 'en';
  const translations = messages[locale];

  const [theme, setTheme] = useState(themes.lightTheme);

  const changeTheme = (isLight: boolean) => {
    setTheme(isLight ? themes.darkTheme : themes.lightTheme);
  };

  return (
    <IntlProvider locale={locale} messages={translations}>
      <ThemeProvider theme={theme}>
        <ThemeWrapper>
          <AppRenderer changeTheme={changeTheme} />
        </ThemeWrapper>
      </ThemeProvider>
    </IntlProvider>
  );
};
