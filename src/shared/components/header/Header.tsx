import { AppBar, Button, Container, Toolbar, Typography} from '@mui/material';
import { MksIcon, ShoppingCart, SystemsIcon } from '../../svg';
import { buttonStyle, containerStyle } from './headerStyle';

export const Header = () => {

  return (
    <>
      <AppBar>
        <Toolbar>
          <Container maxWidth="xl" sx={containerStyle}>
            <MksIcon />
            <SystemsIcon />
          </Container>
          <Button 
            color="secondary"
            sx={buttonStyle}
            variant="contained"
            disableElevation 
          >
            <ShoppingCart/>
            <Typography variant="h6">0</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};