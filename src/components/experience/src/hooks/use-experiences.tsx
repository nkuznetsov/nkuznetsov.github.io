import { ReactComponent as BillMoLogo } from './experience-logos/billmo-logo.svg';
import { ReactComponent as MicrosoftLogo } from './experience-logos/microsoft-logo.svg';
import { ReactComponent as RbcLogo } from './experience-logos/rbc-logo.svg';
import { ReactComponent as StoreForceLogo } from './experience-logos/storeforce-logo.svg';
import { Tech } from 'utils/utils-interface';
import { useIntl } from 'react-intl';
import {
  FlipEffect,
  FlipIconStyle,
  IExperience
} from '../experience-interface';

import sfd0 from './sf-images/download/0.png';
import sfd1 from './sf-images/download/1.png';
import sfd2 from './sf-images/download/2.png';
import sfd3 from './sf-images/download/3.png';
import sfd4 from './sf-images/download/4.png';
import sfd5 from './sf-images/download/5.png';
import sfd6 from './sf-images/download/6.png';

import sft0 from './sf-images/thumbnail/0.png';
import sft1 from './sf-images/thumbnail/1.png';
import sft2 from './sf-images/thumbnail/2.png';
import sft3 from './sf-images/thumbnail/3.png';
import sft4 from './sf-images/thumbnail/4.png';
import sft5 from './sf-images/thumbnail/5.png';
import sft6 from './sf-images/thumbnail/6.png';

export const useExperiences = () => {
  const { formatMessage } = useIntl();
  const experiences = getExperiences(formatMessage);

  return { experiences };
};

/** Order is increasing from left to right, based on project's index */
const getExperiences = (formatMessage: any): IExperience[] => {
  return [
    {
      name: 'microsoft',
      displayName: formatMessage({ id: 'experience.microsoft' }),
      position: formatMessage({ id: 'experience.microsoftPosition' }),
      descriptions: [formatMessage({ id: 'experience.microsoftDescription' })],
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
      ],
      workUrl:
        'https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software',
      period: 'Dec 2019 - now'
    },
    {
      name: 'billmo',
      displayName: formatMessage({ id: 'experience.billmo' }),
      position: formatMessage({ id: 'experience.billmoPosition' }),
      descriptions: [
        formatMessage({ id: 'experience.billmoDescription1' }),
        formatMessage({ id: 'experience.billmoDescription2' }),
        formatMessage({ id: 'experience.billmoDescription3' })
      ],
      logo: BillMoLogo,
      tech: [
        Tech.Redux,
        Tech.Es6,
        Tech.Node,
        Tech.MongoDb,
        Tech.Heroku,
        Tech.Xamarin,
        Tech.Aws,
        Tech.Braze,
        Tech.Firebase,
        Tech.TeamCity
      ],
      workUrl:
        'https://apps.apple.com/mx/app/billmo-money-transfer-wallet/id1072459204?l=en',
      period: 'Aug 2015 - Dec 2019'
    },
    {
      name: 'storeforce',
      displayName: formatMessage({ id: 'experience.storeforce' }),
      position: formatMessage({ id: 'experience.storeforcePosition' }),
      descriptions: [
        formatMessage({ id: 'experience.storeforceDescription1' }),
        formatMessage({ id: 'experience.storeforceDescription2' }),
        formatMessage({ id: 'experience.storeforceDescription3' })
      ],
      logo: StoreForceLogo,
      tech: [
        Tech.TypeScript,
        Tech.Html5,
        Tech.Css3,
        Tech.Xamarin,
        Tech.CSharp,
        Tech.DotNetCore,
        Tech.VisualStudio,
        Tech.Sql,
        Tech.Android,
        Tech.IOs
      ],
      workUrl:
        'https://play.google.com/store/apps/details?id=com.storeforce.tablet',
      period: 'Jun 2013 - Aug 2015',
      details: {
        flipEffect: FlipEffect.FlipHorizontal,
        flipIconBackStyle: FlipIconStyle.Light,
        images: [
          {
            caption: formatMessage({
              id: 'experience.storeforceHierarchySelection'
            }),
            alt: formatMessage({
              id: 'experience.storeforceHierarchySelection'
            }),
            source: {
              regular: sfd0,
              thumbnail: sft0
            }
          },
          {
            caption: formatMessage({
              id: 'experience.storeforceReporting'
            }),
            alt: formatMessage({ id: 'experience.storeforceReporting' }),
            source: {
              regular: sfd1,
              thumbnail: sft1
            }
          },
          {
            caption: formatMessage({ id: 'experience.storeforceHierarchy' }),
            alt: formatMessage({ id: 'experience.storeforceHierarchy' }),
            source: {
              regular: sfd2,
              thumbnail: sft2
            }
          },
          {
            caption: formatMessage({
              id: 'experience.storeforceAdvancedDashboard'
            }),
            alt: formatMessage({
              id: 'experience.storeforceAdvancedDashboard'
            }),

            source: {
              regular: sfd3,
              thumbnail: sft3
            }
          },
          {
            caption: formatMessage({ id: 'experience.storeforceDashboard' }),
            alt: formatMessage({ id: 'experience.storeforceDashboard' }),
            source: {
              regular: sfd4,
              thumbnail: sft4
            }
          },
          {
            caption: formatMessage({ id: 'experience.storeforceStatistics' }),
            alt: formatMessage({ id: 'experience.storeforceStatistics' }),
            source: {
              regular: sfd5,
              thumbnail: sft5
            }
          },
          {
            caption: formatMessage({ id: 'experience.storeforceScheduling' }),
            alt: formatMessage({ id: 'experience.storeforceScheduling' }),
            source: {
              regular: sfd6,
              thumbnail: sft6
            }
          }
        ]
      }
    },
    {
      name: 'rbc',
      displayName: formatMessage({ id: 'experience.rbc' }),
      position: formatMessage({ id: 'experience.rbcPosition' }),
      descriptions: [
        formatMessage({ id: 'experience.rbcDescription1' }),
        formatMessage({ id: 'experience.rbcDescription2' }),
        formatMessage({ id: 'experience.rbcDescription3' })
      ],
      logo: RbcLogo,
      tech: [Tech.JavaScript, Tech.CSharp, Tech.VisualStudio, Tech.Sql],
      period: 'May - Aug 2012'
    }
  ];
};
