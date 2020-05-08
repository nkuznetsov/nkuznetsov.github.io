import React from 'react';
import { ExperienceRenderer } from './experience-renderer';
import { ReactComponent as MicrosoftLogo } from './style/microsoftLogo.svg';
import { ReactComponent as RbcLogo } from './style/rbcLogo.svg';
import { Tech } from 'utils/utils-interface';
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
      description: [formatMessage({ id: 'experience.microsoftDescription' })],
      logo: MicrosoftLogo,
      tech: [
        Tech.React,
        Tech.TypeScript,
        Tech.Angular,
        Tech.Es6,
        Tech.GraphQL,
        Tech.Apollo,
        Tech.Figma,
        Tech.Yarn,
        Tech.VsCode
      ]
    },
    {
      name: 'billmo',
      displayName: formatMessage({ id: 'experience.billmo' }),
      position: formatMessage({ id: 'experience.billmoPosition' }),
      description: [
        formatMessage({ id: 'experience.billmoDescription1' }),
        formatMessage({ id: 'experience.billmoDescription2' }),
        formatMessage({ id: 'experience.billmoDescription3' })
      ],
      logo: billmoLogo,
      tech: [
        Tech.React,
        Tech.Es6,
        Tech.Redux,
        Tech.Node,
        Tech.MongoDb,
        Tech.TypeScript,
        Tech.Heroku,
        Tech.VsCode,
        Tech.CSharp,
        Tech.Xamarin,
        Tech.Aws,
        Tech.Atlassian,
        Tech.Braze,
        Tech.Firebase,
        Tech.TeamCity,
        Tech.VisualStudio,
        Tech.Android,
        Tech.IOs
      ]
    },
    {
      name: 'storeforce',
      displayName: formatMessage({ id: 'experience.storeforce' }),
      position: formatMessage({ id: 'experience.storeforcePosition' }),
      description: [
        formatMessage({ id: 'experience.storeforceDescription1' }),
        formatMessage({ id: 'experience.storeforceDescription2' }),
        formatMessage({ id: 'experience.storeforceDescription3' }),
        formatMessage({ id: 'experience.storeforceDescription4' }),
        formatMessage({ id: 'experience.storeforceDescription5' })
      ],
      logo: storeforceLogo,
      tech: [
        Tech.TypeScript,
        Tech.JQuery,
        Tech.Html5,
        Tech.Css3,
        Tech.Xamarin,
        Tech.CSharp,
        Tech.DotNetCore,
        Tech.VisualStudio,
        Tech.Sql,
        Tech.MySql,
        Tech.Java,
        Tech.Android,
        Tech.IOs
      ]
    },
    {
      name: 'rbc',
      displayName: formatMessage({ id: 'experience.rbc' }),
      position: formatMessage({ id: 'experience.rbcPosition' }),
      description: [
        formatMessage({ id: 'experience.rbcDescription1' }),
        formatMessage({ id: 'experience.rbcDescription2' }),
        formatMessage({ id: 'experience.rbcDescription3' })
      ],
      logo: RbcLogo,
      tech: [Tech.JavaScript, Tech.CSharp, Tech.VisualStudio, Tech.Sql]
    }
  ];
};
