import React, { memo } from 'react';
import { Theme } from 'models';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import headerStyle from './style/header-style';

export const HeaderRenderer: React.FC = memo(() => {
  const theme = useTheme() as Theme;
  const styles = headerStyle(theme);

  return (
    <Box>
      <span className={styles.fluffyText}>Fluffy</span>
      <span className={styles.oysterText}>Oyster</span>
      <span className={styles.playgroundText}>Playground</span>
    </Box>
  );
});

HeaderRenderer.displayName = 'HeaderRenderer';
