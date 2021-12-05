import React, { memo } from 'react';
import { Card } from 'components/card';
import { IExperienceRendererProps } from './experience-interface';
import { Scroll } from 'components/scroll';
import { Theme } from 'models';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';

export const ExperienceRenderer: React.FC<IExperienceRendererProps> = memo(
  ({ experiences }) => {
    const theme = useTheme() as Theme;
    const styles = experienceStyle(theme);

    const composedClass = [styles.experience, 'experience-page'].join(' ');

    return (
      <Box className={composedClass}>
        <Box className={styles.main}>
          <Box className={styles.experiencesContainer}>
            {experiences.map((exp, index) => (
              <Card key={index} experience={exp} />
            ))}
          </Box>
        </Box>

        <Box className={styles.toTopContainer}>
          <Scroll />
        </Box>
      </Box>
    );
  }
);

ExperienceRenderer.displayName = 'ExperienceRenderer';
