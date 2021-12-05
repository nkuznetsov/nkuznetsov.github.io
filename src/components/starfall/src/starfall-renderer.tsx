import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import { Theme } from 'models';
import { useTheme } from 'react-jss';
import starfallStyle from './style/starfall-style';

export const StarfallRenderer: React.FC = memo(() => {
  const theme = useTheme() as Theme;
  const styles = starfallStyle(theme);

  return (
    <Box className={styles.parallax}>
      <Box className={styles.smallStars} />
      <Box className={styles.mediumStars} />
      <Box className={styles.largeStars} />
    </Box>
  );
});

StarfallRenderer.displayName = 'StarfallRenderer';
