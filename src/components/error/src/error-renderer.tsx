import React, { memo } from 'react';
import { IErrorProps } from './error-interface';
import { Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export const ErrorRenderer: React.FC<IErrorProps> = memo(({ message }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Typography variant='h3'>
        {formatMessage({ id: 'common.errorLoadingData' })}
      </Typography>
      {message && <Typography variant='h4'>{message}</Typography>}
    </>
  );
});

ErrorRenderer.displayName = 'ErrorRenderer';
