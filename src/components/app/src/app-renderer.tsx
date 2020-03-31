import React from 'react';
import { Lobster } from '../../lobster';
import { ThemeController } from '../../theme-controller';
import { IAppRendererProps } from './app-interface';
import Grid from '@material-ui/core/Grid';

export const AppRenderer = (props: IAppRendererProps) => {
  return (
    <>
      <Grid container spacing={3} style={{ background: 'yellow' }}>
        <Grid item xs={2}>
          <Lobster />
        </Grid>
        <Grid item xs={8} style={{ background: 'green' }}>
          Nikita Kuznetsov
        </Grid>
        <Grid item xs={2} style={{ background: 'purple', alignContent: 'end' }}>
          <ThemeController changeTheme={props.changeTheme} />
        </Grid>
      </Grid>
      some other text
    </>
  );
};
