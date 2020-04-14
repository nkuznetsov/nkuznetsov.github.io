import React from 'react';
import { IMagicControllerContainerProps } from './magic-controller-interface';
import { MagicControllerRenderer } from './magic-controller-renderer';

export const MagicControllerContainer = (
  props: IMagicControllerContainerProps
) => {
  const { toggleMagic } = props;

  const switchMagic = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleMagic(event.target.checked);
  };

  return <MagicControllerRenderer toggleMagic={switchMagic} />;
};
