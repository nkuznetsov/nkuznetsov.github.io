import React from 'react';
import { globalStyles } from '../../../assets/styles/global';
import { AppRenderer } from './app-renderer';

export const AppContainer = () => {
  const styles = globalStyles(); // memo

  return (
    <div className={styles.app}>
      <AppRenderer />
    </div>
  );
};
