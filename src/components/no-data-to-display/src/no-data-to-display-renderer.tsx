import React from 'react';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';

export const NoDataToDisplayRenderer: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Typography variant='h4'>
      {formatMessage({ id: 'noData.noDataText' })}
    </Typography>
  );
};

NoDataToDisplayRenderer.displayName = 'NoDataToDisplayRenderer';
