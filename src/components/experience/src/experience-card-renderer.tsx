import React, { useState } from 'react';
import ReactCardFlip from './ReactCardFlip';
import { IExperienceCardRendererProps } from './experience-interface';
import { CardFrontRenderer } from './card-front-renderer';

export const ExperienceCardRenderer: React.FC<IExperienceCardRendererProps> = ({
  experience
}) => {
  const [hovered, setHovered] = useState(false);

  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   setHovered(!hovered);
  // };

  const changeHover = (hovered: boolean) => () => {
    setHovered(hovered);
  };

  const cardStyles = {
    front: undefined,
    back: undefined
  };

  return (
    <div onMouseEnter={changeHover(true)} onMouseLeave={changeHover(false)}>
      <ReactCardFlip
        isFlipped={hovered}
        flipDirection='vertical'
        cardStyles={cardStyles}
      >
        <div>
          <CardFrontRenderer experience={experience} />
        </div>

        <div>This is the back of the card.</div>
      </ReactCardFlip>
    </div>
  );
};

ExperienceCardRenderer.displayName = 'ExperienceCardRenderer';
