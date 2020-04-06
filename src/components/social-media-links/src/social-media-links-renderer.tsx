import React from 'react';
import { gitHubLink, linkedInLink } from '../../../assets/constants';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import github from '../../../assets/images/github.svg';
import linkedin from '../../../assets/images/linkedin.svg';
import localStyles from '../../../assets/styles/local';

export const SocialMediaLinksRenderer = () => {
  const theme = useTheme();
  const styles = localStyles(theme);
  const { formatMessage } = useIntl();

  return (
    <>
      <p className={styles.name}>
        {formatMessage({ id: 'home.nikitaKuznetsov' })}
      </p>
      <a href={gitHubLink}>
        <img src={github} alt='GitHub' className={styles.socialIcon} />
      </a>
      <a href={linkedInLink}>
        <img src={linkedin} alt='LinkedIn' className={styles.socialIcon} />
      </a>
    </>
  );
};
