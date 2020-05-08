import * as React from 'react';
import { IExperienceCardRendererProps } from './experience-interface';
import { Image } from 'components/image';
import { techLogo } from 'utils/utils';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const ExperienceCardRenderer: React.FC<IExperienceCardRendererProps> = ({
  experience
}) => {
  const theme: any = useTheme();
  const styles = experienceStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Grid container className={styles.experienceCardContainer}>
      <Grid item xs={4} className={styles.logoSection}>
        <Image
          ariaLabel={formatMessage({ id: `experience.${experience.name}Logo` })}
          src={experience.logo instanceof Object ? undefined : experience.logo}
          Svg={experience.logo instanceof Object ? experience.logo : undefined}
          className={styles.experienceLogo}
        />
      </Grid>
      <Grid item xs={8} className={styles.titleSection}>
        <Box>
          <Typography component='h4' variant='h4'>
            <Box>{`${experience.position}`}</Box>
          </Typography>
          <Typography component='h5' variant='h5'>
            <Box>{`@ ${experience.displayName}`}</Box>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} className={styles.middleSection}>
        <Box className={styles.description}>
          {experience.description.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} className={styles.bottomSection}>
        {experience.tech.map((tech, index) => {
          const logo = techLogo(tech.name, theme.type);
          const src = typeof logo === 'string' ? logo : undefined;
          const svg = typeof logo === 'string' ? null : logo;

          return (
            <Image
              ariaLabel={tech.displayName}
              className={styles.techLogo}
              key={index}
              src={src}
              Svg={svg}
              tooltip={tech.displayName}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
