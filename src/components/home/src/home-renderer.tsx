import React, { memo, useCallback, useContext } from 'react';
import { AppContext } from 'components/app';
import { Cursor, Image } from 'components/image';
import { EXPERIENCE_PAGE } from 'utils/constants';
import { Header } from 'components/header';
import { HeaderImage } from 'components/header-image';
import { IHomeRendererProps } from './home-interface';
import { ImageEffect } from 'components/image/src/image-interface';
import { Logo } from 'components/logo';
import { Menu } from 'components/menu';
import { MyName } from 'components/my-name';
import { Page, Seo } from 'components/seo';
import { ReactComponent as SuitcaseImg } from './style/suitcase.svg';
import { Scroll } from 'components/scroll';
import { scrollToElement } from 'utils/utils';
import { SlideoutImage } from 'components/slideout-image';
import { SocialMediaLinks } from 'components/social-media-links';
import { Theme } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import homeStyle from './style/home-style';

export const HomeRenderer: React.FC<IHomeRendererProps> = memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme = useTheme() as Theme;
    const styles = homeStyle(theme);
    const { formatMessage } = useIntl();

    const { isMagic } = useContext(AppContext);

    const scrollToExperience = useCallback(() => {
      const page = document.querySelector(EXPERIENCE_PAGE);
      if (page) {
        scrollToElement(page);
      }
    }, []);

    return (
      <>
        <Seo page={Page.Home} />
        <Box className={styles.home}>
          <Grid container className={styles.container}>
            <Hidden only='xs'>
              <Grid item sm={2} className={styles.leftContainer}>
                {isMagic[2] && <Logo />}
              </Grid>
            </Hidden>

            <Grid item container sm={8} className={styles.centerContainer}>
              <Hidden smUp>
                <Grid container className={styles.topMenu}>
                  <Menu
                    toggleDebug={toggleDebug}
                    toggleMagic={toggleMagic}
                    toggleTheme={toggleTheme}
                  />
                </Grid>
              </Hidden>

              <Grid className={styles.centerSubContainer}>
                {isMagic[0] && (
                  <Box className={styles.header}>
                    <HeaderImage />
                    <Header />
                  </Box>
                )}
                <MyName />
                <Box
                  alignItems='center'
                  justifyContent='center'
                  className={styles.linksContainer}
                >
                  <SocialMediaLinks />
                  <Image
                    alt={formatMessage({ id: 'home.experience' })}
                    className={styles.experienceIcon}
                    onClick={scrollToExperience}
                    effect={ImageEffect.PopOutOnHover}
                    Svg={SuitcaseImg}
                    cursor={Cursor.Pointer}
                  />
                </Box>
              </Grid>
              <Hidden smDown>
                <Scroll to={EXPERIENCE_PAGE} />
              </Hidden>

              <Hidden lgUp>
                <Box className={styles.placeholder} />
              </Hidden>
            </Grid>

            <Hidden only='xs'>
              <Grid container item sm={2} className={styles.rightContainer}>
                <Menu
                  toggleDebug={toggleDebug}
                  toggleMagic={toggleMagic}
                  toggleTheme={toggleTheme}
                />
              </Grid>
            </Hidden>
          </Grid>
          {isMagic[1] && <SlideoutImage />}
        </Box>
      </>
    );
  }
);

HomeRenderer.displayName = 'HomeRenderer';
