import { AppBar, Container } from '@mui/material';
import { MksIcon, SystemsIcon } from '../../svg';

export const Header = () => {

  return (
    <>
      <AppBar>
        <Container maxWidth="xl" sx={{
          height: '73px',
          marginLeft: '32px',
          marginTop: '28px',
          width: '16%'
        }}>
          <MksIcon />
          <SystemsIcon />
        </Container>
      </AppBar>
    </>
  );
};