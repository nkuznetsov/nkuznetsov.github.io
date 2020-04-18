import React, { useState } from 'react';
import { Image } from '../../image';
import { ReactComponent as DarkLogo } from './style/logo_dark.svg';
import { ReactComponent as LightLogo } from './style/logo_light.svg';
import { ThemeType } from '../../../models';
import { useTheme } from 'react-jss';
import logoStyle from './style/logo-style';

export const LogoRenderer: React.FunctionComponent = () => {
  const theme: any = useTheme();
  const styles = logoStyle(theme);
  const [hovered, setHovered] = useState(false);

  const svgLogo = theme.type === ThemeType.Light ? DarkLogo : LightLogo;

  return (
    <div onMouseEnter={() => setHovered(!hovered)}>
      <Image
        Svg={svgLogo}
        ariaLabel='logo'
        className={hovered ? styles.logoCounterclockwise : styles.logoClockwise}
      />
    </div>
  );
};
