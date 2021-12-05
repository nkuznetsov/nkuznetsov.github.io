import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { AppContext } from 'components/app';
import { Box } from '@material-ui/core';
import { Image } from 'components/image';
import { ImageEffect } from 'components/image/src/image-interface';
import { Theme, ThemeType } from 'models';
import { IToggleProps, ToggleType } from './toggle-interface';
import { ReactComponent as DarkThemeActiveImage } from './style/moon-light.svg';
import { ReactComponent as DarkThemeInactiveImage } from './style/moon-dark.svg';
import { ReactComponent as WandActiveImage } from './style/wand-dark.svg';
import { ReactComponent as WandInactiveImage } from './style/wand-light.svg';
import { ReactComponent as WrenchActiveImage } from './style/wrench-dark.svg';
import { ReactComponent as WrenchInactiveImage } from './style/wrench-light.svg';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import headerStyle from './style/toggle-style';

export const ToggleRenderer: React.FC<IToggleProps> = memo(
  ({ cursor, glow, rotate360OnHover, toggle, type }) => {
    const theme = useTheme() as Theme;
    const styles = headerStyle(theme);
    const { formatMessage } = useIntl();
    const appContext = useContext(AppContext);
    const [isChecked, setIsChecked] = useState(false);
    const [activeIcon, setActiveIcon] =
      useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>();
    const [inactiveIcon, setInactiveIcon] =
      useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>();

    useEffect(() => {
      switch (type) {
        case ToggleType.Debug: {
          setIsChecked(appContext.isDebug);
          setActiveIcon(WrenchActiveImage);
          setInactiveIcon(WrenchInactiveImage);
          break;
        }
        case ToggleType.Magic: {
          setIsChecked(appContext.isMagic.some(magic => magic));
          setActiveIcon(WandActiveImage);
          setInactiveIcon(WandInactiveImage);
          break;
        }
        case ToggleType.Theme: {
          setIsChecked(theme.type === ThemeType.Dark);
          setActiveIcon(DarkThemeActiveImage);
          setInactiveIcon(DarkThemeInactiveImage);
          break;
        }
      }
    }, [type, appContext.isDebug, appContext.isMagic, theme.type]);

    const toggleHandler = useCallback(() => {
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
          setIsChecked(theme.type === ThemeType.Dark);
          toggle(!isChecked);
          break;
        }
      }
    }, [
      appContext.isDebug,
      appContext.isMagic,
      theme.type,
      toggle,
      isChecked,
      type
    ]);

    return (
      <Box className={styles.toggleContainer}>
        {isChecked ? (
          <Image
            alt={formatMessage({ id: 'home.toggleInactiveIcon' })}
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
            alt={formatMessage({ id: 'home.toggleActiveIcon' })}
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
      </Box>
    );
  }
);

ToggleRenderer.displayName = 'ToggleRenderer';
