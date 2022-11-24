import { Button, Drawer, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { CloseCart } from '../../svg/close-cart/CloseCart';
import { checkoutButtonStyle, DrawerHeader, drawerTitleStyle, styleBox, styleCloseCart } from './ShoppingCartStyle';

export const ShoppingCart = () => {

  const theme = useTheme();

  return (
    <Drawer open={true} anchor="right" variant="persistent">
      <Box width={theme.spacing(60.80)} sx={styleBox}>
        <DrawerHeader>
          <Typography component="h3" sx={drawerTitleStyle}>Carrinho de compras</Typography>
          <Button sx={styleCloseCart}>
            <CloseCart />
          </Button>
        </DrawerHeader>
        <Button variant="contained" sx={checkoutButtonStyle}>Finalizar Compra</Button>
      </Box>
    </Drawer>
  );
};