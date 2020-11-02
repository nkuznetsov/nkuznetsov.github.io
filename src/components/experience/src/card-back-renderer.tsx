import React from 'react';
import { Cursor, Image } from 'components/image';
import { ICardSideRendererProps } from './experience-interface';
import { ReactComponent as CompanyLinkImg } from './style/companyLink.svg';
import { techLogo } from 'utils/utils';
import { TooltipStyle } from 'components/image/src/image-interface';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const CardBackRenderer: React.FC<ICardSideRendererProps> = ({
  experience,
  onFlip,
  cardContainerStyle
}) => {
  const theme: any = useTheme();
  const styles = experienceStyle(theme);

  const handleClick = (e: any) => {
    e.preventDefault();
    onFlip && onFlip(false);
  };

  return (
    <Grid container className={cardContainerStyle}>
      Back
      <button onClick={handleClick}> Flip card to front </button>
    </Grid>
  );
};

CardBackRenderer.displayName = 'CardBackRenderer';
