import React from 'react';
import { Image } from '../../image';
import { ReactComponent as DarkOysterImage } from './style/dark_oyster.svg';
import { ReactComponent as LightOysterImage } from './style/light_oyster.svg';
import { ThemeType } from '../../../models';
import { useTheme } from 'react-jss';
import headerStyle from './style/header-image-style';

export const HeaderImageRenderer: React.FunctionComponent = () => {
  const theme: any = useTheme();
  const styles = headerStyle(theme);
  const oysterImage =
    theme.type === ThemeType.Light ? DarkOysterImage : LightOysterImage;

  return (
    <Image Svg={oysterImage} ariaLabel='oyster' className={styles.mainImage} />
  );
};
