import React, { memo, useCallback, useState } from 'react';
import { Box } from '@material-ui/core';
import { CardBackRenderer as CardBack } from './card-back-renderer';
import { CardFlip } from 'components/card-flip';
import { CardFrontRenderer as CardFront } from './card-front-renderer';
import { ICardRendererProps } from './card-interface';
import { useTheme } from 'react-jss';
import cardStyle from './style/card-style';
import {
  CARD_Z_INDEX,
  FLIP_SPEED_BACK_TO_FRONT,
  FLIP_SPEED_FRONT_TO_BACK,
  IS_INFINITE_ROTATION
} from 'utils/constants';
import {
  getExperienceImages,
  getFlipDirection,
  getFlipImage
} from 'utils/utils';
import { useIntl } from 'react-intl';

export const CardRenderer: React.FC<ICardRendererProps> = memo(
  ({ experience }) => {
    const theme = useTheme();
    const styles = cardStyle(theme);
    const { formatMessage } = useIntl();

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

      experience.details.images = getExperienceImages(
        experience.name,
        formatMessage
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

CardRenderer.displayName = 'CardRenderer';
