import * as React from 'react';
import { Cursor, Image } from 'components/image';
import { IExperienceCardRendererProps } from './experience-interface';
import { ReactComponent as CompanyLinkImg } from './style/companyLink.svg';
import { ReactComponent as WorkLinkImg } from './style/workLink.svg';
import { techLogo } from 'utils/utils';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  TooltipPosition,
  TooltipStyle
} from 'components/image/src/image-interface';

export const ExperienceCardRenderer: React.FC<IExperienceCardRendererProps> = ({
  experience
}) => {
  const theme: any = useTheme();
  const styles = experienceStyle(theme);
  const { formatMessage } = useIntl();

  const companyLinkText = `${formatMessage({
    id: 'experience.visitCompany'
  })} ${experience.displayName}`;

  let middleSectionStyle;
  if (experience.descriptions.length === 1) {
    middleSectionStyle = styles.middleSectionWithOneLine;
  } else {
    middleSectionStyle = experience.workUrl
      ? styles.middleSectionWithWorkUrl
      : styles.middleSectionWithoutWorkUrl;
  }

  return (
    <Grid container className={styles.experienceCardContainer}>
      <Grid container item xs={12} className={styles.topSection}>
        <Grid item xs={4} className={styles.logoSection}>
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
        <Grid item xs={8} className={styles.titleSection}>
          <Typography variant='h4'>
            <Box>{experience.position}</Box>
          </Typography>

          <Typography variant='h5'>{`@ ${experience.displayName}`}</Typography>

          <Box className={styles.periodContainer}>
            <Typography variant='h6'>{experience.period}</Typography>
            <Image
              ariaLabel={companyLinkText}
              className={styles.companyLinkImg}
              cursor={Cursor.Pointer}
              link={experience.companyUrl}
              Svg={CompanyLinkImg}
              tooltip={companyLinkText}
              tooltipStyle={TooltipStyle.Zoom}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} className={middleSectionStyle}>
        {experience.descriptions.map((description, index) => (
          <Typography variant='h6' key={index} className={styles.description}>
            {description}
          </Typography>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        className={
          experience.workUrl
            ? styles.bottomSectionWithWorkUrl
            : styles.bottomSectionWithoutWorkUrl
        }
      >
        <Grid item>
          {experience.workUrl && (
            <Image
              ariaLabel={experience.displayName}
              className={styles.workLinkImg}
              cursor={Cursor.Pointer}
              Svg={WorkLinkImg}
              tooltip={formatMessage({ id: 'experience.workLinkTooltip' })}
              tooltipPosition={TooltipPosition.Right}
              tooltipStyle={TooltipStyle.Zoom}
            />
          )}
        </Grid>

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

ExperienceCardRenderer.displayName = 'ExperienceCardRenderer';
