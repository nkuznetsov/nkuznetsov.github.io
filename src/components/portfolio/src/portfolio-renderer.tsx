import React from 'react';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import portfolioStyle from './style/portfolio-style';

export const PortfolioRenderer: React.FC = () => {
  const theme: any = useTheme();
  const styles = portfolioStyle(theme);

  return <Box>Portfolio page</Box>;
};
