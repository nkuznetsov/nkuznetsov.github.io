import React from 'react';
import { Image } from 'components/image';
import { ReactComponent as DarkOysterImage } from './style/dark_oyster.svg';
import { ReactComponent as LightOysterImage } from './style/light_oyster.svg';
import { ThemeType } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import headerStyle from './style/header-image-style';

export const HeaderImageRenderer: React.FC = () => {
  const theme: any = useTheme();
  const styles = headerStyle(theme);
  const { formatMessage } = useIntl();
  const oysterImage =
    theme.type === ThemeType.Light ? DarkOysterImage : LightOysterImage;

  return (
    <Image
      Svg={oysterImage}
      ariaLabel={formatMessage({ id: 'home.oyster' })}
      className={styles.mainImage}
    />
  );
};

HeaderImageRenderer.displayName = 'HeaderImageRenderer';
