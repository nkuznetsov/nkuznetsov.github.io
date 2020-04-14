import React from 'react';
import { Header } from '../../header';
import { HeaderImage } from '../../header-image';
import { IAppRendererProps } from './app-interface';
import { Logo } from '../../logo';
import { MagicController } from '../../magic-controller';
import { MyName } from '../../my-name';
import { SlideoutImage } from '../../slideout-image';
import { SocialMediaLinks } from '../../social-media-links';
import { ThemeController } from '../../theme-controller';
import { useTheme } from 'react-jss';
import appStyle from './style/app-style';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export const AppRenderer = (props: IAppRendererProps) => {
  const theme: any = useTheme();
  const styles = appStyle(theme);
  const { changeTheme, toggleMagic } = props;

  return (
    <Box className={styles.app}>
      <Grid container className={styles.container}>
        <Grid container item xs={2} className={styles.leftContainer}>
          <Logo />
        </Grid>
        <Grid container item xs={8} className={styles.centerContainer}>
          <Grid item>
            <Header />
            <HeaderImage />
            <MyName />
            <SocialMediaLinks />
          </Grid>
        </Grid>
        <Grid container item xs={2} className={styles.rightContainer}>
          <Grid item container justify='flex-end'>
            <MagicController toggleMagic={toggleMagic} />
            <ThemeController changeTheme={changeTheme} />
          </Grid>
        </Grid>
        <SlideoutImage />
      </Grid>
    </Box>
  );
};
