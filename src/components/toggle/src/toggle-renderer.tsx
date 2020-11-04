import React, { useContext } from 'react';
import { AppContext } from 'components/app';
import { Image } from 'components/image';
import { ImageEffect } from 'components/image/src/image-interface';
import { ITheme, ThemeType } from 'models';
import { IToggleProps, ToggleType } from './toggle-interface';
import { ReactComponent as DarkThemeActiveImage } from './style/moon_light.svg';
import { ReactComponent as DarkThemeInactiveImage } from './style/moon_dark.svg';
import { ReactComponent as WandActiveImage } from './style/wand_dark.svg';
import { ReactComponent as WandInactiveImage } from './style/wand_light.svg';
import { ReactComponent as WrenchActiveImage } from './style/wrench_dark.svg';
import { ReactComponent as WrenchInactiveImage } from './style/wrench_light.svg';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import headerStyle from './style/toggle-style';

export const ToggleRenderer: React.FC<IToggleProps> = React.memo(
  ({ cursor, glow, rotate360OnHover, toggle, type }) => {
    const theme = useTheme() as ITheme;
    const styles = headerStyle(theme);
    const { formatMessage } = useIntl();
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
        inactiveIcon = DarkThemeInactiveImage;
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
            ariaLabel={formatMessage({ id: 'home.toggleInactiveIcon' })}
            className={styles.toggleIcon}
            cursor={cursor}
            glow={glow}
            onClick={toggleHandler}
            effect={
              rotate360OnHover ? ImageEffect.Rotate360OnHover : ImageEffect.None
            }
            Svg={activeIcon}
            themed
          />
        ) : (
          <Image
            ariaLabel={formatMessage({ id: 'home.toggleActiveIcon' })}
            className={styles.toggleIcon}
            cursor={cursor}
            glow={glow}
            onClick={toggleHandler}
            effect={
              rotate360OnHover ? ImageEffect.Rotate360OnHover : ImageEffect.None
            }
            Svg={inactiveIcon}
            themed
          />
        )}
      </div>
    );
  }
);

ToggleRenderer.displayName = 'ToggleRenderer';
