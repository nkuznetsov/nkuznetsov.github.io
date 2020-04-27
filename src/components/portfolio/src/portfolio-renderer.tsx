import React from 'react';
import { Image } from '../../image';
import { ITheme, ThemeType } from '../../../models';
import { ReactComponent as RocketDarkImg } from './style/rocket_dark.svg';
import { ReactComponent as RocketLightImg } from './style/rocket_light.svg';
import { toTop } from '../../../utils';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import portfolioStyle from './style/portfolio-style';

export const PortfolioRenderer: React.FC = () => {
  const theme = useTheme() as ITheme;
  const styles = portfolioStyle(theme);
  const { formatMessage } = useIntl();

  const rocketImg =
    theme.type === ThemeType.Light ? RocketDarkImg : RocketLightImg;

  const composedClass = [styles.portfolio, 'portfolio-page'].join(' ');

  return (
    <Box className={composedClass}>
      <Box className={styles.main}>
        <p>Portfolio coming soon</p>
      </Box>
      <Box className={styles.toTopContainer}>
        <Image
          ariaLabel={formatMessage({ id: 'home.toTop' })}
          className={styles.toTopNavIcon}
          onClick={toTop}
          Svg={rocketImg}
          popOutOnHover
        />
      </Box>
    </Box>
  );
};
