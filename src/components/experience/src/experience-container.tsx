import React from 'react';
import { ExperienceRenderer } from './experience-renderer';
import { useIntl } from 'react-intl';

export const ExperienceContainer: React.FC = () => {
  const { formatMessage } = useIntl();
  const experiences = getExperiences(formatMessage);

  return <ExperienceRenderer experiences={experiences} />;
};

/**
 * Order is increasing from left to right, based on project's index
 */
const getExperiences = (formatMessage: any) => {
  return [
    {
      name: 'microsoft',
      displayName: formatMessage({ id: 'experience.microsoft' }),
      description: formatMessage({ id: 'experience.microsoftDescription' })
    },
    {
      name: 'billmo',
      displayName: formatMessage({ id: 'experience.billmo' }),
      description: formatMessage({ id: 'experience.billmoDescription' })
    },
    {
      name: 'storeforce',
      displayName: formatMessage({ id: 'experience.storeforce' }),
      description: formatMessage({ id: 'experience.storeforceDescription' })
    },
    {
      name: 'rbc',
      displayName: formatMessage({ id: 'experience.rbc' }),
      description: formatMessage({ id: 'experience.rbcDescription' })
    }
  ];
};
