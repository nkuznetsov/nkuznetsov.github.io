import React from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import myNameStyle from './style/my-name-style';

export const MyNameRenderer: React.FunctionComponent = () => {
  const theme = useTheme();
  const styles = myNameStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <p className={styles.name}>
      {formatMessage({ id: 'home.nikitaKuznetsov' })}
    </p>
  );
};
