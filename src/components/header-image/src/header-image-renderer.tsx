import React, { memo } from 'react';
import { Image } from 'components/image';
import { ReactComponent as DarkOysterImage } from './style/dark-oyster.svg';
import { ReactComponent as LightOysterImage } from './style/light-oyster.svg';
import { Theme, ThemeType } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import headerStyle from './style/header-image-style';

export const HeaderImageRenderer: React.FC = memo(() => {
  const theme = useTheme() as Theme;
  const styles = headerStyle(theme);
  const { formatMessage } = useIntl();
  const oysterImage =
    theme.type === ThemeType.Light ? DarkOysterImage : LightOysterImage;

  return (
    <Image
      Svg={oysterImage}
      alt={formatMessage({ id: 'home.oyster' })}
      className={styles.mainImage}
    />
  );
});

HeaderImageRenderer.displayName = 'HeaderImageRenderer';
