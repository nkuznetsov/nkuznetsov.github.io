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
import { ReactComponent as AtlassianLogo } from './images/atlassian.svg';
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
import { ReactComponent as JQueryLogo } from './images/jquery.svg';
import { ReactComponent as CSharpLogo } from './images/csharp.svg';
import { ReactComponent as JavaLogo } from './images/java.svg';
import { ReactComponent as SqlLightLogo } from './images/sqlLight.svg';
import { ReactComponent as SqlDarkLogo } from './images/sqlDark.svg';
import { ReactComponent as JavaScriptLogo } from './images/javascript.svg';
import { ReactComponent as DotNetCoreLogo } from './images/dotnetcore.svg';
import { ReactComponent as VsCodeLogo } from './images/vscode.svg';
import { ReactComponent as VisualStudioLogo } from './images/visualstudio.svg';
import { ReactComponent as MySqlDarkLogo } from './images/mysqlDark.svg';
import { ReactComponent as MySqlLightLogo } from './images/mysqlLight.svg';
import { ReactComponent as AndroidLogo } from './images/android.svg';
import { ReactComponent as IOsLogo } from './images/ios.svg';

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

export const techLogo = (tech: Tech, themeType: ThemeType): any => {
  switch (tech) {
    case Tech.React:
      return themeType === ThemeType.Light ? ReactDarkLogo : ReactLightLogo;
    case Tech.Redux:
      return themeType === ThemeType.Light ? ReduxDarkLogo : ReduxLightLogo;
    case Tech.Sql:
      return themeType === ThemeType.Light ? SqlDarkLogo : SqlLightLogo;
    case Tech.MySql:
      return themeType === ThemeType.Light ? MySqlDarkLogo : MySqlLightLogo;
    case Tech.Node:
      return NodeLogo;
    case Tech.MongoDb:
      return MongoDbLogo;
    case Tech.TypeScript:
      return TypeScriptLogo;
    case Tech.ES6:
      return Es6Logo;
    case Tech.Xamarin:
      return XamarinLogo;
    case Tech.AWS:
      return AwsLogo;
    case Tech.Atlassian:
      return AtlassianLogo;
    case Tech.TeamCity:
      return TeamCityLogo;
    case Tech.Heroku:
      return HerokuLogo;
    case Tech.Braze:
      return BrazeLogo;
    case Tech.Firebase:
      return FirebaseLogo;
    case Tech.Angular:
      return AngularLogo;
    case Tech.GraphQL:
      return GraphQlLogo;
    case Tech.Apollo:
      return ApolloLogo;
    case Tech.Figma:
      return FigmaLogo;
    case Tech.Html5:
      return Html5Logo;
    case Tech.Css3:
      return Css3Logo;
    case Tech.JQuery:
      return JQueryLogo;
    case Tech.CSharp:
      return CSharpLogo;
    case Tech.Java:
      return JavaLogo;
    case Tech.VisualStudio:
      return VisualStudioLogo;
    case Tech.VsCode:
      return VsCodeLogo;
    case Tech.DotNetCore:
      return DotNetCoreLogo;
    case Tech.JavaScript:
      return JavaScriptLogo;
    case Tech.IOs:
      return IOsLogo;
    case Tech.Android:
      return AndroidLogo;
  }
};
