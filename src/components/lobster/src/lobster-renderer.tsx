import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import lobster from '../../../assets/images/lobster.svg';
import localStyles from '../../../assets/styles/local';

export const LobsterRenderer = () => {
  const theme = useTheme();
  const styles = localStyles(theme);
  const { formatMessage } = useIntl();
  const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(!hovered)}>
      <p>{formatMessage({ id: 'home.fluffyLobsterWelcome' })}</p>
      <img
        src={lobster}
        alt='lobster'
        className={
          hovered ? styles.lobsterCounterclockwise : styles.lobsterClockwise
        }
      />
    </div>
  );
};
