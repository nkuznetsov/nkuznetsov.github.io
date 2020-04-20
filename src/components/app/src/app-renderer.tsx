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
import { Stars } from '../../stars';
import { Toggle } from '../../toggle';
import { ToggleType } from '../../toggle/src/toggle-interface';
import { useTheme } from 'react-jss';
import appStyle from './style/app-style';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const AppRenderer: React.FunctionComponent<IAppRendererProps> = React.memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme: any = useTheme();
    const styles = appStyle(theme);
    const { isMagic } = useContext(AppContext);

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Box className={styles.app}>
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
                    {/* <Link
                  activeClass='active'
                  to='section1'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  link to section 1
                </Link> */}
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
                {/* <div title='Section 1' id='section1'>
              section 1
            </div> */}
              </Grid>
              <Stars />
            </Box>
          </Route>
        </Switch>
      </Router>
    );
  }
);
