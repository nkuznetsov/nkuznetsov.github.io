import { Tech } from './utils-interface';
import { ThemeType } from 'models';
import colors from 'style/colors';

// Tech icons
import { ReactComponent as ReactDarkLogo } from './images/reactDark.svg';
import { ReactComponent as ReactLightLogo } from './images/reactLight.svg';
import { ReactComponent as ReduxDarkLogo } from './images/reduxDark.svg';
import { ReactComponent as ReduxLightLogo } from './images/reduxLight.svg';
import { ReactComponent as NodeLogo } from './images/node.svg';
import { ReactComponent as MongoDbLogo } from './images/mongodb.svg';
import { ReactComponent as TypeScriptLogo } from './images/typescript.svg';
import { ReactComponent as Es6Logo } from './images/es6.svg';
import { ReactComponent as XamarinLogo } from './images/xamarin.svg';
import { ReactComponent as AwsLogo } from './images/aws.svg';
import { ReactComponent as TeamCityLogo } from './images/teamcity.svg';
import { ReactComponent as HerokuLogo } from './images/heroku.svg';
import { ReactComponent as BrazeLogo } from './images/braze.svg';
import { ReactComponent as FirebaseLogo } from './images/firebase.svg';
import { ReactComponent as AngularLogo } from './images/angular.svg';
import { ReactComponent as GraphQlLogo } from './images/graphql.svg';
import { ReactComponent as ApolloLogo } from './images/apollo.svg';
import { ReactComponent as FigmaLogo } from './images/figma.svg';
import { ReactComponent as Html5Logo } from './images/html5.svg';
import { ReactComponent as Css3Logo } from './images/css3.svg';
import { ReactComponent as CSharpLogo } from './images/csharp.svg';
import { ReactComponent as SqlLightLogo } from './images/sqlLight.svg';
import { ReactComponent as SqlDarkLogo } from './images/sqlDark.svg';
import { ReactComponent as JavaScriptLogo } from './images/javascript.svg';
import { ReactComponent as DotNetCoreLogo } from './images/dotnetcore.svg';
import { ReactComponent as VsCodeLogo } from './images/vscode.svg';
import { ReactComponent as VisualStudioLogo } from './images/visualstudio.svg';
import { ReactComponent as AndroidLogo } from './images/android.svg';
import { ReactComponent as IOsLogo } from './images/ios.svg';
import { ReactComponent as YarnLogo } from './images/yarn.svg';

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

export const techLogo = (tech: string, themeType: ThemeType): any => {
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
