import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main:'#0F52BA',
      dark: '#0052BA',
      light: '#2152BA',
      contrastText:'#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    background: {
      default: '#E5E5E5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h3: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '28px',
      lineHeight: '15px'
    },
    h5: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '19px'
    },
    h6: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '15px',
      lineHeight: '15px'
    },
    body2: {
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '10px',
      lineHeight: '12px'
    }

  }

});