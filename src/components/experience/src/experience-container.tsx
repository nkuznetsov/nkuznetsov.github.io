import React, { memo } from 'react';
import { ExperienceRenderer } from './experience-renderer';
import { Page, Seo } from 'components/seo';
import { useExperiences } from './hooks/use-experiences';

export const ExperienceContainer: React.FC = memo(() => {
  const { experiences } = useExperiences();

  if (!experiences?.length) {
    const Empty = () => null;
    return <Empty />;
  }

  return (
    <>
      <Seo page={Page.Experience} />
      <ExperienceRenderer experiences={experiences} />
    </>
  );
});

ExperienceContainer.displayName = 'ExperienceContainer';
