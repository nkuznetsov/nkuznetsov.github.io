import React, { useState } from 'react';
import { Image } from '../../image';
import { ReactComponent as LobsterImage } from './style/lobster.svg';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import lobsterStyle from './style/lobster-style';

export const LobsterRenderer = () => {
  const theme = useTheme();
  const styles = lobsterStyle(theme);
  const { formatMessage } = useIntl();
  const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(!hovered)}>
      <p>{formatMessage({ id: 'home.fluffyLobsterWelcome' })}</p>
      <Image
        Svg={LobsterImage}
        ariaLabel='lobster'
        className={
          hovered ? styles.lobsterCounterclockwise : styles.lobsterClockwise
        }
      />
    </div>
  );
};
