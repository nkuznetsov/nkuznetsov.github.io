import React from 'react';
import { useTheme } from 'react-jss';
import lobsterImage from '../../../assets/images/lobster.svg';
import localStyles from '../../../assets/styles/local';
import { useIntl } from 'react-intl';

export const LobsterRenderer = () => {
  const theme = useTheme();
  const styles = localStyles(theme);
  const { formatMessage } = useIntl();

  return (
    <>
      <p className={styles.text}>
        {formatMessage({ id: 'home.fluffyLobsterWelcome' })}
      </p>
      <img src={lobsterImage} alt='lobster' className={styles.lobster} />
    </>
  );
};
