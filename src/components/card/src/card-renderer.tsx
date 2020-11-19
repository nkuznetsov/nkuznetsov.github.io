import React, { memo, useCallback, useState } from 'react';
import { Box } from '@material-ui/core';
import { CardBackRenderer as CardBack } from './card-back-renderer';
import { CardFlip } from 'components/card-flip';
import { CardFlipDirection } from 'components/card-flip/src/card-flip-interface';
import { CardFrontRenderer as CardFront } from './card-front-renderer';
import { ICardRendererProps } from './card-interface';
import { ReactComponent as DarkFlipHorizontalImg } from './style/dark-flip-horizontal.svg';
import { ReactComponent as DarkFlipVerticalImg } from './style/dark-flip-vertical.svg';
import { ReactComponent as LightFlipHorizontalImg } from './style/light-flip-horizontal.svg';
import { ReactComponent as LightFlipVerticalImg } from './style/light-flip-vertical.svg';
import { useTheme } from 'react-jss';
import cardStyle from './style/card-style';
import {
  FlipEffect,
  FlipIconStyle
} from 'components/experience/src/experience-interface';
import {
  CARD_Z_INDEX,
  FLIP_SPEED_BACK_TO_FRONT,
  FLIP_SPEED_FRONT_TO_BACK,
  IS_INFINITE_ROTATION
} from 'utils/constants';

export const CardRenderer: React.FC<ICardRendererProps> = memo(
  ({ experience }) => {
    const theme = useTheme();
    const styles = cardStyle(theme);

    const [flipped, setFlipped] = useState(false);

    const flip = useCallback((flipped: boolean) => {
      setFlipped(flipped);
    }, []);

    if (experience.details) {
      // Show card with a back side
      const { flipEffect, flipIconBackStyle } = experience.details;

      const effect = flipEffect;
      const flipDirection = getFlipDirection(effect);
      const frontFlipImage = getFlipImage(
        true,
        flipDirection,
        flipIconBackStyle
      );
      const backFlipImage = getFlipImage(
        false,
        flipDirection,
        flipIconBackStyle
      );

      return (
        <CardFlip
          isFlipped={flipped}
          flipDirection={flipDirection}
          flipSpeedFrontToBack={FLIP_SPEED_FRONT_TO_BACK}
          flipSpeedBackToFront={FLIP_SPEED_BACK_TO_FRONT}
          infinite={IS_INFINITE_ROTATION}
          cardZIndex={CARD_Z_INDEX}
          containerStyle={styles.cardOuterContainer}
        >
          <CardFront
            experience={experience}
            onFlip={flip}
            cardContainerStyle={styles.cardInnerContainer}
            flipImage={frontFlipImage}
          />
          <CardBack
            experience={experience}
            onFlip={flip}
            cardContainerStyle={styles.cardInnerContainer}
            flipImage={backFlipImage}
          />
        </CardFlip>
      );
    } else {
      return (
        <Box className={styles.cardOuterContainer}>
          <CardFront
            experience={experience}
            cardContainerStyle={styles.cardInnerContainer}
          />
        </Box>
      );
    }
  }
);

const getFlipDirection = (effect: FlipEffect): CardFlipDirection => {
  switch (effect) {
    case FlipEffect.FlipHorizontal: {
      return CardFlipDirection.Horizontal;
    }
    case FlipEffect.FlipVertical: {
      return CardFlipDirection.Vertical;
    }
    default: {
      return CardFlipDirection.None;
    }
  }
};

const getFlipImage = (
  isFront: boolean,
  flipDirection: CardFlipDirection,
  flipIconStyle: FlipIconStyle
): any => {
  switch (flipDirection) {
    case CardFlipDirection.Horizontal: {
      if (isFront) {
        return DarkFlipHorizontalImg;
      } else {
        return flipIconStyle === FlipIconStyle.Dark
          ? DarkFlipHorizontalImg
          : LightFlipHorizontalImg;
      }
    }
    case CardFlipDirection.Vertical: {
      if (isFront) {
        return DarkFlipVerticalImg;
      } else {
        return flipIconStyle === FlipIconStyle.Dark
          ? DarkFlipVerticalImg
          : LightFlipVerticalImg;
      }
    }
    default: {
      return null;
    }
  }
};

CardRenderer.displayName = 'CardRenderer';
