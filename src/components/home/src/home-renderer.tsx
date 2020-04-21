import React, { useContext } from 'react';
import { AppContext } from '../../app';
import { Header } from '../../header';
import { HeaderImage } from '../../header-image';
import { IHomeRendererProps } from './home-interface';
import { Logo } from '../../logo';
import { MyName } from '../../my-name';
import { showDebug } from '../../../constants';
import { SlideoutImage } from '../../slideout-image';
import { SocialMediaLinks } from '../../social-media-links';
import { Toggle } from '../../toggle';
import { ToggleType } from '../../toggle/src/toggle-interface';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import homeStyle from './style/home-style';

export const HomeRenderer: React.FC<IHomeRendererProps> = React.memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme: any = useTheme();
    const styles = homeStyle(theme);
    const { isMagic } = useContext(AppContext);

    return (
      <Box className={styles.home}>
        <Grid container className={styles.container}>
          <Grid container item xs={2} className={styles.leftContainer}>
            {isMagic[0] ? <Logo /> : null}
          </Grid>
          <Grid container item xs={8} className={styles.centerContainer}>
            <Grid item>
              {isMagic[1] ? <Header /> : null}
              {isMagic[2] ? <HeaderImage /> : null}
              <MyName />
              <SocialMediaLinks />
            </Grid>
          </Grid>
          <Grid container item xs={2} className={styles.rightContainer}>
            <Grid container item className={styles.rightSubContainer}>
              {showDebug ? (
                <Toggle type={ToggleType.Debug} toggle={toggleDebug} />
              ) : null}
              <Toggle
                glow
                type={ToggleType.Magic}
                toggle={toggleMagic}
                rotate360OnHover
              />
              <Toggle
                type={ToggleType.Theme}
                toggle={toggleTheme}
                rotate360OnHover
              />
            </Grid>
          </Grid>
          {isMagic[3] ? <SlideoutImage /> : null}
        </Grid>
      </Box>
    );
  }
);
