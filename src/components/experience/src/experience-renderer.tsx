import React from 'react';
import { Card } from 'components/card';
import { IExperienceRendererProps } from './experience-interface';
import { NoDataToDisplay } from 'components/no-data-to-display';
import { Scroll } from 'components/scroll';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';

export const ExperienceRenderer: React.FC<IExperienceRendererProps> = ({
  experiences
}) => {
  const theme = useTheme();
  const styles = experienceStyle(theme);

  const composedClass = [styles.experience, 'experience-page'].join(' ');

  const areExperiencesVisible = experiences?.length > 0;

  return (
    <Box className={composedClass}>
      <Box className={styles.main}>
        {areExperiencesVisible ? (
          <Box className={styles.experiencesContainer}>
            {experiences.map((exp, index) => (
              <Card key={index} experience={exp} />
            ))}
          </Box>
        ) : (
          <NoDataToDisplay />
        )}
      </Box>

      <Box className={styles.toTopContainer}>
        <Scroll />
      </Box>
    </Box>
  );
};

ExperienceRenderer.displayName = 'ExperienceRenderer';
