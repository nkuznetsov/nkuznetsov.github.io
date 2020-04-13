import React from 'react';
import { Image } from '../../image';
import { IMagicControllerRendererProps } from './magic-controller-interface';
import { ITheme } from '../../../models';
import { useTheme } from 'react-jss';
import Checkbox from '@material-ui/core/Checkbox';
import magicControllerStyle from './style/magic-controller-style';
import wandActiveImage from './style/wand_dark.svg';
import wandInactiveImage from './style/wand_light.svg';

export const MagicControllerRenderer = (
  props: IMagicControllerRendererProps
) => {
  const { toggleMagic, isMagic } = props;
  const theme = useTheme() as ITheme;
  const styles = magicControllerStyle(theme);

  return (
    <div className={styles.magicController}>
      <Checkbox
        icon={
          <Image
            src={wandInactiveImage}
            ariaLabel='magic active icon'
            className={styles.magicIcon}
          />
        }
        checkedIcon={
          <Image
            src={wandActiveImage}
            ariaLabel='magic inactive icon'
            className={styles.magicIcon}
          />
        }
        onChange={toggleMagic}
        checked={isMagic}
      />
    </div>
  );
};
