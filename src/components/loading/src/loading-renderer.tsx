import React, { memo } from 'react';
import { ILoadingProps } from './loading-interface';
import { Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';

export const LoadingRenderer: React.FC<ILoadingProps> = memo(
  ({ type, message }) => {
    const { formatMessage } = useIntl();
    const loadingText = message || formatMessage({ id: 'common.loading' });

    return (
      <>
        {/* <Image /> */}
        <Typography variant='h3'>{loadingText}</Typography>
      </>
    );
  }
);

LoadingRenderer.displayName = 'LoadingRenderer';
