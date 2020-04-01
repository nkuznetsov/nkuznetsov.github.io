import React from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import lobsterImage from '../../../assets/images/lobster.svg';
import localStyles from '../../../assets/styles/local';

export const LobsterRenderer = () => {
  const theme = useTheme();
  const styles = localStyles(theme);
  const { formatMessage } = useIntl();

  return (
    <>
      <p>{formatMessage({ id: 'home.fluffyLobsterWelcome' })}</p>
      <img src={lobsterImage} alt='lobster' className={styles.lobster} />
    </>
  );
};
