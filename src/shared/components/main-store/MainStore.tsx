import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { json } from 'stream/consumers';

import { fetchProducts } from '../../services/api';
import { ShoppingCartBag } from '../../svg';
import { buttonCardStyle, cardActionsStyle, cardBoxstyle, cardContentStyle, cardMediaStyle, cardStyle, 
  mainBoxStyle, priceBoxStyle, productDescriptionStyle, productNameStyle } from './mainStoreStyle';

export const MainStore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await fetchProducts();
      console.log(result);
      setProducts(result.products);
    };
    fetch();
  }, []);

  const sendToShoppingCart = (product: object) => {

    const ShoppingCart = localStorage.getItem('ShoppingCart');

    if (ShoppingCart) {
      localStorage.setItem('ShoppingCart', JSON.stringify([...JSON.parse(ShoppingCart), product]));
    } else {
      localStorage.setItem('ShoppingCart', JSON.stringify([product]));
    }
  };
    
  return (

    <Box position='absolute' sx={mainBoxStyle}>
      <Box sx={cardBoxstyle}>
        {
          products.map((product: any) => (
            <Card key={product.id} sx={cardStyle}>
              <CardMedia
                component="img"
                height="150"
                sx={cardMediaStyle}
                image={product.photo}
                alt={product.name}
              />
              <CardContent sx={cardContentStyle}>
                <Typography 
                  color="#2C2C2C" 
                  sx={productNameStyle}
                  variant="h5" 
                  component="h5">{
                    product.name}
                </Typography>
                <Box sx={priceBoxStyle}>
                  <Typography 
                    color="#FFFFFF" 
                    variant="h6" 
                    component="h5">
                    {`R$${product.price}`}
                  </Typography>
                </Box>
              </CardContent>
              <CardContent sx={productDescriptionStyle}>
                <Typography 
                  color="#2C2C2C"  
                  variant="body2" 
                  component="p">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions sx={cardActionsStyle}>
                <Button 
                  color="primary" 
                  onClick={() => sendToShoppingCart(product)} 
                  variant="contained" 
                  sx={buttonCardStyle}>
                  <ShoppingCartBag />
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </Box>
    </Box>
  );
};