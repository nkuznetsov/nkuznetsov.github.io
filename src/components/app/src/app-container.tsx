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
  isMagic: false,
  isDebug: false
});

export const AppContainer = () => {
  const locale = defaultLocale;
  const translations = messages[locale];
  const [theme, setTheme] = useState(themes[defaultThemeType]);
  const [isMagic, setIsMagic] = useState(defaultIsMagic);
  const [isDebug, setIsDebug] = useState(defaultIsDebug);

  const appContext: IAppContext = { isMagic, isDebug };
  // const AppContext = React.createContext(appContext);

  const changeTheme = (isChecked: boolean) => {
    setTheme(isChecked ? themes[ThemeType.Dark] : themes[ThemeType.Light]);
  };

  const toggleMagic = (isMagic: boolean) => {
    setIsMagic(isMagic);
  };

  const toggleIsDebug = (isDebug: boolean) => {
    setIsDebug(isDebug);
  };

  return (
    <IntlProvider locale={locale} messages={translations}>
      <ThemeProvider theme={{ ...theme }}>
        <AppContext.Provider value={appContext}>
          <AppRenderer changeTheme={changeTheme} toggleMagic={toggleMagic} />
        </AppContext.Provider>
      </ThemeProvider>
    </IntlProvider>
  );
};
