import React from 'react';
import { Cursor, Image } from 'components/image';
import { ReactComponent as CompanyLinkImg } from './style/companyLink.svg';
import { techLogo } from 'utils/utils';
import { TooltipStyle } from 'components/image/src/image-interface';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ICardFrontRendererProps } from './experience-interface';

export const CardFrontRenderer: React.FC<ICardFrontRendererProps> = ({
  experience
}) => {
  const theme: any = useTheme();
  const styles = experienceStyle(theme);
  const { formatMessage } = useIntl();

  const workLinkText = `${formatMessage({
    id: 'experience.workLinkTooltip'
  })} ${experience.displayName}`;

  return (
    <Grid container className={styles.experienceCardContainer}>
      <Grid container item xs={12} className={styles.topSection}>
        <Grid item className={styles.logoSection}>
          <Image
            ariaLabel={formatMessage({
              id: `experience.${experience.name}Logo`
            })}
            src={
              experience.logo instanceof Object ? undefined : experience.logo
            }
            Svg={
              experience.logo instanceof Object ? experience.logo : undefined
            }
            className={styles.experienceLogo}
          />
        </Grid>
        <Grid item className={styles.titleSection}>
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
                ariaLabel={workLinkText}
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

          {experience.workUrl && (
            <Image
              ariaLabel={workLinkText}
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
          <Typography variant='h6' key={index} className={styles.description}>
            {description}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} className={styles.bottomSection}>
        <Grid item>
          {experience.tech.map((tech, index) => {
            const logo = techLogo(tech.name, theme.type);
            const src = typeof logo === 'string' ? logo : undefined;
            const svg = typeof logo === 'string' ? null : logo;

            return (
              <Image
                ariaLabel={tech.displayName}
                className={styles.techLogo}
                key={index}
                rotate360OnHover
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
};

CardFrontRenderer.displayName = 'CardFrontRenderer';
