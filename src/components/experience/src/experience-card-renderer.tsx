import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { CardBackRenderer as CardBack } from './card-back-renderer';
import { CardFlip } from 'components/card-flip';
import { CardFlipDirection } from 'components/card-flip/src/card-flip-interface';
import { CardFrontRenderer as CardFront } from './card-front-renderer';
import { useTheme } from 'react-jss';
import experienceStyle from './style/experience-style';
import {
  CARD_Z_INDEX,
  FLIP_SPEED_BACK_TO_FRONT,
  FLIP_SPEED_FRONT_TO_BACK,
  IS_INFINITE_ROTATION
} from 'utils/constants';
import {
  ExperienceCardEffect,
  IExperienceCardRendererProps
} from './experience-interface';

export const ExperienceCardRenderer: React.FC<IExperienceCardRendererProps> = ({
  experience
}) => {
  const theme = useTheme();
  const styles = experienceStyle(theme);

  const [flipped, setFlipped] = useState(false);

  const flip = (flipped: boolean) => {
    setFlipped(flipped);
  };

  const effect = experience.effect;
  const hasFlipEffect =
    effect === ExperienceCardEffect.FlipHorizontal ||
    effect === ExperienceCardEffect.FlipVertical;

  const flipDirection = getFlipDirection(effect);

  const content = hasFlipEffect ? (
    <CardFlip
      isFlipped={flipped}
      flipDirection={flipDirection}
      flipSpeedFrontToBack={FLIP_SPEED_FRONT_TO_BACK}
      flipSpeedBackToFront={FLIP_SPEED_BACK_TO_FRONT}
      infinite={IS_INFINITE_ROTATION}
      cardZIndex={CARD_Z_INDEX}
      containerStyle={styles.experienceCardOuterContainer}
    >
      <CardFront
        experience={experience}
        onFlip={flip}
        cardContainerStyle={styles.experienceCardInnerContainer}
      />
      <CardBack
        experience={experience}
        onFlip={flip}
        cardContainerStyle={styles.experienceCardInnerContainer}
      />
    </CardFlip>
  ) : (
    <Box className={styles.experienceCardOuterContainer}>
      <CardFront
        experience={experience}
        cardContainerStyle={styles.experienceCardInnerContainer}
      />
    </Box>
  );

  return content;
};

const getFlipDirection = (effect: ExperienceCardEffect) => {
  switch (effect) {
    case ExperienceCardEffect.FlipHorizontal: {
      return CardFlipDirection.Horizontal;
    }
    case ExperienceCardEffect.FlipVertical: {
      return CardFlipDirection.Vertical;
    }
    default: {
      return CardFlipDirection.None;
    }
  }
};

ExperienceCardRenderer.displayName = 'ExperienceCardRenderer';
