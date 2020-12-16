import React, { memo, useCallback, useEffect, useState } from 'react';
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

export const ImageRenderer: React.FC<IImageProps> = memo(
  ({
    alt,
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
    tooltipStyle,
    index
  }) => {
    const [hovered, setHovered] = useState(false);
    const [composedClass, setComposedClass] = useState<string | undefined>('');

    const theme: any = useTheme();
    const styles = imageStyle(theme);

    useEffect(() => {
      let composedClass = themed
        ? [className, styles.themed].join(' ')
        : className;

      switch (effect) {
        case ImageEffect.PopOutOnHover: {
          composedClass = [
            composedClass,
            hovered ? styles.popOut : styles.popIn,
            styles.hoverTransition
          ].join(' ');
          break;
        }
        case ImageEffect.PopOutOnHoverSmall: {
          composedClass = [
            composedClass,
            hovered ? styles.popOutSmall : styles.popIn,
            styles.hoverTransitionSmall
          ].join(' ');
          break;
        }
        case ImageEffect.Rotate360OnHover: {
          let classToAdd;

          if (hovered) {
            classToAdd = glow
              ? styles.rotateClockwiseAndGlow
              : styles.rotateClockwise;
          } else {
            classToAdd = styles.resetImage;
          }

          composedClass = [composedClass, classToAdd].join(' ');
          break;
        }
        case ImageEffect.ShakeOnHover: {
          composedClass = [composedClass, hovered && styles.shake].join(' ');
          break;
        }
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
    }, [className, glow, hovered, effect, styles, themed, cursor]);

    const handleClick = useCallback(
      (event: any) => {
        if (!onClick && !link) {
          return;
        }

        event.preventDefault();

        // Only care about left click
        if (event.button !== 0) {
          return;
        }

        if (link) {
          window.open(link, '_blank');
          return;
        }

        if (onClick) {
          onClick(event, index);
        }
      },
      [index, link, onClick]
    );

    const changeHover = useCallback(
      (hovered: boolean) => () => {
        setHovered(hovered);
        console.log(hovered);
      },
      []
    );

    const component = Svg ? (
      <Svg
        className={composedClass}
        onMouseEnter={changeHover(true)}
        onMouseLeave={changeHover(false)}
        onMouseDown={handleClick}
      >
        {alt}
      </Svg>
    ) : (
      // div wrapper is used to avoid weird mouse enter/leave behavior
      // these are fired multiple times while hovered
      <div
        onMouseEnter={changeHover(true)}
        onMouseLeave={changeHover(false)}
        onMouseDown={handleClick}
      >
        <img alt={alt} className={composedClass} src={src} />
      </div>
    );

    if (tooltip) {
      const style = getStyleFromTooltipStyle(tooltipStyle);
      const position = getPositionFromTooltipPosition(tooltipPosition);

      const useStyles = makeStyles({
        tooltip: {
          background: tooltipBackground ?? theme.tooltipBackground,
          color: theme.onBackground
        },
        arrow: {
          color: tooltipBackground ?? theme.tooltipBackground
        }
      });
      const tooltipClasses = useStyles();

      return (
        <Tooltip
          aria-label={alt}
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

const getStyleFromTooltipStyle = (tooltipStyle: TooltipStyle | undefined) => {
  switch (tooltipStyle) {
    case TooltipStyle.Zoom: {
      return Zoom;
    }
    default: {
      return Fade;
    }
  }
};

const getPositionFromTooltipPosition = (
  tooltipPosition: TooltipPosition | undefined
) => {
  switch (tooltipPosition) {
    case TooltipPosition.Left: {
      return 'left';
    }
    case TooltipPosition.Top: {
      return 'top';
    }
    case TooltipPosition.Right: {
      return 'right';
    }
    default: {
      return 'bottom';
    }
  }
};

ImageRenderer.displayName = 'ImageRenderer';
