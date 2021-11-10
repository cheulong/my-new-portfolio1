import React from 'react';
import styled from 'styled-components';
import HamburgerBtn from '../atoms/buttons/HamburgerBtn';
import NavItems from '../navbar/NavItems';

const Container = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background: grey;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
`;

const MunuBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 85px;
`;
const ModalMenu = ({ isActive, setIsActive }) => {
  return (
    <Container isActive={isActive}>
      <Wrapper>
        <MunuBtn>
          <HamburgerBtn isActive={isActive} setIsActive={setIsActive} />
        </MunuBtn>
        <NavItems />
      </Wrapper>
    </Container>
  );
};

export default ModalMenu;
