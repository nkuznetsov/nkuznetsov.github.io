import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../../../assets/messages';
import { ThemeProvider } from 'react-jss';
import { ThemeWrapper } from './theme-wrapper';
import themes from '../../../assets/styles/themes';
import { defaultThemeType, defaultLocale } from '../../../assets/constants';
import { AppRenderer } from './app-renderer';
import { ThemeType } from '../../../assets/models';

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
