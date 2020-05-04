import * as React from 'react';
import { IExperienceCardRendererProps } from './experience-interface';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';
import Grid from '@material-ui/core/Grid';
import { Image } from '../../image';
import Typography from '@material-ui/core/Typography';
import { techLogo } from '../../../utils/utils';
import { Tech } from '../../../utils/utils-interface';

export const ExperienceCardRenderer: React.FC<IExperienceCardRendererProps> = ({
  experience
}) => {
  const theme = useTheme();
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
        <Box>{experience.description}</Box>
      </Grid>
      <Grid item xs={12} className={styles.bottomSection}>
        {experience.tech.map(tech => (
          <Image
            ariaLabel={Tech[tech]}
            className={styles.techLogo}
            Svg={techLogo(tech)}
            tooltip={Tech[tech]}
          />
        ))}
      </Grid>
    </Grid>
  );
};
