import { Button, Drawer, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { CloseCart } from '../../svg/close-cart/CloseCart';
import { boxTotalstyle, checkoutButtonStyle, DrawerHeader, drawerTitleStyle, 
  drawerTotalStyle, drawerValueStyle, styleBox, styleCloseCart } from './ShoppingCartStyle';

export const ShoppingCart = () => {

  const theme = useTheme();

  return (
    <Drawer open={true} anchor="right" variant="persistent">
      <Box width={theme.spacing(60.80)} sx={styleBox}>
        <DrawerHeader>
          <Typography component="h3" variant='h3' sx={drawerTitleStyle}>Carrinho de compras</Typography>
          <Button sx={styleCloseCart}>
            <CloseCart />
          </Button>
        </DrawerHeader>
        <Box width={theme.spacing(60.80)} height="67.3%">

        </Box>
        <Box width={theme.spacing(60.80)} height="10%" sx={boxTotalstyle}>
          <Typography component="p" variant='h3' sx={drawerTotalStyle}>Total:</Typography>
          <Typography component="p" variant='h3' sx={drawerValueStyle}>R$0</Typography>
        </Box>
        <Button variant="contained" sx={checkoutButtonStyle}>Finalizar Compra</Button>
      </Box>
    </Drawer>
  );
};