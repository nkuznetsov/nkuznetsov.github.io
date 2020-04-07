import React from 'react';
import { gitHubLink, linkedInLink } from '../../../constants';
import { ReactComponent as GitHubLogo } from './style/github.svg';
import { ReactComponent as LinkedInLogo } from './style/linkedin.svg';
import { useTheme } from 'react-jss';
import socialMediaLinksStyle from './style/social-media-links-style';

export const SocialMediaLinksRenderer = () => {
  const theme = useTheme();
  const styles = socialMediaLinksStyle(theme);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <a href={gitHubLink}>
        <GitHubLogo className={styles.socialIcon}>'GitHub'</GitHubLogo>
      </a>
      <a href={linkedInLink}>
        <LinkedInLogo className={styles.socialIcon}>'LinkedIn'</LinkedInLogo>
      </a>
    </div>
  );
};
