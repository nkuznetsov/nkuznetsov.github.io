import React, { memo, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { CardFlipDirection, ICardFlipProps } from './card-flip-interface';
import { colors } from 'style/colors';
import { useTheme } from 'react-jss';

export const CardFlipRenderer: React.FC<ICardFlipProps> = memo(
  ({
    cardZIndex,
    flipDirection,
    flipSpeedFrontToBack,
    flipSpeedBackToFront,
    infinite,
    isFlipped,
    children,
    containerStyle
  }) => {
    const theme: any = useTheme();

    const [flipped, setFlipped] = useState(isFlipped);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      if (isFlipped !== flipped) {
        setFlipped(isFlipped);
        setRotation(currentRotationDegrees => currentRotationDegrees + 180);
      }
    }, [isFlipped, flipped]);

    // Card flip styles are dynamic, so keeping them inline
    const frontRotateY = `rotateY(${
      infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
    const backRotateY = `rotateY(${
      infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;
    const frontRotateX = `rotateX(${
      infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
    const backRotateX = `rotateX(${
      infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;

    const flipStyles: any = {
      container: {
        background: theme.isDebug && colors.red[100],
        marginRight: 0,
        perspective: '1000px',
        zIndex: `${cardZIndex}`
      },
      flipper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        background: theme.isDebug && colors.teal[300]
      },
      front: {
        position: isFlipped ? 'absolute' : 'relative',
        height: '100%',
        left: 0,
        top: 0,
        marginRight: '1rem',
        zIndex: '2',
        background: theme.isDebug && colors.yellow[100],
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform:
          flipDirection === CardFlipDirection.Horizontal
            ? frontRotateY
            : frontRotateX,
        transformStyle: 'preserve-3d',
        transition: `${flipSpeedBackToFront}s`
      },
      back: {
        position: isFlipped ? 'relative' : 'absolute',
        height: '100%',
        left: 0,
        top: 0,
        marginRight: '1rem',
        background: theme.isDebug && colors.black[100],
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform:
          flipDirection === CardFlipDirection.Horizontal
            ? backRotateY
            : backRotateX,
        transformStyle: 'preserve-3d',
        transition: `${flipSpeedFrontToBack}s`
      }
    };

    const cardFront = children[0];
    const cardBack = children[1];

    return (
      <Box style={flipStyles.container} className={containerStyle}>
        <Box style={flipStyles.flipper}>
          <Box style={flipStyles.front}>{cardFront}</Box>
          <Box style={flipStyles.back}>{cardBack}</Box>
        </Box>
      </Box>
    );
  }
);

CardFlipRenderer.displayName = 'CardFlipRenderer';
