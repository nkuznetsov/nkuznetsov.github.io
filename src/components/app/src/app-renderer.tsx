import React from 'react';
import lobster from '../../../assets/images/lobster.svg';
import { localStyles } from '../../../assets/styles/local';

export const AppRenderer = () => {
  const styles = localStyles(); // memo

  return (
    <>
      <p>Just a fluffy lobster here for now</p>
      <img src={lobster} alt='lobster' className={styles.lobster} />
    </>
  );
};
