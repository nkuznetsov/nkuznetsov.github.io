import React, { memo } from 'react';
import { Cursor } from 'components/image';
import { IMenuRendererProps } from './menu-interface';
import { SHOW_DEBUG } from 'utils/constants';
import { Toggle } from 'components/toggle';
import { ToggleType } from 'components/toggle/src/toggle-interface';

export const MenuRenderer: React.FC<IMenuRendererProps> = memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    return (
      <>
        {SHOW_DEBUG ? (
          <Toggle
            rotate360OnHover
            toggle={toggleDebug}
            type={ToggleType.Debug}
          />
        ) : null}
        <Toggle
          cursor={Cursor.Wand}
          glow
          rotate360OnHover
          toggle={toggleMagic}
          type={ToggleType.Magic}
        />
        <Toggle
          rotate360OnHover
          toggle={toggleTheme}
          type={ToggleType.Theme}
          cursor={Cursor.Pointer}
        />
      </>
    );
  }
);

MenuRenderer.displayName = 'MenuRenderer';
