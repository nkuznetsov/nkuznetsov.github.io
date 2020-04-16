import React, { useState } from 'react';
import { AppRenderer } from './app-renderer';
import { IAppContext } from './app-interface';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'react-jss';
import { ThemeType } from '../../../models';
import messages from '../../../messages';
import themes from '../../../style/themes';
import {
  defaultThemeType,
  defaultLocale,
  defaultIsMagic,
  defaultIsDebug
} from '../../../constants';

export const AppContext = React.createContext({
  isMagic: defaultIsMagic,
  isDebug: defaultIsDebug
});

export const AppContainer = () => {
  const locale = defaultLocale;
  const translations = messages[locale];
  const [theme, setTheme] = useState(themes[defaultThemeType]);
  const [isMagic, setIsMagic] = useState(defaultIsMagic);
  const [isDebug, setIsDebug] = useState(defaultIsDebug);

  const appContext: IAppContext = { isMagic, isDebug };

  const toggleTheme = (isChecked: boolean) => {
    const newTheme = isChecked
      ? themes[ThemeType.Dark]
      : themes[ThemeType.Light];
    newTheme.isDebug = isDebug;
    setTheme(newTheme);
  };

  const toggleMagic = (isMagic: boolean) => {
    setIsMagic(isMagic);
  };

  const toggleDebug = (isDebug: boolean) => {
    setIsDebug(isDebug);
    const newTheme = theme;
    newTheme.isDebug = isDebug;
    setTheme(newTheme);
  };

  return (
    <IntlProvider locale={locale} messages={translations}>
      <ThemeProvider theme={{ ...theme }}>
        <AppContext.Provider value={appContext}>
          <AppRenderer
            toggleDebug={toggleDebug}
            toggleMagic={toggleMagic}
            toggleTheme={toggleTheme}
          />
        </AppContext.Provider>
      </ThemeProvider>
    </IntlProvider>
  );
};
