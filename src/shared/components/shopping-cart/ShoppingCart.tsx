import { Button, ButtonGroup, Card, CardMedia, Drawer, List, ListItem, ListSubheader, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeDrawer, saveProductInCart, selectShoppingCart } from '../../redux/slice/shoppingCartSlice';
import { CloseCart } from '../../svg/close-cart/CloseCart';
import { boxTotalstyle, cardMediaStyle, cardStyle, checkoutButtonStyle, countStyle, decrementButtonStyle, DrawerHeader, drawerTitleStyle, 
  drawerTotalStyle, drawerValueStyle,  incrementeBoxStyle,  incrementeButtonStyle, nameProductBoxStyle, priceBoxStyle, styleBox, styleCloseCart } from './ShoppingCartStyle';

export const ShoppingCart = () => {

  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectShoppingCart);
  const theme = useTheme();

  useEffect(() => {
    const productStorage = localStorage.getItem('ShoppingCart');
    if (productStorage) JSON.parse(productStorage)
      .forEach((product: object) => {
        dispatch(saveProductInCart(product));
      });
  }, []);
  
  return (
    <Drawer open={cart.open} anchor="right" variant="persistent">
      <Box width={theme.spacing(60.80)} sx={styleBox}>
        <DrawerHeader>
          <Typography component="h3" variant='h3' sx={drawerTitleStyle}>Carrinho de compras</Typography>
          <Button onClick={() => dispatch(closeDrawer())} sx={styleCloseCart}>
            <CloseCart />
          </Button>
        </DrawerHeader>
        <Box  
          width={theme.spacing(60.80)} 
          height="67.3%">
          <List 
            disablePadding
            subheader={<li />}
          >
            {
              cart.cartProducts.map((product): any => (
                <ListItem key={product.id} sx={ { padding: '0' }}>

                  <Card  sx={cardStyle}>
                    <CardMedia
                      component="img"
                      sx={cardMediaStyle}
                      image={product.photo}
                      alt={product.name}
                    />
                    <Box sx={nameProductBoxStyle}>
                      <Typography 
                        color="#2C2C2C" 
                        variant="h6" 
                        component="h4">
                        {product.name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={ {fontSize: '10px'}}>Qtd:</Typography>
                      <Box sx={incrementeBoxStyle}>
                        <Button sx={incrementeButtonStyle}>-</Button>
                        <Box sx={countStyle}>
                          <Typography sx={ {fontSize: '13px'}}>{cart.allTheProducts.filter((productCurr) => productCurr.id === product.id).length}</Typography>
                        </Box>
                        <Button sx={decrementButtonStyle}>+</Button>
                      </Box>
                    </Box>
                    <Box sx={priceBoxStyle}>
                      <Typography variant="h5">{`R$${cart.allTheProducts
                        .filter((productCurr) => productCurr.id === product.id)
                        .map((productCurr) => Number(productCurr.price))
                        .reduce((acc, cur) => acc + cur, 0)
                        .toFixed(2)}`}</Typography>
                    </Box>
                  </Card>
                </ListItem>
              ))
            }         
          </List>
        </Box>
        <Box width={theme.spacing(60.80)} height="10%" sx={boxTotalstyle}>
          <Typography component="p" variant='h3' sx={drawerTotalStyle}>Total:</Typography>
          <Typography component="p" variant='h3' sx={drawerValueStyle}>{`R$${
            cart.allTheProducts
              .map((productCurr) => Number(productCurr.price))
              .reduce((acc, cur) => acc + cur, 0)
              .toFixed(2)
          }`}</Typography>
        </Box>
        <Button variant="contained" sx={checkoutButtonStyle}>Finalizar Compra</Button>
      </Box>
    </Drawer>
  );
};