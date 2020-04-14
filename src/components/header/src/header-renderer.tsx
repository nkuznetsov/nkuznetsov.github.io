import React from 'react';
import { useTheme } from 'react-jss';
import headerStyle from './style/header-style';

export const HeaderRenderer = () => {
  const theme = useTheme();
  const styles = headerStyle(theme);

  return (
    <>
      <span className={styles.fluffyText}>Fluffy</span>
      <span className={styles.oysterText}>Oyster</span>
      <span className={styles.playgroundText}>Playground</span>
    </>
  );
};
