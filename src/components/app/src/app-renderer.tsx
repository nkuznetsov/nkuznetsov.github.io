import React from 'react';
import { IAppRendererProps } from './app-interface';
import { Logo } from '../../logo';
import { SocialMediaLinks } from '../../social-media-links';
import { ThemeController } from '../../theme-controller';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import appStyle from './style/app-style';
import Grid from '@material-ui/core/Grid';
import { Image } from '../../image';
import { ReactComponent as OysterImage } from './style/oyster.svg';

export const AppRenderer = (props: IAppRendererProps) => {
  const theme = useTheme();
  const styles = appStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Grid container className={styles.container}>
      <Grid container item xs={2} className={styles.leftContainer}>
        <Logo />
      </Grid>
      <Grid container item xs={8} className={styles.centerContainer}>
        <Grid item>
          <Image
            Svg={OysterImage}
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
    </Grid>
  );
};
