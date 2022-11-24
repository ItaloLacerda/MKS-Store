import { styled } from '@mui/material';

export const DrawerHeader = styled('div')(() => ({
  display: 'flex',
  padding: '0' ,
  justifyContent: 'space-between',
  height: '101px'
}));

export const styleBox = {
  bgcolor: 'primary.main',
  height: '100%'
};

export const styleCloseCart = {
  height: '50px',
  padding: '0' ,
  marginRight: '22px',
  marginTop: '39px',
};

export const drawerTitleStyle = {
  fontSize: '27px',
  lineHeight: '33px',
  color: '#FFFFFF',
  width: '144px',
  height: '56px',
  marginLeft: '22px',
  marginTop: '36px',
};

export const checkoutButtonStyle = {
  backgroundColor: '#000000',
  width: '100%',
  height: '97px',
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '15px',
  borderRadius: '0',
};

export const boxTotalstyle = {
  display: 'flex',
  padding: '0' ,
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const drawerValueStyle = {
  color: '#FFFFFF',
  marginRight: '63px',
};

export const drawerTotalStyle = {
  color: '#FFFFFF',
  marginLeft: '47px',
};
