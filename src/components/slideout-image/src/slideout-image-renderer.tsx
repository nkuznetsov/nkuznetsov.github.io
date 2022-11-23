import React, { memo } from 'react';
import { Image } from 'components/image';
import { Theme } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from '@mui/material';
import catImage from './style/cat.png';
import headerStyle from './style/slideout-image-style';

export const SlideoutImageRenderer: React.FC = memo(() => {
  const theme = useTheme() as Theme;
  const styles = headerStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Image
      src={catImage}
      alt={formatMessage({ id: 'home.cat' })}
      className={styles.catImage}
    />
  );
});

SlideoutImageRenderer.displayName = 'SlideoutImageRenderer';
