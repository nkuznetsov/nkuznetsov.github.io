import React from 'react';
import { IExperienceCardRendererProps } from './experience-interface';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';
import Grid from '@material-ui/core/Grid';

export const ExperienceCardRenderer: React.FC<IExperienceCardRendererProps> = ({
  experience
}) => {
  const theme = useTheme();
  const styles = experienceStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Grid
      item
      xs
      style={{
        border: '1px solid pink'
      }}
    >
      <div style={{ height: '100%' }}>
        <div>Badass</div>

        <div>
          I do badass things and kickass everyday! I do badass things and
          kickass everyday! I do badass things and kickass everyday!
        </div>
        <div>
          <i />
          <i />
          <i />
        </div>
        <div>
          <p>Code</p>
          <p>Blog</p>
        </div>
      </div>
    </Grid>
  );
};
