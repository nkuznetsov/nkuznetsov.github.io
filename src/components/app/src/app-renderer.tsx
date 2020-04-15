import React, { useContext } from 'react';
import { AppContext } from '../../app';
import { Header } from '../../header';
import { HeaderImage } from '../../header-image';
import { IAppRendererProps } from './app-interface';
import { Logo } from '../../logo';
import { MyName } from '../../my-name';
import { showDebug } from '../../../constants';
import { SlideoutImage } from '../../slideout-image';
import { SocialMediaLinks } from '../../social-media-links';
import { Toggle } from '../../toggle';
import { ToggleType } from '../../toggle/src/toggle-interface';
import { useTheme } from 'react-jss';
import appStyle from './style/app-style';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export const AppRenderer = (props: IAppRendererProps) => {
  const theme: any = useTheme();
  const styles = appStyle(theme);
  const { toggleDebug, toggleMagic, toggleTheme } = props;
  const appContext = useContext(AppContext);

  return (
    <Box className={styles.app}>
      <Grid container className={styles.container}>
        <Grid container item xs={2} className={styles.leftContainer}>
          {appContext.isMagic ? <Logo /> : null}
        </Grid>
        <Grid container item xs={8} className={styles.centerContainer}>
          <Grid item>
            {appContext.isMagic ? <Header /> : null}
            {appContext.isMagic ? <HeaderImage /> : null}
            <MyName />
            <SocialMediaLinks />
          </Grid>
        </Grid>
        <Grid container item xs={2} className={styles.rightContainer}>
          <Grid container item className={styles.rightSubContainer}>
            {showDebug ? (
              <Toggle type={ToggleType.Debug} toggle={toggleDebug} />
            ) : null}
            <Toggle type={ToggleType.Magic} toggle={toggleMagic} />
            <Toggle type={ToggleType.Theme} toggle={toggleTheme} />
          </Grid>
        </Grid>
        {appContext.isMagic ? <SlideoutImage /> : null}
      </Grid>
    </Box>
  );
};
