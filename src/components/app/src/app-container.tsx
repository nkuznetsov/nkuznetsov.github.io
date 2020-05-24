import React, { useState } from 'react';
import { AppRenderer } from './app-renderer';
import { IAppContext } from './app-interface';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'react-jss';
import { ThemeType } from 'models';
import messages from 'messages';
import themes from 'style/themes';
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';
import {
  BREAKPOINTS,
  DEFAULT_IS_DEBUG,
  DEFAULT_IS_MAGIC,
  DEFAULT_LOCALE,
  DEFAULT_THEME_TYPE
} from 'utils/constants';

export const AppContext = React.createContext({
  isMagic: DEFAULT_IS_MAGIC,
  isDebug: DEFAULT_IS_DEBUG
});

export const AppContainer: React.FC = () => {
  const locale = DEFAULT_LOCALE;
  const translations = messages[locale];
  const [theme, setTheme] = useState(themes[DEFAULT_THEME_TYPE]);
  const [isMagic, setIsMagic] = useState(DEFAULT_IS_MAGIC);
  const [isDebug, setIsDebug] = useState(DEFAULT_IS_DEBUG);

  const appContext: IAppContext = { isMagic, isDebug };

  const muiTheme = responsiveFontSizes(
    createMuiTheme({
      breakpoints: {
        values: BREAKPOINTS
      }
    })
  );

  const toggleTheme = (isChecked: boolean) => {
    const newTheme = isChecked
      ? themes[ThemeType.Dark]
      : themes[ThemeType.Light];
    newTheme.isDebug = isDebug;
    setTheme(newTheme);
  };

  const toggleMagic = () => {
    // Magic is not random - one magic at a time in turn
    let newMagic = [...isMagic];
    let nextMagic = 0;
    for (let i = 0; i < newMagic.length; i++) {
      if (newMagic[i]) {
        nextMagic = i + 1;
        break;
      }
    }
    newMagic = newMagic.map(m => false);

    if (nextMagic === newMagic.length) {
      nextMagic = 0;
    } else {
      newMagic[nextMagic] = true;
    }

    setIsMagic(newMagic);
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
          <MuiThemeProvider theme={muiTheme}>
            <AppRenderer
              toggleDebug={toggleDebug}
              toggleMagic={toggleMagic}
              toggleTheme={toggleTheme}
            />
          </MuiThemeProvider>
        </AppContext.Provider>
      </ThemeProvider>
    </IntlProvider>
  );
};

AppContainer.displayName = 'AppContainer';
