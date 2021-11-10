import styled from 'styled-components';

const Container = styled.div`
  background: gray;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  padding: 30px 0;
`;
const MenuContainer = styled.div`
  height: 100px;
`;
const Logo = styled.div`
  height: 100px;
  width: 100px;
  background: black;
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <MenuContainer>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>About</li>
          </ul>
        </MenuContainer>
      </Wrapper>
    </Container>
  );
}

export default Footer;
