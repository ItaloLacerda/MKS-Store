import { AppBar, Button, Container, Toolbar, Typography} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { openDrawer } from '../../redux/slice';
import { selectShoppingCart } from '../../redux/slice/shoppingCartSlice';
import { MksIcon, ShoppingCart, SystemsIcon } from '../../svg';
import { buttonStyle, containerStyle } from './headerStyle';

export const Header = () => {

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectShoppingCart);

  return (
    <>
      <AppBar sx={{height: '9.864%'}}>
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
            <Typography variant="h6">{count.allTheProducts.length}</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};