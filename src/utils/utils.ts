import { CardFlipDirection } from 'components/card-flip/src/card-flip-interface';
import { IImage } from 'components/gallery/src/gallery-interface';
import { Tech } from './utils-interface';
import { ThemeType } from 'models';
import { colors } from 'style/colors';
import {
  FlipEffect,
  FlipIconStyle
} from 'components/experience/src/experience-interface';

// Tech icons
import { ReactComponent as ReactDarkLogo } from './images/tech-icons/reactDark.svg';
import { ReactComponent as ReactLightLogo } from './images/tech-icons/reactLight.svg';
import { ReactComponent as ReduxDarkLogo } from './images/tech-icons/reduxDark.svg';
import { ReactComponent as ReduxLightLogo } from './images/tech-icons/reduxLight.svg';
import { ReactComponent as NodeLogo } from './images/tech-icons/node.svg';
import { ReactComponent as MongoDbLogo } from './images/tech-icons/mongodb.svg';
import { ReactComponent as TypeScriptLogo } from './images/tech-icons/typescript.svg';
import { ReactComponent as Es6Logo } from './images/tech-icons/es6.svg';
import { ReactComponent as XamarinLogo } from './images/tech-icons/xamarin.svg';
import { ReactComponent as AwsLogo } from './images/tech-icons/aws.svg';
import { ReactComponent as TeamCityLogo } from './images/tech-icons/teamcity.svg';
import { ReactComponent as HerokuLogo } from './images/tech-icons/heroku.svg';
import { ReactComponent as BrazeLogo } from './images/tech-icons/braze.svg';
import { ReactComponent as FirebaseLogo } from './images/tech-icons/firebase.svg';
import { ReactComponent as AngularLogo } from './images/tech-icons/angular.svg';
import { ReactComponent as GraphQlLogo } from './images/tech-icons/graphql.svg';
import { ReactComponent as ApolloLogo } from './images/tech-icons/apollo.svg';
import { ReactComponent as FigmaLogo } from './images/tech-icons/figma.svg';
import { ReactComponent as Html5Logo } from './images/tech-icons/html5.svg';
import { ReactComponent as Css3Logo } from './images/tech-icons/css3.svg';
import { ReactComponent as CSharpLogo } from './images/tech-icons/csharp.svg';
import { ReactComponent as SqlLightLogo } from './images/tech-icons/sqlLight.svg';
import { ReactComponent as SqlDarkLogo } from './images/tech-icons/sqlDark.svg';
import { ReactComponent as JavaScriptLogo } from './images/tech-icons/javascript.svg';
import { ReactComponent as DotNetCoreLogo } from './images/tech-icons/dotnetcore.svg';
import { ReactComponent as VsCodeLogo } from './images/tech-icons/vscode.svg';
import { ReactComponent as VisualStudioLogo } from './images/tech-icons/visualstudio.svg';
import { ReactComponent as AndroidLogo } from './images/tech-icons/android.svg';
import { ReactComponent as IOsLogo } from './images/tech-icons/ios.svg';
import { ReactComponent as YarnLogo } from './images/tech-icons/yarn.svg';

// Experience logos
import { ReactComponent as BillMoLogo } from './images/experience-logos/billmo-logo.svg';
import { ReactComponent as MicrosoftLogo } from './images/experience-logos/microsoft-logo.svg';
import { ReactComponent as RbcLogo } from './images/experience-logos/rbc-logo.svg';
import { ReactComponent as StoreForceLogo } from './images/experience-logos/storeforce-logo.svg';

// Flip icons
import { ReactComponent as DarkFlipHorizontalImg } from './images/flip-icons/dark-flip-horizontal.svg';
import { ReactComponent as DarkFlipVerticalImg } from './images/flip-icons/dark-flip-vertical.svg';
import { ReactComponent as LightFlipHorizontalImg } from './images/flip-icons/light-flip-horizontal.svg';
import { ReactComponent as LightFlipVerticalImg } from './images/flip-icons/light-flip-vertical.svg';

// Experience images
import sfd0 from './images/experiences/sf/download/0.png';
import sfd1 from './images/experiences/sf/download/1.png';
import sfd2 from './images/experiences/sf/download/2.png';
import sfd3 from './images/experiences/sf/download/3.png';
import sfd4 from './images/experiences/sf/download/4.png';
import sfd5 from './images/experiences/sf/download/5.png';
import sfd6 from './images/experiences/sf/download/6.png';

