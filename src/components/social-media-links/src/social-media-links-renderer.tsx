import React from 'react';
import { gitHubLink, linkedInLink } from '../../../constants';
import { Image } from '../../image';
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
      <Image
        hover
        themed
        link={gitHubLink}
        Svg={GitHubLogo}
        className={styles.socialIcon}
        ariaLabel='GitHub'
      />
      <Image
        hover
        themed
        link={linkedInLink}
        Svg={LinkedInLogo}
        className={styles.socialIcon}
        ariaLabel='LinkedIn'
      />
    </div>
  );
};
