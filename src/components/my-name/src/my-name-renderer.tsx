import React, { memo } from 'react';
import { Theme } from 'models';
import { useIntl } from 'react-intl';
import { Typography, useTheme } from '@mui/material';
import myNameStyle from './style/my-name-style';

export const MyNameRenderer: React.FC = memo(() => {
  const theme = useTheme() as Theme;
  const styles = myNameStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Typography className={styles.name} variant='h2'>
      {formatMessage({ id: 'home.nikitaKuznetsov' })}
    </Typography>
  );
});

MyNameRenderer.displayName = 'MyNameRenderer';
