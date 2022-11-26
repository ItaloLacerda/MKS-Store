import { Box, Card } from '@mui/material';
import { useState, useEffect } from 'react';

import { fetchProducts } from '../../services/api';
import { cardBoxstyle, CardStyle, mainBoxStyle } from './mainStoreStyle';

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
    
  return (

    <Box position='absolute' sx={mainBoxStyle}>
      <Box sx={cardBoxstyle}>
        {
          products.map((product: any) => (
            <Card key={product.id} sx={CardStyle}>
            test
            </Card>
          ))
        }
      </Box>
    </Box>
  );
};