import sft0 from './images/experiences/sf/thumbnail/0.png';
import sft1 from './images/experiences/sf/thumbnail/1.png';
import sft2 from './images/experiences/sf/thumbnail/2.png';
import sft3 from './images/experiences/sf/thumbnail/3.png';
import sft4 from './images/experiences/sf/thumbnail/4.png';
import sft5 from './images/experiences/sf/thumbnail/5.png';
import sft6 from './images/experiences/sf/thumbnail/6.png';

import bd0 from './images/experiences/billmo/download/0.png';
import bd1 from './images/experiences/billmo/download/1.png';
import bd2 from './images/experiences/billmo/download/2.png';
import bd3 from './images/experiences/billmo/download/3.png';
import bd4 from './images/experiences/billmo/download/4.png';
import bd5 from './images/experiences/billmo/download/5.png';
import bd6 from './images/experiences/billmo/download/6.png';
import bd7 from './images/experiences/billmo/download/7.png';
import bd8 from './images/experiences/billmo/download/8.png';
import bd9 from './images/experiences/billmo/download/9.png';
import bd10 from './images/experiences/billmo/download/10.png';
import bd11 from './images/experiences/billmo/download/11.png';
import bd12 from './images/experiences/billmo/download/12.png';
import bd13 from './images/experiences/billmo/download/13.png';
import bd14 from './images/experiences/billmo/download/14.png';
import bd15 from './images/experiences/billmo/download/15.png';
import bd16 from './images/experiences/billmo/download/16.png';
import bd17 from './images/experiences/billmo/download/17.png';
import bd18 from './images/experiences/billmo/download/18.png';
import bd19 from './images/experiences/billmo/download/19.png';
import bd20 from './images/experiences/billmo/download/20.png';
import bd21 from './images/experiences/billmo/download/21.png';
import bd22 from './images/experiences/billmo/download/22.png';
import bd23 from './images/experiences/billmo/download/23.png';

import bt0 from './images/experiences/billmo/thumbnail/0.png';
import bt1 from './images/experiences/billmo/thumbnail/1.png';
import bt2 from './images/experiences/billmo/thumbnail/2.png';
import bt3 from './images/experiences/billmo/thumbnail/3.png';
import bt4 from './images/experiences/billmo/thumbnail/4.png';
import bt5 from './images/experiences/billmo/thumbnail/5.png';
import bt6 from './images/experiences/billmo/thumbnail/6.png';
import bt7 from './images/experiences/billmo/thumbnail/7.png';
import bt8 from './images/experiences/billmo/thumbnail/8.png';
import bt9 from './images/experiences/billmo/thumbnail/9.png';
import bt10 from './images/experiences/billmo/thumbnail/10.png';
import bt11 from './images/experiences/billmo/thumbnail/11.png';
import bt12 from './images/experiences/billmo/thumbnail/12.png';
import bt13 from './images/experiences/billmo/thumbnail/13.png';
import bt14 from './images/experiences/billmo/thumbnail/14.png';
import bt15 from './images/experiences/billmo/thumbnail/15.png';
import bt16 from './images/experiences/billmo/thumbnail/16.png';
import bt17 from './images/experiences/billmo/thumbnail/17.png';
import bt18 from './images/experiences/billmo/thumbnail/18.png';
import bt19 from './images/experiences/billmo/thumbnail/19.png';
import bt20 from './images/experiences/billmo/thumbnail/20.png';
import bt21 from './images/experiences/billmo/thumbnail/21.png';
import bt22 from './images/experiences/billmo/thumbnail/22.png';
import bt23 from './images/experiences/billmo/thumbnail/23.png';

export const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  // maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomColor = () => {
  const random = randomInt(0, 5);

  switch (random) {
    case 1: {
      return colors.yellow[100];
    }
    case 2: {
      return colors.yellow[200];
    }
    case 3: {
      return colors.red[200];
    }
    case 4: {
      return colors.teal[200];
    }
    default: {
      return colors.purple[100];
    }
  }
};

const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scrollBehavior' in document.documentElement.style
  : false;

export const scrollToTop = () => {
  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, 0);
  }
};

export const scrollTo = (y: number) => {
  if (isSmoothScrollSupported) {
    window.scroll({
      top: y,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, y);
  }
};

export const scrollToElement = (element: Element) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      element.scrollIntoView();
    }
  }
};

