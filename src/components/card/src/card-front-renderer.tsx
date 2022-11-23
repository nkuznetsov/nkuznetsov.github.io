import React, { memo, useCallback } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { Cursor, Image } from 'components/image';
import { getExperienceLogo, getTechLogo } from 'utils/utils';
import { ICardSideRendererProps } from './card-interface';
import { ReactComponent as CompanyLinkImg } from './style/company-link.svg';
import { Theme } from 'models';
import { useIntl } from 'react-intl';
import cardStyle from './style/card-style';
import {
  ImageEffect,
  TooltipStyle
} from 'components/image/src/image-interface';

export const CardFrontRenderer: React.FC<ICardSideRendererProps> = memo(
  ({ experience, cardContainerStyle, onFlip, flipImage }) => {
    const theme = useTheme() as Theme;
    const styles = cardStyle(theme);
    const { formatMessage } = useIntl();

    const translatedDisplayName = formatMessage({ id: experience.displayName });
    const workLinkText = `${formatMessage({
      id: 'experience.workLinkTooltip'
    })} ${translatedDisplayName}`;
    const translatedPosition = formatMessage({ id: experience.position });
    const logo = getExperienceLogo(experience.name);

    const flipImgFrontText = formatMessage({
      id: 'experience.flipImgFrontText'
    });

    const flip = useCallback(
      (e: any) => {
        e.preventDefault();
        experience?.details?.images && onFlip && onFlip(true);
      },
      [onFlip, experience]
    );

    return (
      <Grid container className={cardContainerStyle}>
        <Grid container item xs={12} className={styles.topSection}>
          <Grid item className={styles.logoSection}>
            <Image
              alt={formatMessage({
                id: `experience.${experience.name}Logo`
              })}
              src={logo instanceof Object ? undefined : logo}
              Svg={logo instanceof Object ? logo : undefined}
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
              {translatedPosition}
            </Typography>
            <Typography className={styles.positionSmallFont} variant='body2'>
              {translatedPosition}
            </Typography>

            <Box className={styles.workLinkContainer}>
              <Typography
                className={styles.displayNameLargeFont}
                variant='h5'
              >{`@ ${translatedDisplayName}`}</Typography>
              <Typography
                className={styles.displayNameSmallFont}
                variant='body2'
              >{`@ ${translatedDisplayName}`}</Typography>

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
          {experience.descriptions.map((description, index) => {
            const translatedDescription = formatMessage({ id: description });
            return (
              <Box key={index} className={styles.description}>
                <Typography
                  className={styles.descriptionLargeFont}
                  variant='h6'
                >
                  {translatedDescription}
                </Typography>
                <Typography
                  className={styles.descriptionSmallFont}
                  variant='body2'
                >
                  {translatedDescription}
                </Typography>
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={12} className={styles.bottomSection}>
          <Grid item>
            {experience.techValues.map((tech, index) => {
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
