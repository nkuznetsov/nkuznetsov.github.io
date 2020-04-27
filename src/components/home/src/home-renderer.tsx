import React, { useContext } from 'react';
import { AppContext } from '../../app';
import { Header } from '../../header';
import { HeaderImage } from '../../header-image';
import { IHomeRendererProps } from './home-interface';
import { Image } from '../../image';
import { ITheme, ThemeType } from '../../../models';
import { Logo } from '../../logo';
import { MyName } from '../../my-name';
import { ReactComponent as ArrowDownDarkImg } from './style/arrow_down_dark.svg';
import { ReactComponent as ArrowDownLightImg } from './style/arrow_down_light.svg';
import { ReactComponent as SuitcaseImg } from './style/suitcase.svg';
import { showDebug, portfolioPage } from '../../../constants';
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
    const theme = useTheme() as ITheme;
    const styles = homeStyle(theme);
    const { formatMessage } = useIntl();

    const { isMagic } = useContext(AppContext);

    const arrowDownImg =
      theme.type === ThemeType.Light ? ArrowDownDarkImg : ArrowDownLightImg;

    const scrollToPortfolio = () => {
      const page = document.querySelector(portfolioPage);
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
                ariaLabel={formatMessage({ id: 'home.portfolio' })}
                className={styles.portfolioIcon}
                onClick={scrollToPortfolio}
                popOutOnHover
                Svg={SuitcaseImg}
                themed
              />
            </Grid>
            <Image
              ariaLabel={formatMessage({ id: 'home.nextPage' })}
              className={styles.nextPageNavIcon}
              onClick={scrollToPortfolio}
              popOutOnHover
              Svg={arrowDownImg}
            />
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
