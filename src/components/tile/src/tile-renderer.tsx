import React, { memo, useState, useEffect } from 'react';
import { Cursor, ImageEffect } from 'components/image/src/image-interface';
import { Image } from 'components/image';
import { ITileProps } from './tile-interface';
import { Theme } from 'models';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import tileStyle from './style/tile-style';

export const TileRenderer: React.FC<ITileProps> = memo(
  ({ index, thumbnail, alt, onClick, isDynamic }) => {
    const theme = useTheme() as Theme;
    const styles = tileStyle(theme);
    const [containerStyle, setContainerStyle] = useState<string | undefined>(
      ''
    );
    const [imageStyle, setImageStyle] = useState<string | undefined>('');

    useEffect(() => {
      if (isDynamic) {
        setContainerStyle(styles.flowingTile);
        return;
      }

      // Fixed tiles have specific css classes
      const className = `fixedTile${index}`;
      const composedClass = [
        styles.fixedTileCommon,
        styles[
          className as
            | 'fixedTile0'
            | 'fixedTile1'
            | 'fixedTile2'
            | 'fixedTile3'
            | 'fixedTile4'
            | 'fixedTile5'
            | 'fixedTile6'
        ]
      ].join(' ');

      setContainerStyle(composedClass);
      setImageStyle(styles.galleryImage);
    }, [styles, isDynamic, index]);

    return (
      <Box className={containerStyle}>
        <Image
          effect={ImageEffect.PopOutOnHoverSmall}
          onClick={onClick}
          src={thumbnail}
          alt={alt}
          index={index}
          className={imageStyle}
          cursor={Cursor.Pointer}
        />
      </Box>
    );
  }
);

TileRenderer.displayName = 'TileRenderer';
