import * as React from 'react';
import { GET_EXPERIENCES } from '../../data/queries';
import { IExperience } from '../experience-interface';
import { useQuery } from 'react-apollo';

interface IUseExperiencesResult {
  experiences: IExperience[];
}

export const useExperiences = (): IUseExperiencesResult => {
  const [experiencesList, setExperiencesList] =
    React.useState<IUseExperiencesResult>({
      experiences: []
    });

  const { data, loading, error } = useQuery(GET_EXPERIENCES, {
    fetchPolicy: 'no-cache'
  });

  // Loading or error
  React.useEffect(() => {
    if (loading) {
      console.log('Loading experiences...');
    }

    if (error) {
      console.log(
        `Error running query [name=${error.name}][message=${error.message}]`
      );
    }
  }, [loading, error]);

  // Query data
  React.useEffect(() => {
    if (!data?.experiences) {
      return;
    }

    setExperiencesList({ experiences: data.experiences });
  }, [data]);

  return experiencesList;
};
