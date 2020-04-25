import React, { useContext } from 'react';
import { AppContext } from '../../app';
import { Header } from '../../header';
import { HeaderImage } from '../../header-image';
import { IHomeRendererProps } from './home-interface';
import { Logo } from '../../logo';
import { MyName } from '../../my-name';
import { showDebug, portfolioPage } from '../../../constants';
import { SlideoutImage } from '../../slideout-image';
import { SocialMediaLinks } from '../../social-media-links';
import { Toggle } from '../../toggle';
import { ToggleType } from '../../toggle/src/toggle-interface';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import homeStyle from './style/home-style';
import { toElement } from '../../../utils';
import { Image } from '../../image';
import { ReactComponent as SuitcaseImg } from './style/suitcase.svg';
import { ReactComponent as ArrowDownImg } from './style/arrow_down.svg';

export const HomeRenderer: React.FC<IHomeRendererProps> = React.memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme: any = useTheme();
    const styles = homeStyle(theme);
    const { isMagic } = useContext(AppContext);

    const scrollToPortfolio = () => {
      const page = document.querySelector(portfolioPage);
      if (page) {
        toElement(page);
      }
    };

    return (
      <Box className={styles.home}>
        <Grid container className={styles.container}>
          <Grid xs={2} className={styles.leftContainer}>
            {isMagic[0] ? <Logo /> : null}
          </Grid>
          <Grid container xs={8} className={styles.centerContainer}>
            <Grid item className={styles.centerSubContainer}>
              {isMagic[1] ? <Header /> : null}
              {isMagic[2] ? <HeaderImage /> : null}
              <MyName />
              <SocialMediaLinks />
              <Image
                ariaLabel='Portfolio'
                className={styles.portfolioIcon}
                onClick={scrollToPortfolio}
                popOutOnHover
                Svg={SuitcaseImg}
                themed
              />
            </Grid>
            <Image
              ariaLabel='Next page'
              className={styles.nextPageNavIcon}
              onClick={scrollToPortfolio}
              Svg={ArrowDownImg}
              popOutOnHover
            />
          </Grid>
          <Grid container xs={2} className={styles.rightContainer}>
            {showDebug ? (
              <Toggle
                type={ToggleType.Debug}
                toggle={toggleDebug}
                rotate360OnHover
              />
            ) : null}
            <Toggle
              glow
              customCursor
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
          {isMagic[3] ? <SlideoutImage /> : null}
        </Grid>
      </Box>
    );
  }
);
