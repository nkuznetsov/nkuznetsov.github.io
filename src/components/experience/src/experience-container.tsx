import React from 'react';
import { ExperienceRenderer } from './experience-renderer';
import { ReactComponent as MicrosoftLogo } from './style/microsoftLogo.svg';
import { ReactComponent as RbcLogo } from './style/rbcLogo.svg';
import { Tech } from '../../../utils/utils-interface';
import { useIntl } from 'react-intl';
import billmoLogo from './style/billmoLogo.png';
import storeforceLogo from './style/storeforceLogo.jpg';

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
      position: formatMessage({ id: 'experience.microsoftPosition' }),
      description: formatMessage({ id: 'experience.microsoftDescription' }),
      logo: MicrosoftLogo,
      tech: [
        Tech.React
        // Tech.TypeScript,
        // Tech.Angular,
        // Tech.FluentUI,
        // Tech.GraphQL,
        // Tech.Apollo
      ]
    },
    {
      name: 'billmo',
      displayName: formatMessage({ id: 'experience.billmo' }),
      position: formatMessage({ id: 'experience.billmoPosition' }),
      description: formatMessage({ id: 'experience.billmoDescription' }),
      logo: billmoLogo,
      tech: [
        Tech.React,
        Tech.Redux,
        Tech.Node,
        Tech.MongoDb,
        Tech.TypeScript,
        Tech.Es6,
        Tech.Xamarin,
        Tech.Aws,
        Tech.Atlassian,
        Tech.TeamCity,
        Tech.Heroku,
        Tech.Braze,
        Tech.Firebase
      ]
    },
    {
      name: 'storeforce',
      displayName: formatMessage({ id: 'experience.storeforce' }),
      position: formatMessage({ id: 'experience.storeforcePosition' }),
      description: formatMessage({ id: 'experience.storeforceDescription' }),
      logo: storeforceLogo,
      tech: [
        // Tech.Knockout,
        // Tech.TypeScript,
        // Tech.Html5,
        // Tech.Css3,
        // Tech.Jquery,
        // Tech.JqueryUi,
        // Tech.Xamarin,
        // Tech.CSharp,
        // Tech.DotNet,
        // Tech.Silverlight,
        // Tech.Java,
        // Tech.Eclipse,
        // Tech.Wcf,
        // Tech.Ssms,
        // Tech.SqlServer,
        // Tech.TSql,
        // Tech.Tfs
      ]
    },
    {
      name: 'rbc',
      displayName: formatMessage({ id: 'experience.rbc' }),
      position: formatMessage({ id: 'experience.rbcPosition' }),
      description: formatMessage({ id: 'experience.rbcDescription' }),
      logo: RbcLogo,
      tech: [
        // Tech.CSharp,
        // Tech.JavaScript,
        // Tech.DotNet,
        // Tech.SqlServer,
        // Tech.Hpqc,
        // Tech.VisualStudio,
        // Tech.Uml
      ]
    }
  ];
};
