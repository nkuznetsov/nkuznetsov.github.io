import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TOOLTIP_DELAY } from 'utils/constants';
import { useTheme } from 'react-jss';
import Fade from '@material-ui/core/Fade';
import imageStyle from './style/image-style';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import {
  Cursor,
  IImageProps,
  ImageEffect,
  TooltipPosition,
  TooltipStyle
} from './image-interface';

export const ImageRenderer: React.FC<IImageProps> = React.memo(
  ({
    ariaLabel,
    className,
    cursor,
    glow,
    link,
    onClick,
    effect,
    src,
    Svg,
    themed,
    tooltip,
    tooltipBackground,
    tooltipPosition,
    tooltipStyle
  }) => {
    const [hovered, setHovered] = useState(false);
    const [composedClass, setComposedClass] = useState<string | undefined>('');
    const theme: any = useTheme();
    const styles = imageStyle(theme);

    useEffect(() => {
      let composedClass = themed
        ? [className, styles.themed].join(' ')
        : className;

      if (effect === ImageEffect.PopOutOnHover) {
        composedClass = [
          composedClass,
          hovered ? styles.popOut : styles.popIn,
          styles.hoverTransition
        ].join(' ');
      }

      if (effect === ImageEffect.Rotate360OnHover) {
        let classToAdd;

        if (hovered) {
          classToAdd = glow
            ? styles.rotateClockwiseAndGlow
            : styles.rotateClockwise;
        } else {
          classToAdd = styles.resetImage;
        }

        composedClass = [composedClass, classToAdd].join(' ');
      }

      if (cursor !== undefined) {
        let classToAdd;

        if (cursor === Cursor.Wand) {
          classToAdd = styles.wandCursor;
        } else if (cursor === Cursor.Pointer) {
          classToAdd = styles.pointerCursor;
        }
        composedClass = [composedClass, classToAdd].join(' ');
      }

      setComposedClass(composedClass);
    }, [
      className,
      glow,
      hovered,
      effect,
      setComposedClass,
      styles,
      themed,
      cursor
    ]);

    const handleClick = (event: any) => {
      // Only care about left click
      if (event.button !== 0) {
        return;
      }

      if (link) {
        window.open(link, '_blank');
        return;
      }

      if (onClick) {
        onClick(event);
      }
    };

    const changeHover = (hovered: boolean) => () => {
      setHovered(hovered);
    };

    const component = Svg ? (
      <Svg
        className={composedClass}
        onMouseEnter={changeHover(true)}
        onMouseLeave={changeHover(false)}
        onMouseDown={handleClick}
      >
        {ariaLabel}
      </Svg>
    ) : (
      <img alt={ariaLabel} className={composedClass} src={src} />
    );

    if (tooltip) {
      let style;
      switch (tooltipStyle) {
        case TooltipStyle.Zoom: {
          style = Zoom;
          break;
        }
        default: {
          style = Fade;
          break;
        }
      }

      let position: any;
      switch (tooltipPosition) {
        case TooltipPosition.Left: {
          position = 'left';
          break;
        }
        case TooltipPosition.Top: {
          position = 'top';
          break;
        }
        case TooltipPosition.Right: {
          position = 'right';
          break;
        }
        default: {
          position = 'bottom';
          break;
        }
      }

      let tooltipClasses;
      let useStyles;

      useStyles = makeStyles({
        tooltip: {
          background: tooltipBackground ?? theme.tooltipBackground,
          color: theme.onBackground
        },
        arrow: {
          color: tooltipBackground ?? theme.tooltipBackground
        }
      });
      tooltipClasses = useStyles();

      return (
        <Tooltip
          aria-label={ariaLabel}
          arrow
          classes={tooltipClasses}
          placement={position}
          title={tooltip}
          TransitionComponent={style}
          TransitionProps={{ timeout: TOOLTIP_DELAY }}
          children={component}
        />
      );
    }

    return component;
  }
);

ImageRenderer.displayName = 'ImageRenderer';
