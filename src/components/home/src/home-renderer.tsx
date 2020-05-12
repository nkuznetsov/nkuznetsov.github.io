import React, { useContext } from 'react';
import { AppContext } from 'components/app';
import { Header } from 'components/header';
import { HeaderImage } from 'components/header-image';
import { IHomeRendererProps } from './home-interface';
import { Image, Cursor } from 'components/image';
import { Logo } from 'components/logo';
import { MyName } from 'components/my-name';
import { ReactComponent as SuitcaseImg } from './style/suitcase.svg';
import { Scroll } from 'components/scroll';
import { scrollToElement } from 'utils/utils';
import { SHOW_DEBUG, EXPERIENCE_PAGE } from 'utils/constants';
import { SlideoutImage } from 'components/slideout-image';
import { SocialMediaLinks } from 'components/social-media-links';
import { Toggle } from 'components/toggle';
import { ToggleType } from 'components/toggle/src/toggle-interface';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import homeStyle from './style/home-style';

export const HomeRenderer: React.FC<IHomeRendererProps> = React.memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme = useTheme();
    const styles = homeStyle(theme);
    const { formatMessage } = useIntl();

    const { isMagic } = useContext(AppContext);

    const scrollToExperience = () => {
      const page = document.querySelector(EXPERIENCE_PAGE);
      if (page) {
        scrollToElement(page);
      }
    };

    return (
      <Box className={styles.home}>
        <Grid container className={styles.container}>
          <Grid item xs={2} className={styles.leftContainer}>
            {isMagic[0] ? <Logo /> : null}
          </Grid>

          <Grid container item xs={8} className={styles.centerContainer}>
            <Grid item className={styles.centerSubContainer}>
              {isMagic[1] ? <Header /> : null}
              {isMagic[2] ? <HeaderImage /> : null}
              <MyName />
              <SocialMediaLinks />
              <Image
                ariaLabel={formatMessage({ id: 'home.experience' })}
                className={styles.experienceIcon}
                onClick={scrollToExperience}
                popOutOnHover
                Svg={SuitcaseImg}
                themed
              />
            </Grid>
            <Scroll to={EXPERIENCE_PAGE} />
          </Grid>

          <Grid container item xs={2} className={styles.rightContainer}>
            {SHOW_DEBUG ? (
              <Toggle
                rotate360OnHover
                toggle={toggleDebug}
                type={ToggleType.Debug}
              />
            ) : null}
            <Toggle
              cursor={Cursor.Wand}
              glow
              rotate360OnHover
              toggle={toggleMagic}
              type={ToggleType.Magic}
            />
            <Toggle
              rotate360OnHover
              toggle={toggleTheme}
              type={ToggleType.Theme}
            />
          </Grid>

          {isMagic[3] ? <SlideoutImage /> : null}
        </Grid>
      </Box>
    );
  }
);

HomeRenderer.displayName = 'HomeRenderer';
