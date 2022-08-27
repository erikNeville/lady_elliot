import * as React from 'react';
import { EMAIL, commissionStrings as strings } from '../common/strings';
import CategorizedImageDisplay from './components/image';
import { MailTo } from './components/components';
import { ScreenContainer } from './components/containers';
import { Typography } from '@mui/material';

export const Commissions: React.FC = () => {
  return (
    <ScreenContainer>
      <Typography variant="SECTION_HEADER">
        {strings.COMMISSION_INQUERY}
      </Typography>
      <Typography variant="BODY">{strings.COMMISSION_INQUERY_TEXT}</Typography>
      <Typography variant="SECTION_HEADER">
        {strings.COMMISSION_PROCESS}
      </Typography>
      <Typography variant="BODY">
        {strings.COMMISSION_PROCESS_TEXT_1}
      </Typography>
      <Typography variant="BODY">
        {strings.COMMISSION_PROCESS_TEXT_2}
        <MailTo email={EMAIL} subject="Commission" body="">
          {EMAIL}
        </MailTo>
      </Typography>
      <Typography variant="SECTION_HEADER">
        {strings.COMMISSION_GALLERY}
      </Typography>
      <CategorizedImageDisplay category="commissions" hideTitles />
    </ScreenContainer>
  );
};
