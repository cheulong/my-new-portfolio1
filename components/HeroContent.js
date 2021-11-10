import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: auto;
  height: calc(50vh);
  display: flex;
  p {
    font-weight: bold;
    font-size: 28px;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  text-align: start;
`;

const Header = styled.h1`
  font-size: 70px;
  font-family: 'Montserrat', sans-serif;

  margin: 0;
  font-weight: 900;
`;

const HeroContent = () => {
  return (
    <Container>
      <Wrapper>
        <p>Good Morning👋, I’m</p>
        <Header>Cheulong Sear</Header>
        <p>Full-Stack Developer</p>
      </Wrapper>
    </Container>
  );
};

export default HeroContent;
