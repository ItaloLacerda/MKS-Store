
export const fetchProducts = async () => {
  try {
    const URL = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC';
    const result = await fetch(URL);
    const data = await result.json();
    return data;
  } catch(error: any) {
    throw new  Error(error);
  }
};


