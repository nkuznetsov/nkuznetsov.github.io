import React, { memo } from 'react';
import { IGalleryProps, IImage } from './gallery-interface';
import { Tile } from 'components/tile';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import galleryStyle from './style/gallery-style';

export const GalleryRenderer: React.FC<IGalleryProps> = memo(
  ({ isDynamic, images, onClick }) => {
    const theme = useTheme();
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
            />
          );
        })}
      </Box>
    );
  }
);

GalleryRenderer.displayName = 'GalleryRenderer';
