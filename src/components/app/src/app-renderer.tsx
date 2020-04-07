import React from 'react';
import { IAppRendererProps } from './app-interface';
import { Lobster } from '../../lobster';
import { SocialMediaLinks } from '../../social-media-links';
import { ThemeController } from '../../theme-controller';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Grid from '@material-ui/core/Grid';
import appStyle from './style/app-style';

export const AppRenderer = (props: IAppRendererProps) => {
  const theme = useTheme();
  const styles = appStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Grid container className={styles.container}>
      <Grid container item xs={2} justify='center' alignContent='flex-start'>
        <Lobster />
      </Grid>
      <Grid container item xs={8} justify='center' alignContent='center'>
        <Grid item>
          <p className={styles.name}>
            {formatMessage({ id: 'home.nikitaKuznetsov' })}
          </p>
          <SocialMediaLinks />
        </Grid>
      </Grid>
      <Grid container item xs={2} justify='flex-end' alignContent='flex-start'>
        <Grid item>
          <ThemeController changeTheme={props.changeTheme} />
        </Grid>
      </Grid>
    </Grid>
  );
};
