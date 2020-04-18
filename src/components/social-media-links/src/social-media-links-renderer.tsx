import React from 'react';
import { gitHubLink, linkedInLink } from '../../../constants';
import { Image } from '../../image';
import { ReactComponent as GitHubLogo } from './style/github.svg';
import { ReactComponent as LinkedInLogo } from './style/linkedin.svg';
import { useTheme } from 'react-jss';
import socialMediaLinksStyle from './style/social-media-links-style';

export const SocialMediaLinksRenderer: React.FunctionComponent = () => {
  const theme = useTheme();
  const styles = socialMediaLinksStyle(theme);

  return (
    <div className={styles.socialIconsContainer}>
      <Image
        popOutOnHover
        themed
        link={gitHubLink}
        Svg={GitHubLogo}
        className={styles.socialIcon}
        ariaLabel='GitHub'
      />
      <Image
        popOutOnHover
        themed
        link={linkedInLink}
        Svg={LinkedInLogo}
        className={styles.socialIcon}
        ariaLabel='LinkedIn'
      />
    </div>
  );
};
