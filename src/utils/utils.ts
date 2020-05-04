import { Tech } from './utils-interface';
import colors from '../style/colors';

// Tech icons
import { ReactComponent as ReactLogo } from './images/react.svg';
import { ReactComponent as ReduxLogo } from './images/redux.svg';
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

export const techLogo = (tech: Tech): any => {
  switch (tech) {
    case Tech.React: {
      return ReactLogo;
    }
    case Tech.Redux: {
      return ReduxLogo;
    }
    case Tech.Node: {
      return NodeLogo;
    }
    case Tech.MongoDb: {
      return MongoDbLogo;
    }
    case Tech.TypeScript: {
      return TypeScriptLogo;
    }
    case Tech.Es6: {
      return Es6Logo;
    }
    case Tech.Xamarin: {
      return XamarinLogo;
    }
    case Tech.Aws: {
      return AwsLogo;
    }
    case Tech.Atlassian: {
      return AtlassianLogo;
    }
    case Tech.TeamCity: {
      return TeamCityLogo;
    }
    case Tech.Heroku: {
      return HerokuLogo;
    }
    case Tech.Braze: {
      return BrazeLogo;
    }
    case Tech.Firebase: {
      return FirebaseLogo;
    }
  }
  return null;
};
