import { createTheme } from '@mui/material/styles';
import React from 'react';

const theme = {
  palette: {
    primary: {
      main: '#D0D0D0',
    },
    page: {
      main: '#181818',
    },
    nav: {
      main: '#080808',
    },
    navTitle: {
      main: '#E5E5E5',
    },
    navLinks: {
      main: '#E5E5E5',
    },
    headerText: {
      main: '#D0D0D0',
    },
    subText: {
      main: '#C0C0C0',
    },
  },
  typography: {
    fontFamily: ['trade-gothic-next, sans-serif'].join(','),
    SECTION_HEADER: {
      fontSize: '32px',
      fontWeight: 700,
      letterSpacing: '0.01em',
      fontStyle: 'normal',
      lineHeight: '40px',
      color: '#D0D0D0',
      marginBottom: '16px',
    },
    BODY: {
      fontSize: '16px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '24px',
      letterSpacing: '0em',
      color: '#C0C0C0',
      paddingLeft: '4px',
      marginBottom: '16px',
    },
    IMAGE_TITLE: {
      padding: 0,
      margin: 0,
      fontWeight: 600,
      fontSize: '16px',
      letterSpacing: '0.01em',
      color: '#D0D0D0',
      lineHeight: '16px',
      fontStyle: 'normal',
    },
    IMAGE_DESC: {
      fontSize: '14px',
      color: '#C0C0C0',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          SECTION_HEADER: 'h3',
          BODY: 'p',
          IMAGE_TITLE: 'p',
          IMAGE_DESC: 'p',
        },
      },
    },
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    SECTION_HEADER: React.CSSProperties;
    BODY: React.CSSProperties;
    IMAGE_TITLE?: React.CSSProperties;
    IMAGE_DISC?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    SECTION_HEADER?: React.CSSProperties;
    BODY?: React.CSSProperties;
    IMAGE_TITLE?: React.CSSProperties;
    IMAGE_DISC?: React.CSSProperties;
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    SECTION_HEADER: true;
    BODY: true;
    IMAGE_TITLE: true;
    IMAGE_DESC: true;
  }
}

export default createTheme(theme);
