import React from 'react';
import { Image } from 'components/image';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import catImage from './style/cat.png';
import headerStyle from './style/slideout-image-style';

export const SlideoutImageRenderer: React.FC = () => {
  const theme = useTheme();
  const styles = headerStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Image
      src={catImage}
      ariaLabel={formatMessage({ id: 'home.cat' })}
      className={styles.catImage}
    />
  );
};
