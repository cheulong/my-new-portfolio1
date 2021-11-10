import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';
import HamburgerBtn from '../../atoms/buttons/hamburgerBtn';
import Logo from '../../atoms/logo/logo';

const Container = styled.div``;
function Navbar() {
  return (
    <Container>
      <Logo />
      <HamburgerBtn />
    </Container>
  );
}

export default Navbar;
