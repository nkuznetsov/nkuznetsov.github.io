import React, { useContext } from 'react';
import { AppContext } from '../../app';
import { Header } from '../../header';
import { HeaderImage } from '../../header-image';
import { IHomeRendererProps } from './home-interface';
import { Image } from '../../image';
import { Logo } from '../../logo';
import { MyName } from '../../my-name';
import { ReactComponent as SuitcaseImg } from './style/suitcase.svg';
import { Scroll } from '../../scroll';
import { showDebug, experiencePage } from '../../../constants';
import { SlideoutImage } from '../../slideout-image';
import { SocialMediaLinks } from '../../social-media-links';
import { toElement } from '../../../utils';
import { Toggle } from '../../toggle';
import { ToggleType } from '../../toggle/src/toggle-interface';
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
      const page = document.querySelector(experiencePage);
      if (page) {
        toElement(page);
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
            <Scroll to={experiencePage} />
          </Grid>

          <Grid container item xs={2} className={styles.rightContainer}>
            {showDebug ? (
              <Toggle
                rotate360OnHover
                toggle={toggleDebug}
                type={ToggleType.Debug}
              />
            ) : null}
            <Toggle
              customCursor
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
