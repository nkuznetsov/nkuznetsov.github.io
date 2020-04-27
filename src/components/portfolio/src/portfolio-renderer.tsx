import React from 'react';
import { Scroll } from '../../scroll';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import portfolioStyle from './style/portfolio-style';

export const PortfolioRenderer: React.FC = () => {
  const theme = useTheme();
  const styles = portfolioStyle(theme);

  const composedClass = [styles.portfolio, 'portfolio-page'].join(' ');

  return (
    <Box className={composedClass}>
      <Box className={styles.main}>
        <p>Portfolio coming soon</p>
      </Box>
      <Box className={styles.toTopContainer}>
        <Scroll />
      </Box>
    </Box>
  );
};