export const getTechLogo = (tech: string, themeType: ThemeType): any => {
  switch (tech) {
    case Tech.React.name:
      return themeType === ThemeType.Light ? ReactDarkLogo : ReactLightLogo;
    case Tech.Redux.name:
      return themeType === ThemeType.Light ? ReduxDarkLogo : ReduxLightLogo;
    case Tech.Sql.name:
      return themeType === ThemeType.Light ? SqlDarkLogo : SqlLightLogo;
    case Tech.Node.name:
      return NodeLogo;
    case Tech.MongoDb.name:
      return MongoDbLogo;
    case Tech.TypeScript.name:
      return TypeScriptLogo;
    case Tech.Es6.name:
      return Es6Logo;
    case Tech.Xamarin.name:
      return XamarinLogo;
    case Tech.Aws.name:
      return AwsLogo;
    case Tech.TeamCity.name:
      return TeamCityLogo;
    case Tech.Heroku.name:
      return HerokuLogo;
    case Tech.Braze.name:
      return BrazeLogo;
    case Tech.Firebase.name:
      return FirebaseLogo;
    case Tech.Angular.name:
      return AngularLogo;
    case Tech.GraphQL.name:
      return GraphQlLogo;
    case Tech.Apollo.name:
      return ApolloLogo;
    case Tech.Figma.name:
      return FigmaLogo;
    case Tech.Html5.name:
      return Html5Logo;
    case Tech.Css3.name:
      return Css3Logo;
    case Tech.CSharp.name:
      return CSharpLogo;
    case Tech.VisualStudio.name:
      return VisualStudioLogo;
    case Tech.VsCode.name:
      return VsCodeLogo;
    case Tech.DotNetCore.name:
      return DotNetCoreLogo;
    case Tech.JavaScript.name:
      return JavaScriptLogo;
    case Tech.IOs.name:
      return IOsLogo;
    case Tech.Android.name:
      return AndroidLogo;
    case Tech.Yarn.name:
      return YarnLogo;
  }
};

export const getExperienceLogo = (experienceName: string): any => {
  switch (experienceName) {
    case 'microsoft': {
      return MicrosoftLogo;
    }
    case 'billmo': {
      return BillMoLogo;
    }
    case 'storeforce': {
      return StoreForceLogo;
    }
    case 'rbc': {
      return RbcLogo;
    }
    default: {
      return null;
    }
  }
};

export const getFlipDirection = (effect: FlipEffect): CardFlipDirection => {
  switch (effect) {
    case FlipEffect.FlipHorizontal: {
      return CardFlipDirection.Horizontal;
    }
    case FlipEffect.FlipVertical: {
      return CardFlipDirection.Vertical;
    }
    default: {
      return CardFlipDirection.None;
    }
  }
};

export const getFlipImage = (
  isFront: boolean,
  flipDirection: CardFlipDirection,
  flipIconStyle: FlipIconStyle
): any => {
  switch (flipDirection) {
    case CardFlipDirection.Horizontal: {
      if (isFront) {
        return DarkFlipHorizontalImg;
      } else {
        return flipIconStyle === FlipIconStyle.Dark
          ? DarkFlipHorizontalImg
          : LightFlipHorizontalImg;
      }
    }
    case CardFlipDirection.Vertical: {
      if (isFront) {
        return DarkFlipVerticalImg;
      } else {
        return flipIconStyle === FlipIconStyle.Dark
          ? DarkFlipVerticalImg
          : LightFlipVerticalImg;
      }
    }
    default: {
      return null;
    }
  }
};

export const getExperienceImages = (
  experienceName: string,
  formatMessage: any
): IImage[] => {
  switch (experienceName) {
    case 'billmo': {
      return [
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
            id: 'experience.billmoTransactionTypes'
          }),
          alt: formatMessage({
            id: 'experience.billmoTransactionTypes'
          }),
          source: {
            regular: bd1,
            thumbnail: bt1
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
            regular: bd2,
            thumbnail: bt2
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
            regular: bd3,
            thumbnail: bt3
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
            regular: bd4,
            thumbnail: bt4
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
            regular: bd5,
            thumbnail: bt5
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
            regular: bd6,
            thumbnail: bt6
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
            regular: bd7,
            thumbnail: bt7
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
            regular: bd8,
            thumbnail: bt8
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
            regular: bd9,
            thumbnail: bt9
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
            regular: bd10,
            thumbnail: bt10
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
            regular: bd11,
            thumbnail: bt11
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
            regular: bd12,
            thumbnail: bt12
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
            regular: bd13,
            thumbnail: bt13
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
            regular: bd14,
            thumbnail: bt14
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
            regular: bd15,
            thumbnail: bt15
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
            regular: bd16,
            thumbnail: bt16
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
            regular: bd17,
            thumbnail: bt17
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
            regular: bd18,
            thumbnail: bt18
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
            regular: bd19,
            thumbnail: bt19
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
            regular: bd20,
            thumbnail: bt20
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
            regular: bd21,
            thumbnail: bt21
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
      ];
    }
    case 'storeforce': {
      return [
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
      ];
    }
    case 'microsoft':
    case 'rbc':
    default: {
      return [];
    }
  }
};
