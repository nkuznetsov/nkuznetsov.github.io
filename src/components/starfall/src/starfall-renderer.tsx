import React from 'react';
import { useTheme } from 'react-jss';
import starfallStyle from './style/starfall-style';

export const StarfallRenderer: React.FC = () => {
  const theme = useTheme();
  const styles = starfallStyle(theme);

  return (
    <div className={styles.parallax}>
      <div className={styles.stars1} />
      <div className={styles.stars2} />
      <div className={styles.stars3} />
    </div>
  );
};
