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
  }
});