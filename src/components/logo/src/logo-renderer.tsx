import React, { memo, useState } from 'react';
import { Image } from 'components/image';
import { ReactComponent as DarkLogo } from './style/logo-dark.svg';
import { ReactComponent as LightLogo } from './style/logo-light.svg';
import { ThemeType } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import logoStyle from './style/logo-style';

export const LogoRenderer: React.FC = memo(() => {
  const theme: any = useTheme();
  const styles = logoStyle(theme);
  const { formatMessage } = useIntl();

  const [hovered, setHovered] = useState(false);

  const svgLogo = theme.type === ThemeType.Light ? DarkLogo : LightLogo;

  return (
    <div>
      <div onMouseEnter={() => setHovered(!hovered)}>
        <Image
          Svg={svgLogo}
          alt={formatMessage({ id: 'home.logo' })}
          className={
            hovered ? styles.logoCounterclockwise : styles.logoClockwise
          }
        />
      </div>
    </div>
  );
});

LogoRenderer.displayName = 'LogoRenderer';
