import React from 'react';
import { gitHubLink, linkedInLink } from '../../../constants';
import { Image } from '../../image';
import { ReactComponent as GitHubLogo } from './style/github.svg';
import { ReactComponent as LinkedInLogo } from './style/linkedin.svg';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import socialMediaLinksStyle from './style/social-media-links-style';

export const SocialMediaLinksRenderer: React.FC = () => {
  const theme = useTheme();
  const styles = socialMediaLinksStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <div className={styles.socialIconsContainer}>
      <Image
        popOutOnHover
        themed
        link={gitHubLink}
        Svg={GitHubLogo}
        className={styles.socialIcon}
        ariaLabel={formatMessage({ id: 'home.github' })}
      />
      <Image
        popOutOnHover
        themed
        link={linkedInLink}
        Svg={LinkedInLogo}
        className={styles.socialIcon}
        ariaLabel={formatMessage({ id: 'home.linkedin' })}
      />
    </div>
  );
};
