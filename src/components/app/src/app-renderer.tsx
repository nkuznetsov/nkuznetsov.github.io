import React from 'react';
import { IAppRendererProps } from './app-interface';
import { ITheme } from '../../../assets/models';
import { Lobster } from '../../lobster';
import { ThemeController } from '../../theme-controller';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Grid from '@material-ui/core/Grid';
import localStyles from '../../../assets/styles/local';

export const AppRenderer = (props: IAppRendererProps) => {
  const theme = useTheme() as ITheme;
  const styles = localStyles(theme);
  const { formatMessage } = useIntl();

  return (
    <>
      <Grid container style={{ height: '100%', margin: '0' }}>
        <Grid container item xs={2} justify='center' alignContent='flex-start'>
          <Lobster />
        </Grid>
        <Grid container item xs={8} justify='center' alignContent='center'>
          <Grid item>
            <p className={styles.name}>
              {formatMessage({ id: 'home.nikitaKuznetsov' })}
            </p>
            <p>{formatMessage({ id: 'home.moreToCome' })}</p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={2}
          justify='flex-end'
          alignContent='flex-start'
        >
          <Grid item className={styles.themeController}>
            <ThemeController changeTheme={props.changeTheme} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
