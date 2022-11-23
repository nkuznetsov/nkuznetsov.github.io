import React, { memo, useCallback } from 'react';
import { Cursor, ImageEffect } from 'components/image/src/image-interface';
import { Image } from 'components/image';
import { IScrollProps } from './scroll-interface';
import { ReactComponent as ArrowDownDarkImg } from './style/arrow-down-dark.svg';
import { ReactComponent as ArrowDownLightImg } from './style/arrow-down-light.svg';
import { ReactComponent as RocketDarkImg } from './style/rocket-dark.svg';
import { ReactComponent as RocketLightImg } from './style/rocket-light.svg';
import { scrollToElement, scrollToTop } from 'utils/utils';
import { Theme, ThemeType } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from '@mui/material';
import scrollStyle from './style/scroll-style';

export const ScrollRenderer: React.FC<IScrollProps> = memo(({ to }) => {
  const theme = useTheme() as Theme;
  const styles = scrollStyle(theme);
  const { formatMessage } = useIntl();

  let scrollImg, alt, imgStyle;
  if (to) {
    alt = formatMessage({ id: 'home.nextPage' });
    scrollImg =
      theme.type === ThemeType.Light ? ArrowDownDarkImg : ArrowDownLightImg;
    imgStyle = styles.nextPageNavIcon;
  } else {
    alt = formatMessage({ id: 'home.toTop' });
    scrollImg = theme.type === ThemeType.Light ? RocketDarkImg : RocketLightImg;
    imgStyle = styles.toTopNavIcon;
  }

  const scroll = useCallback(() => {
    if (to) {
      const page = document.querySelector(to);
      if (page) {
        scrollToElement(page);
        return;
      }
    }

    scrollToTop();
  }, [to]);

  return (
    <Image
      alt={alt}
      className={imgStyle}
      onClick={scroll}
      effect={ImageEffect.ShakeOnHover}
      Svg={scrollImg}
      cursor={Cursor.Pointer}
    />
  );
});

ScrollRenderer.displayName = 'ScrollRenderer';
