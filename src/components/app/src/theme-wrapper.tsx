import React, { FunctionComponent } from 'react';
import globalStyles from '../../../assets/styles/global';
import { useTheme } from 'react-jss';

export const ThemeWrapper: FunctionComponent = props => {
  const theme = useTheme();
  const styles = globalStyles(theme);

  return <div className={styles.app}>{props.children}</div>;
};
