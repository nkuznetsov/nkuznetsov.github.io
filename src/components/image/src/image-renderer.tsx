import React, { useState, useEffect } from 'react';
import { IImageProps } from './image-interface';
import { useTheme } from 'react-jss';
import imageStyle from './style/image-style';

export const ImageRenderer = (props: IImageProps) => {
  const {
    ariaLabel,
    className,
    glow,
    link,
    onClick,
    popOutOnHover,
    rotate360OnHover,
    src,
    Svg,
    themed
  } = props;
  const [hovered, setHovered] = useState(false);
  const [composedClass, setComposedClass] = useState<string | undefined>('');
  const theme = useTheme();
  const styles = imageStyle(theme);

  useEffect(() => {
    let composedClass = themed
      ? [className, styles.themed].join(' ')
      : className;

    if (popOutOnHover) {
      composedClass = [
        composedClass,
        hovered ? styles.popOut : styles.popIn,
        styles.hoverTransition
      ].join(' ');
    }

    if (rotate360OnHover) {
      composedClass = [
        composedClass,
        hovered
          ? glow
            ? styles.rotateClockwiseAndGlow
            : styles.rotateClockwise
          : styles.resetImage
      ].join(' ');
    }

    setComposedClass(composedClass);
  }, [
    className,
    glow,
    hovered,
    popOutOnHover,
    rotate360OnHover,
    setComposedClass,
    styles,
    themed
  ]);

  return (
    <div
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      {Svg ? (
        <a href={link}>
          <Svg className={composedClass} onClick={onClick}>
            {ariaLabel}
          </Svg>
        </a>
      ) : (
        <img src={src} alt={ariaLabel} className={composedClass} />
      )}
    </div>
  );
};
