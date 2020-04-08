import React, { useState } from 'react';
import { IImageProps } from './image-interface';

export const ImageRenderer = (props: IImageProps) => {
  const { src, Svg, link, className, ariaLabel, hover } = props;

  const [hovered, setHovered] = useState(false);

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
          <Svg className={className} style={hoverStyle}>
            {ariaLabel}
          </Svg>
        </a>
      ) : (
        <img
          src={src}
          alt={ariaLabel}
          className={className}
          style={hoverStyle}
        />
      )}
    </div>
  );
};
