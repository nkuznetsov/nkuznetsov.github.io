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

import bd0 from './billmo-images/download/0.png';
import bd1 from './billmo-images/download/1.png';
import bd2 from './billmo-images/download/2.png';
import bd3 from './billmo-images/download/3.png';
import bd4 from './billmo-images/download/4.png';
import bd5 from './billmo-images/download/5.png';
import bd6 from './billmo-images/download/6.png';
import bd7 from './billmo-images/download/7.png';
import bd8 from './billmo-images/download/8.png';
import bd9 from './billmo-images/download/9.png';
import bd10 from './billmo-images/download/10.png';
import bd11 from './billmo-images/download/11.png';
import bd12 from './billmo-images/download/12.png';
import bd13 from './billmo-images/download/13.png';
import bd14 from './billmo-images/download/14.png';
import bd15 from './billmo-images/download/15.png';
import bd16 from './billmo-images/download/16.png';
import bd17 from './billmo-images/download/17.png';
import bd18 from './billmo-images/download/18.png';
import bd19 from './billmo-images/download/19.png';
import bd20 from './billmo-images/download/20.png';
import bd21 from './billmo-images/download/21.png';
import bd22 from './billmo-images/download/22.png';
import bd23 from './billmo-images/download/23.png';

import bt0 from './billmo-images/thumbnail/0.png';
import bt1 from './billmo-images/thumbnail/1.png';
import bt2 from './billmo-images/thumbnail/2.png';
import bt3 from './billmo-images/thumbnail/3.png';
import bt4 from './billmo-images/thumbnail/4.png';
import bt5 from './billmo-images/thumbnail/5.png';
import bt6 from './billmo-images/thumbnail/6.png';
import bt7 from './billmo-images/thumbnail/7.png';
import bt8 from './billmo-images/thumbnail/8.png';
import bt9 from './billmo-images/thumbnail/9.png';
import bt10 from './billmo-images/thumbnail/10.png';
import bt11 from './billmo-images/thumbnail/11.png';
import bt12 from './billmo-images/thumbnail/12.png';
import bt13 from './billmo-images/thumbnail/13.png';
import bt14 from './billmo-images/thumbnail/14.png';
import bt15 from './billmo-images/thumbnail/15.png';
import bt16 from './billmo-images/thumbnail/16.png';
import bt17 from './billmo-images/thumbnail/17.png';
import bt18 from './billmo-images/thumbnail/18.png';
import bt19 from './billmo-images/thumbnail/19.png';
import bt20 from './billmo-images/thumbnail/20.png';
import bt21 from './billmo-images/thumbnail/21.png';
import bt22 from './billmo-images/thumbnail/22.png';
import bt23 from './billmo-images/thumbnail/23.png';

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
      period: 'Aug 2015 - Dec 2019',
      details: {
        flipEffect: FlipEffect.FlipVertical,
        flipIconBackStyle: FlipIconStyle.Dark,
        isDynamic: true,
        images: [
          {
            caption: formatMessage({
              id: 'experience.billmoWalletDashboard'
            }),
            alt: formatMessage({
              id: 'experience.billmoWalletDashboard'
            }),
            source: {
              regular: bd0,
              thumbnail: bt0
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoBillPaymentOptions'
            }),
            alt: formatMessage({
              id: 'experience.billmoBillPaymentOptions'
            }),
            source: {
              regular: bd1,
              thumbnail: bt1
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoSendMoneyCalculator'
            }),
            alt: formatMessage({
              id: 'experience.billmoSendMoneyCalculator'
            }),
            source: {
              regular: bd2,
              thumbnail: bt2
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoTransactionTypes'
            }),
            alt: formatMessage({
              id: 'experience.billmoTransactionTypes'
            }),
            source: {
              regular: bd3,
              thumbnail: bt3
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoBarcodeBillPay'
            }),
            alt: formatMessage({
              id: 'experience.billmoBarcodeBillPay'
            }),
            source: {
              regular: bd4,
              thumbnail: bt4
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoCountries'
            }),
            alt: formatMessage({
              id: 'experience.billmoCountries'
            }),
            source: {
              regular: bd5,
              thumbnail: bt5
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoOffers'
            }),
            alt: formatMessage({
              id: 'experience.billmoOffers'
            }),
            source: {
              regular: bd6,
              thumbnail: bt6
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoBarcodeScanner'
            }),
            alt: formatMessage({
              id: 'experience.billmoBarcodeScanner'
            }),
            source: {
              regular: bd7,
              thumbnail: bt7
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoDeliveryMethods'
            }),
            alt: formatMessage({
              id: 'experience.billmoDeliveryMethods'
            }),
            source: {
              regular: bd8,
              thumbnail: bt8
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoFundsControl'
            }),
            alt: formatMessage({
              id: 'experience.billmoFundsControl'
            }),
            source: {
              regular: bd9,
              thumbnail: bt9
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoServices'
            }),
            alt: formatMessage({
              id: 'experience.billmoServices'
            }),
            source: {
              regular: bd10,
              thumbnail: bt10
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoCashoutLocations'
            }),
            alt: formatMessage({
              id: 'experience.billmoCashoutLocations'
            }),
            source: {
              regular: bd11,
              thumbnail: bt11
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoAddBalanceLocations'
            }),
            alt: formatMessage({
              id: 'experience.billmoAddBalanceLocations'
            }),
            source: {
              regular: bd12,
              thumbnail: bt12
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoSendScreen'
            }),
            alt: formatMessage({
              id: 'experience.billmoSendScreen'
            }),
            source: {
              regular: bd13,
              thumbnail: bt13
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoPromo'
            }),
            alt: formatMessage({
              id: 'experience.billmoPromo'
            }),
            source: {
              regular: bd14,
              thumbnail: bt14
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoVirtualCard'
            }),
            alt: formatMessage({
              id: 'experience.billmoVirtualCard'
            }),
            source: {
              regular: bd15,
              thumbnail: bt15
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoRetailPayment'
            }),
            alt: formatMessage({
              id: 'experience.billmoRetailPayment'
            }),
            source: {
              regular: bd16,
              thumbnail: bt16
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoMenu'
            }),
            alt: formatMessage({
              id: 'experience.billmoMenu'
            }),
            source: {
              regular: bd17,
              thumbnail: bt17
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoVirtualCardPayment'
            }),
            alt: formatMessage({
              id: 'experience.billmoVirtualCardPayment'
            }),
            source: {
              regular: bd18,
              thumbnail: bt18
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoPaymentBarcode'
            }),
            alt: formatMessage({
              id: 'experience.billmoPaymentBarcode'
            }),
            source: {
              regular: bd19,
              thumbnail: bt19
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoDocumentsUpload'
            }),
            alt: formatMessage({
              id: 'experience.billmoDocumentsUpload'
            }),
            source: {
              regular: bd20,
              thumbnail: bt20
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoVirtualCardGuidance'
            }),
            alt: formatMessage({
              id: 'experience.billmoVirtualCardGuidance'
            }),
            source: {
              regular: bd21,
              thumbnail: bt21
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoSendToBank'
            }),
            alt: formatMessage({
              id: 'experience.billmoSendToBank'
            }),
            source: {
              regular: bd22,
              thumbnail: bt22
            }
          },
          {
            caption: formatMessage({
              id: 'experience.billmoUploadDriversLicense'
            }),
            alt: formatMessage({
              id: 'experience.billmoUploadDriversLicense'
            }),
            source: {
              regular: bd23,
              thumbnail: bt23
            }
          }
        ]
      }
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
