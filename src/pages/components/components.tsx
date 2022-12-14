import * as React from 'react';
import { Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

type MailToProps = {
  email: string;
  subject: string;
  body: string;
  children: string;
};

type SocialLinkProps = {
  address: string;
  text: string;
};

export const ScreenTitle = styled(Typography)`
  text-align: center;
  padding-bottom: 12px;
`;

export const SectionHeader = styled('h3')`
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${(props) => props.theme.palette.headerText.main};
`;

export const SectionText = styled('p')`
  padding-left: 4px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.palette.subtext.main};
`;

export const MailTo = ({
  email,
  subject,
  body,
  children,
}: MailToProps): React.ReactElement => {
  return (
    <Link
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ''
      }&body=${encodeURIComponent(body) || ''}`}
      sx={{ color: '#997755', fontSize: '18px' }}
      underline="hover"
    >
      {children}
    </Link>
  );
};

export const SocialLink = ({
  address,
  text,
}: SocialLinkProps): React.ReactElement => {
  return (
    <Link
      href={address}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: '#997755', fontSize: '18px' }}
      underline="hover"
    >
      {text}
    </Link>
  );
};
