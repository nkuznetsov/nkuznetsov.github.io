import React from 'react';
import { Cursor } from '../../image/src/image-interface';
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
        ariaLabel={formatMessage({ id: 'home.github' })}
        className={styles.socialIcon}
        cursor={Cursor.Pointer}
        link={gitHubLink}
        popOutOnHover
        Svg={GitHubLogo}
        themed
      />
      <Image
        ariaLabel={formatMessage({ id: 'home.linkedin' })}
        className={styles.socialIcon}
        cursor={Cursor.Pointer}
        link={linkedInLink}
        popOutOnHover
        Svg={LinkedInLogo}
        themed
      />
    </div>
  );
};
