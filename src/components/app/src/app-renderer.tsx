import React from 'react';
import { IAppRendererProps } from './app-interface';
import { Lobster } from '../../lobster';
import { SocialMediaLinks } from '../../social-media-links';
import { ThemeController } from '../../theme-controller';
import { useTheme } from 'react-jss';
import Grid from '@material-ui/core/Grid';
import localStyles from '../../../assets/styles/local';

export const AppRenderer = (props: IAppRendererProps) => {
  const theme = useTheme();
  const styles = localStyles(theme);

  return (
    <Grid container className={styles.container}>
      <Grid container item xs={2} justify='center' alignContent='flex-start'>
        <Lobster />
      </Grid>
      <Grid container item xs={8} justify='center' alignContent='center'>
        <Grid item>
          <SocialMediaLinks />
        </Grid>
      </Grid>
      <Grid container item xs={2} justify='flex-end' alignContent='flex-start'>
        <Grid item className={styles.themeController}>
          <ThemeController changeTheme={props.changeTheme} />
        </Grid>
      </Grid>
    </Grid>
  );
};
