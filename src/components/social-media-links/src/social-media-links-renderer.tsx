import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import { GITHUB_LINK, LINKEDIN_LINK } from 'utils/constants';
import { Image, Cursor } from 'components/image';
import { ImageEffect } from 'components/image/src/image-interface';
import { ReactComponent as GitHubLogo } from './style/github.svg';
import { ReactComponent as LinkedInLogo } from './style/linkedin.svg';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import socialMediaLinksStyle from './style/social-media-links-style';

export const SocialMediaLinksRenderer: React.FC = memo(() => {
  const theme = useTheme();
  const styles = socialMediaLinksStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Box className={styles.socialIconsContainer}>
      <Image
        alt={formatMessage({ id: 'home.github' })}
        className={styles.socialIcon}
        cursor={Cursor.Pointer}
        link={GITHUB_LINK}
        effect={ImageEffect.PopOutOnHover}
        Svg={GitHubLogo}
        themed
      />
      <Image
        alt={formatMessage({ id: 'home.linkedin' })}
        className={styles.socialIcon}
        cursor={Cursor.Pointer}
        link={LINKEDIN_LINK}
        effect={ImageEffect.PopOutOnHover}
        Svg={LinkedInLogo}
        themed
      />
    </Box>
  );
});

SocialMediaLinksRenderer.displayName = 'SocialMediaLinksRenderer';
