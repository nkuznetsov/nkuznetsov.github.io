import React from 'react';
import { Image } from 'components/image';
import { IScrollProps } from './scroll-interface';
import { ITheme, ThemeType } from 'models';
import { ReactComponent as ArrowDownDarkImg } from './style/arrow_down_dark.svg';
import { ReactComponent as ArrowDownLightImg } from './style/arrow_down_light.svg';
import { ReactComponent as RocketDarkImg } from './style/rocket_dark.svg';
import { ReactComponent as RocketLightImg } from './style/rocket_light.svg';
import { scrollToElement, scrollToTop } from 'utils/utils';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import scrollStyle from './style/scroll-style';

export const ScrollRenderer: React.FC<IScrollProps> = React.memo(({ to }) => {
  const theme = useTheme() as ITheme;
  const styles = scrollStyle(theme);
  const { formatMessage } = useIntl();

  let scrollImg, ariaLabel, imgStyle;
  if (to) {
    ariaLabel = formatMessage({ id: 'home.nextPage' });
    scrollImg =
      theme.type === ThemeType.Light ? ArrowDownDarkImg : ArrowDownLightImg;
    imgStyle = styles.nextPageNavIcon;
  } else {
    ariaLabel = formatMessage({ id: 'home.toTop' });
    scrollImg = theme.type === ThemeType.Light ? RocketDarkImg : RocketLightImg;
    imgStyle = styles.toTopNavIcon;
  }

  const scroll = () => {
    if (to) {
      const page = document.querySelector(to);
      if (page) {
        scrollToElement(page);
        return;
      }
    }

    scrollToTop();
  };

  return (
    <Image
      ariaLabel={ariaLabel}
      className={imgStyle}
      onClick={scroll}
      popOutOnHover
      Svg={scrollImg}
    />
  );
});
