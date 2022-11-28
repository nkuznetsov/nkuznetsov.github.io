import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import { IGalleryProps, IImage } from './gallery-interface';
import { Theme } from 'models';
import { Tile } from 'components/tile';
import { useTheme } from 'react-jss';
import galleryStyle from './style/gallery-style';

export const GalleryRenderer: React.FC<IGalleryProps> = memo(
  ({ isDynamic, images, onClick }) => {
    const theme = useTheme() as Theme;
    const styles = galleryStyle(theme);

    const containerStyle = isDynamic
      ? styles.dynamicGallery
      : styles.fixedGallery;

    return (
      <Box className={containerStyle}>
        {images.map((image: IImage, index: number) => {
          return (
            <Tile
              key={index}
              index={index}
              thumbnail={image.source.thumbnail}
              alt={image.alt}
              onClick={onClick}
              isDynamic={isDynamic}
            />
          );
        })}
      </Box>
    );
  }
);

GalleryRenderer.displayName = 'GalleryRenderer';
