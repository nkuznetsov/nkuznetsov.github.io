import React, { useState, useEffect } from 'react';
import { IImageProps, Cursor } from './image-interface';
import { useTheme } from 'react-jss';
import imageStyle from './style/image-style';

export const ImageRenderer: React.FC<IImageProps> = React.memo(
  ({
    ariaLabel,
    className,
    cursor,
    glow,
    link,
    onClick,
    popOutOnHover,
    rotate360OnHover,
    src,
    Svg,
    themed,
    tooltip
  }) => {
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
        let classToAdd;

        if (hovered) {
          classToAdd = glow
            ? styles.rotateClockwiseAndGlow
            : styles.rotateClockwise;
        } else {
          classToAdd = styles.resetImage;
        }

        composedClass = [composedClass, classToAdd].join(' ');
      }

      if (cursor !== undefined) {
        let classToAdd;

        if (cursor === Cursor.Wand) {
          classToAdd = styles.wandCursor;
        } else if (cursor === Cursor.Pointer) {
          classToAdd = styles.pointerCursor;
        }
        composedClass = [composedClass, classToAdd].join(' ');
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
      themed,
      cursor
    ]);

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (link) {
        window.location.href = link;
        return;
      }

      if (onClick) {
        onClick(event);
      }
    };

    return Svg ? (
      <Svg
        className={composedClass}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={tooltip}
      >
        {ariaLabel}
      </Svg>
    ) : (
      <img src={src} alt={ariaLabel} className={composedClass} />
    );
  }
);
