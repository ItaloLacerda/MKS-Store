import { AppBar, Button, Container, Toolbar, Typography} from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { openDrawer } from '../../redux/slice';
import { MksIcon, ShoppingCart, SystemsIcon } from '../../svg';
import { buttonStyle, containerStyle } from './headerStyle';

export const Header = () => {

  const dispatch = useAppDispatch();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Container maxWidth="xl" sx={containerStyle}>
            <MksIcon />
            <SystemsIcon />
          </Container>
          <Button 
            onClick={() => dispatch(openDrawer())}
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