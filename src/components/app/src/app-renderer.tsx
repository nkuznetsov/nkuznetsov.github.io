import React from 'react';
import { useTheme } from 'react-jss';
import lobster from '../../../assets/images/lobster.svg';
import { localStyles } from '../../../assets/styles/local';

export const AppRenderer = () => {
  const theme = useTheme();
  const styles = localStyles(theme);

  return (
    <>
      <p className={styles.text}>Just a fluffy lobster here for now</p>
      <img src={lobster} alt='lobster' className={styles.lobster} />
    </>
  );
};
