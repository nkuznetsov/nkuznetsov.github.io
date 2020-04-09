import React, { useState } from 'react';
import { IImageProps } from './image-interface';
import { useTheme } from 'react-jss';
import imageStyle from './style/image-style';

export const ImageRenderer = (props: IImageProps) => {
  const { src, Svg, link, className, ariaLabel, hover, themed } = props;
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const styles = imageStyle(theme);

  const composedClass = themed
    ? [className, styles.themed].join(' ')
    : className;

  const hoverStyle = hover
    ? {
        transform: `${hovered ? 'scale(1.5, 1.5)' : 'scale(1, 1)'}`,
        transition: '0.5s'
      }
    : undefined;

  return (
    <div
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      {Svg ? (
        <a href={link}>
          <Svg className={composedClass} style={hoverStyle}>
            {ariaLabel}
          </Svg>
        </a>
      ) : (
        <img
          src={src}
          alt={ariaLabel}
          className={composedClass}
          style={hoverStyle}
        />
      )}
    </div>
  );
};
