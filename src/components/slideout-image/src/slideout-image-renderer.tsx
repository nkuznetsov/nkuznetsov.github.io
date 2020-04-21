import React from 'react';
import { Image } from '../../image';
import { useTheme } from 'react-jss';
import catImage from './style/cat.png';
import headerStyle from './style/slideout-image-style';

export const SlideoutImageRenderer: React.FC = () => {
  const theme = useTheme();
  const styles = headerStyle(theme);

  return <Image src={catImage} ariaLabel='cat' className={styles.catImage} />;
};
