import React, { useContext } from 'react';
import { AppContext } from '../../app';
import { Image } from '../../image';
import { ITheme, ThemeType } from '../../../models';
import { IToggleProps, ToggleType } from './toggle-interface';
import { ReactComponent as DarkThemeActiveImage } from './style/moon_light.svg';
import { ReactComponent as darkThemeInactiveImage } from './style/moon_dark.svg';
import { ReactComponent as WandActiveImage } from './style/wand_dark.svg';
import { ReactComponent as WandInactiveImage } from './style/wand_light.svg';
import { ReactComponent as WrenchActiveImage } from './style/wrench_dark.svg';
import { ReactComponent as WrenchInactiveImage } from './style/wrench_light.svg';
import { useTheme } from 'react-jss';
import headerStyle from './style/toggle-style';

export const ToggleRenderer: React.FunctionComponent<IToggleProps> = React.memo(
  ({ glow, rotate360OnHover, toggle, type }) => {
    const theme = useTheme() as ITheme;
    const styles = headerStyle(theme);
    const appContext = useContext(AppContext);

    let isChecked;
    let activeIcon;
    let inactiveIcon;

    switch (type) {
      case ToggleType.Debug: {
        isChecked = appContext.isDebug;
        activeIcon = WrenchActiveImage;
        inactiveIcon = WrenchInactiveImage;
        break;
      }
      case ToggleType.Magic: {
        isChecked = appContext.isMagic.some(magic => magic);
        activeIcon = WandActiveImage;
        inactiveIcon = WandInactiveImage;
        break;
      }
      case ToggleType.Theme: {
        isChecked = theme.type === ThemeType.Dark;
        activeIcon = DarkThemeActiveImage;
        inactiveIcon = darkThemeInactiveImage;
        break;
      }
    }

    const toggleHandler = () => {
      switch (type) {
        case ToggleType.Debug: {
          toggle(!appContext.isDebug);
          break;
        }
        case ToggleType.Magic: {
          toggle(!appContext.isMagic);
          break;
        }
        case ToggleType.Theme: {
          isChecked = theme.type === ThemeType.Dark;
          toggle(!isChecked);
          break;
        }
      }
    };

    return (
      <div className={styles.toggleContainer}>
        {isChecked ? (
          <Image
            ariaLabel='toggle inactive icon'
            className={styles.toggleIcon}
            glow={glow}
            onClick={toggleHandler}
            rotate360OnHover={rotate360OnHover}
            Svg={activeIcon}
            themed
          />
        ) : (
          <Image
            ariaLabel='toggle active icon'
            className={styles.toggleIcon}
            glow={glow}
            onClick={toggleHandler}
            rotate360OnHover={rotate360OnHover}
            Svg={inactiveIcon}
            themed
          />
        )}
      </div>
    );
  }
);
