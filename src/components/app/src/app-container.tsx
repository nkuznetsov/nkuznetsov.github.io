import React, { useState } from 'react';
import { AppRenderer } from './app-renderer';
import { defaultThemeType, defaultLocale } from '../../../assets/constants';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'react-jss';
import { ThemeType } from '../../../assets/models';
import { ThemeWrapper } from './theme-wrapper';
import messages from '../../../assets/messages';
import themes from '../../../assets/styles/themes';

export const AppContainer = () => {
  const locale = defaultLocale;
  const translations = messages[locale];
  const [theme, setTheme] = useState(themes[defaultThemeType]);

  const changeTheme = (isChecked: boolean) => {
    setTheme(isChecked ? themes[ThemeType.Dark] : themes[ThemeType.Light]);
  };

  return (
    <IntlProvider locale={locale} messages={translations}>
      <ThemeProvider theme={{ ...theme }}>
        <ThemeWrapper>
          <AppRenderer changeTheme={changeTheme} />
        </ThemeWrapper>
      </ThemeProvider>
    </IntlProvider>
  );
};
