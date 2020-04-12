import React from 'react';
import { IAppRendererProps } from './app-interface';
import { Image } from '../../image';
import { Logo } from '../../logo';
import { ReactComponent as DarkOysterImage } from './style/dark_oyster.svg';
import { ReactComponent as LightOysterImage } from './style/light_oyster.svg';
import { SocialMediaLinks } from '../../social-media-links';
import { ThemeController } from '../../theme-controller';
import { ThemeType } from '../../../models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import appStyle from './style/app-style';
import catImage from './style/cat.png';
import Grid from '@material-ui/core/Grid';

export const AppRenderer = (props: IAppRendererProps) => {
  const theme: any = useTheme();
  const styles = appStyle(theme);
  const { formatMessage } = useIntl();
  const oysterImage =
    theme.type === ThemeType.Light ? DarkOysterImage : LightOysterImage;

  return (
    <Grid container className={styles.container}>
      <Grid container item xs={2} className={styles.leftContainer}>
        <Logo />
      </Grid>
      <Grid container item xs={8} className={styles.centerContainer}>
        <Grid item>
          <span className={styles.fluffyText}>Fluffy</span>
          <span className={styles.oysterText}>Oyster</span>
          <span className={styles.playgroundText}>Playground</span>
          <Image
            Svg={oysterImage}
            ariaLabel='oyster'
            className={styles.mainImage}
          />
          <p className={styles.name}>
            {formatMessage({ id: 'home.nikitaKuznetsov' })}
          </p>
          <SocialMediaLinks />
        </Grid>
      </Grid>
      <Grid container item xs={2} className={styles.rightContainer}>
        <Grid item>
          <ThemeController changeTheme={props.changeTheme} />
        </Grid>
      </Grid>
      <Image src={catImage} ariaLabel='cat' className={styles.catImage} />
    </Grid>
  );
};
