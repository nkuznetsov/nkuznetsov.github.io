import React, { memo, useCallback } from 'react';
import { Cursor, Image } from 'components/image';
import { getTechLogo } from 'utils/utils';
import { ICardSideRendererProps } from './card-interface';
import { ReactComponent as CompanyLinkImg } from './style/company-link.svg';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import cardStyle from './style/card-style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  ImageEffect,
  TooltipStyle
} from 'components/image/src/image-interface';

export const CardFrontRenderer: React.FC<ICardSideRendererProps> = memo(
  ({ experience, cardContainerStyle, onFlip, flipImage }) => {
    const theme: any = useTheme();
    const styles = cardStyle(theme);
    const { formatMessage } = useIntl();

    const workLinkText = `${formatMessage({
      id: 'experience.workLinkTooltip'
    })} ${experience.displayName}`;

    const flipImgFrontText = formatMessage({
      id: 'experience.flipImgFrontText'
    });

    const flip = useCallback(
      (e: any) => {
        e.preventDefault();
        onFlip && onFlip(true);
      },
      [onFlip]
    );

    return (
      <Grid container className={cardContainerStyle}>
        <Grid container item xs={12} className={styles.topSection}>
          <Grid item className={styles.logoSection}>
            <Image
              alt={formatMessage({
                id: `experience.${experience.name}Logo`
              })}
              src={
                experience.logo instanceof Object ? undefined : experience.logo
              }
              Svg={
                experience.logo instanceof Object ? experience.logo : undefined
              }
              className={styles.cardLogo}
            />
          </Grid>
          <Grid item className={styles.titleSection}>
            {onFlip && (
              <Box className={styles.flipImgContainer}>
                <Image
                  alt={flipImgFrontText}
                  className={styles.flipImg}
                  cursor={Cursor.Pointer}
                  Svg={flipImage}
                  onClick={flip}
                />
              </Box>
            )}

            <Typography className={styles.positionLargeFont} variant='h4'>
              {experience.position}
            </Typography>
            <Typography className={styles.positionSmallFont} variant='body2'>
              {experience.position}
            </Typography>

            <Box className={styles.workLinkContainer}>
              <Typography
                className={styles.displayNameLargeFont}
                variant='h5'
              >{`@ ${experience.displayName}`}</Typography>
              <Typography
                className={styles.displayNameSmallFont}
                variant='body2'
              >{`@ ${experience.displayName}`}</Typography>

              {experience.workUrl && (
                <Image
                  alt={workLinkText}
                  className={styles.workLinkImgLarge}
                  cursor={Cursor.Pointer}
                  link={experience.workUrl}
                  Svg={CompanyLinkImg}
                  tooltip={workLinkText}
                  tooltipStyle={TooltipStyle.Zoom}
                />
              )}
            </Box>

            <Typography className={styles.periodLargeFont} variant='h6'>
              {experience.period}
            </Typography>
            <Typography className={styles.periodSmallFont} variant='body2'>
              {experience.period}
            </Typography>

            {/* This is displayed when screen width is very small */}
            {experience.workUrl && (
              <Image
                alt={workLinkText}
                className={styles.workLinkImgSmall}
                cursor={Cursor.Pointer}
                link={experience.workUrl}
                Svg={CompanyLinkImg}
                tooltip={workLinkText}
                tooltipStyle={TooltipStyle.Zoom}
              />
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} className={styles.middleSection}>
          {experience.descriptions.map((description, index) => (
            <Box key={index} className={styles.description}>
              <Typography className={styles.descriptionLargeFont} variant='h6'>
                {description}
              </Typography>
              <Typography
                className={styles.descriptionSmallFont}
                variant='body2'
              >
                {description}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} className={styles.bottomSection}>
          <Grid item>
            {experience.tech.map((tech, index) => {
              const logo = getTechLogo(tech.name, theme.type);
              const src = typeof logo === 'string' ? logo : undefined;
              const svg = typeof logo === 'string' ? null : logo;

              return (
                <Image
                  key={index}
                  alt={tech.displayName}
                  className={styles.techLogo}
                  effect={ImageEffect.Rotate360OnHover}
                  src={src}
                  Svg={svg}
                  tooltip={tech.displayName}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
);

CardFrontRenderer.displayName = 'CardFrontRenderer';
