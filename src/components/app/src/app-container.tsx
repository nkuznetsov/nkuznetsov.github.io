import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import { AppRenderer } from './app-renderer';
import { GRAPHQL_URL } from 'utils/constants';
import { IAppContext } from './app-interface';
import { IntlProvider } from 'react-intl';
import { messages } from 'messages';
import { ThemeType } from 'models';
import ApolloClient from 'apollo-boost';
import themes from 'style/themes';
import { ThemeProvider } from 'react-jss';
import {
  createTheme,
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
    createTheme({
      breakpoints: {
        values: BREAKPOINTS
      }
    })
  );

  const toggleTheme = React.useCallback(
    (isChecked: boolean) => {
      const newTheme = isChecked
        ? themes[ThemeType.Dark]
        : themes[ThemeType.Light];
      newTheme.isDebug = isDebug;
      setTheme(newTheme);
    },
    [isDebug]
  );

  const toggleMagic = React.useCallback(() => {
    // Magic is not random - one magic at a time in turn
    let newMagic = [...isMagic];
    let nextMagic = 0;
    for (let i = 0; i < newMagic.length; i++) {
      if (newMagic[i]) {
        nextMagic = i + 1;
        break;
      }
    }
    newMagic = newMagic.map(_m => false);

    if (nextMagic === newMagic.length) {
      nextMagic = 0;
    } else {
      newMagic[nextMagic] = true;
    }

    setIsMagic(newMagic);
  }, [isMagic]);

  const toggleDebug = React.useCallback(
    (isDebug: boolean) => {
      setIsDebug(isDebug);
      const newTheme = theme;
      newTheme.isDebug = isDebug;
      setTheme(newTheme);
    },
    [theme]
  );

  // 'http://localhost:4444/graphql'
  const client = new ApolloClient({
    uri: GRAPHQL_URL
  });

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

AppContainer.displayName = 'AppContainer';
