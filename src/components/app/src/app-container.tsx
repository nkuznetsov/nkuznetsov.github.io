import React, { useState } from 'react';
import { AppRenderer } from './app-renderer';
import { defaultThemeType, defaultLocale } from '../../../constants';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'react-jss';
import { ThemeType } from '../../../models';
import { ThemeWrapper } from './theme-wrapper';
import messages from '../../../messages';
import themes from '../../../style/themes';
import { defaultIsMagic } from '../../../constants';

export const AppContainer = () => {
  const locale = defaultLocale;
  const translations = messages[locale];
  const [theme, setTheme] = useState(themes[defaultThemeType]);
  const [magic, setMagic] = useState(defaultIsMagic);

  const changeTheme = (isChecked: boolean) => {
    setTheme(isChecked ? themes[ThemeType.Dark] : themes[ThemeType.Light]);
  };

  const toggleMagic = (isMagic: boolean) => {
    setMagic(isMagic);
  };

  return (
    <IntlProvider locale={locale} messages={translations}>
      <ThemeProvider theme={{ ...theme }}>
        <ThemeWrapper>
          <AppRenderer
            changeTheme={changeTheme}
            toggleMagic={toggleMagic}
            isMagic={magic}
          />
        </ThemeWrapper>
      </ThemeProvider>
    </IntlProvider>
  );
};
