import React from 'react';
import { Cursor, Image } from 'components/image';
import { ICardSideRendererProps } from './card-interface';
import { ReactComponent as CompanyLinkImg } from './style/companyLink.svg';
import { getTechLogo } from 'utils/utils';
import {
  TooltipPosition,
  TooltipStyle
} from 'components/image/src/image-interface';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import cardStyle from './style/card-style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const CardBackRenderer: React.FC<ICardSideRendererProps> = ({
  experience,
  cardContainerStyle,
  onFlip,
  flipImage
}) => {
  const theme: any = useTheme();
  const styles = cardStyle(theme);
  const { formatMessage } = useIntl();

  const flipImgText = formatMessage({ id: 'experience.moreImgText' });
  const flip = (e: any) => {
    e.preventDefault();
    onFlip && onFlip(false);
  };

  return (
    <Grid container className={cardContainerStyle}>
      <Grid container item xs={12} className={styles.topSection}>
        {onFlip && (
          <Box className={styles.flipImgContainer}>
            <Image
              ariaLabel={flipImgText}
              className={styles.flipImg}
              cursor={Cursor.Pointer}
              Svg={flipImage}
              tooltip={flipImgText}
              tooltipPosition={TooltipPosition.Top}
              tooltipStyle={TooltipStyle.Fade}
              onClick={flip}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

CardBackRenderer.displayName = 'CardBackRenderer';
