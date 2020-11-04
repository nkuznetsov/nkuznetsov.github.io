import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { CardBackRenderer as CardBack } from './card-back-renderer';
import { CardEffect } from 'components/experience/src/experience-interface';
import { CardFlip } from 'components/card-flip';
import { CardFlipDirection } from 'components/card-flip/src/card-flip-interface';
import { CardFrontRenderer as CardFront } from './card-front-renderer';
import { ICardRendererProps } from './card-interface';
import { ReactComponent as FlipHorizontalImg } from './style/flip-horizontal.svg';
import { ReactComponent as FlipVerticalImg } from './style/flip-vertical.svg';
import { useTheme } from 'react-jss';
import cardStyle from './style/card-style';
import {
  CARD_Z_INDEX,
  FLIP_SPEED_BACK_TO_FRONT,
  FLIP_SPEED_FRONT_TO_BACK,
  IS_INFINITE_ROTATION
} from 'utils/constants';

export const CardRenderer: React.FC<ICardRendererProps> = ({ experience }) => {
  const theme = useTheme();
  const styles = cardStyle(theme);

  const [flipped, setFlipped] = useState(false);

  const flip = (flipped: boolean) => {
    setFlipped(flipped);
  };

  const effect = experience.effect;
  const hasFlipEffect =
    effect === CardEffect.FlipHorizontal || effect === CardEffect.FlipVertical;
  const flipDirection = getFlipDirection(effect);
  const flipImage = getFlipImage(flipDirection);

  const content = hasFlipEffect ? (
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
        flipImage={flipImage}
      />
      <CardBack
        experience={experience}
        onFlip={flip}
        cardContainerStyle={styles.cardInnerContainer}
        flipImage={flipImage}
      />
    </CardFlip>
  ) : (
    <Box className={styles.cardOuterContainer}>
      <CardFront
        experience={experience}
        cardContainerStyle={styles.cardInnerContainer}
      />
    </Box>
  );

  return content;
};

const getFlipDirection = (effect: CardEffect): CardFlipDirection => {
  switch (effect) {
    case CardEffect.FlipHorizontal: {
      return CardFlipDirection.Horizontal;
    }
    case CardEffect.FlipVertical: {
      return CardFlipDirection.Vertical;
    }
    default: {
      return CardFlipDirection.None;
    }
  }
};

const getFlipImage = (flipDirection: CardFlipDirection): any => {
  switch (flipDirection) {
    case CardFlipDirection.Horizontal: {
      return FlipHorizontalImg;
    }
    case CardFlipDirection.Vertical: {
      return FlipVerticalImg;
    }
    default: {
      return null;
    }
  }
};

CardRenderer.displayName = 'CardRenderer';
