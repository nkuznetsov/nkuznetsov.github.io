import React, { useContext } from 'react';
import { AppContext } from '../../app';
import { Image } from '../../image';
import { ITheme, ThemeType } from '../../../models';
import { IToggleProps, ToggleType } from './toggle-interface';
import { useTheme } from 'react-jss';
import Checkbox from '@material-ui/core/Checkbox';
import darkThemeActiveImage from './style/moon_light.svg';
import darkThemeInactiveImage from './style/moon_dark.svg';
import headerStyle from './style/toggle-style';
import wandActiveImage from './style/wand_dark.svg';
import wandInactiveImage from './style/wand_light.svg';
import wrenchActiveImage from './style/wrench_dark.svg';
import wrenchInactiveImage from './style/wrench_light.svg';

export const ToggleRenderer = (props: IToggleProps) => {
  const { type, toggle } = props;
  const theme = useTheme() as ITheme;
  const styles = headerStyle(theme);
  const appContext = useContext(AppContext);

  let isChecked;
  let activeIcon;
  let inactiveIcon;

  switch (type) {
    case ToggleType.Debug: {
      isChecked = appContext.isDebug;
      activeIcon = wrenchActiveImage;
      inactiveIcon = wrenchInactiveImage;
      break;
    }
    case ToggleType.Magic: {
      isChecked = appContext.isMagic;
      activeIcon = wandActiveImage;
      inactiveIcon = wandInactiveImage;
      break;
    }
    case ToggleType.Theme: {
      isChecked = theme.type === ThemeType.Dark;
      activeIcon = darkThemeActiveImage;
      inactiveIcon = darkThemeInactiveImage;
      break;
    }
  }

  const toggleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggle(event.target.checked);
  };

  return (
    <div className={styles.toggleController}>
      <Checkbox
        style={{ padding: 0 }}
        icon={
          <Image
            themed
            src={inactiveIcon}
            ariaLabel='toggle active icon'
            className={styles.toggleIcon}
          />
        }
        checkedIcon={
          <Image
            themed
            src={activeIcon}
            ariaLabel='toggle inactive icon'
            className={styles.toggleIcon}
          />
        }
        onChange={toggleHandler}
        checked={isChecked}
      />
    </div>
  );
};
