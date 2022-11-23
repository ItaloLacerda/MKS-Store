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
      main: '#373737',
      dark: '#303737',
      light: '#393737',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#E5E5E5',
      paper: '#FFFFFF',
    }
  }
});