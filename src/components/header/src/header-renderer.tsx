import React from 'react';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import headerStyle from './style/header-style';

export const HeaderRenderer: React.FC = () => {
  const theme = useTheme();
  const styles = headerStyle(theme);

  return (
    <Box>
      <span className={styles.fluffyText}>Fluffy</span>
      <span className={styles.oysterText}>Oyster</span>
      <span className={styles.playgroundText}>Playground</span>
    </Box>
  );
};

HeaderRenderer.displayName = 'HeaderRenderer';
