import { useState } from 'react';
import styled from 'styled-components';
import HamburgerBtn from '../atoms/buttons/HamburgerBtn';
import Logo from '../logo/logo';
import ModalMenu from '../modal/ModalMenu';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Container>
        <Logo />
        <HamburgerBtn isActive={isActive} setIsActive={setIsActive} />
      </Container>
      <ModalMenu isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}

export default Navbar;
