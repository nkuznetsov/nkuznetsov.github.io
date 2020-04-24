import React from 'react';
import { useTheme } from 'react-jss';
import starsStyle from './style/stars-style';

export const StarsRenderer: React.FC = () => {
  const theme = useTheme();
  const styles = starsStyle(theme);

  return (
    <div className={styles.parallax}>
      <div className={styles.stars1} />
      <div className={styles.stars2} />
      <div className={styles.stars3} />
    </div>
  );
};
