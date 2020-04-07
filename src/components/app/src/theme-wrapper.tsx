import React, { FunctionComponent } from 'react';
import { useTheme } from 'react-jss';
import appStyle from './style/app-style';

export const ThemeWrapper: FunctionComponent = props => {
  const theme = useTheme();
  const styles = appStyle(theme);

  return <div className={styles.app}>{props.children}</div>;
};
