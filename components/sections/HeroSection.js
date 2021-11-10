import styled from 'styled-components';
import HeroContent from '../HeroContent';
import Navbar from '../Navbar/Narbar';
import SocialMedias from '../SocialMedias';

const Container = styled.div`
  min-height: 100vh;
  width: 80%;
  margin: auto;
`;

function HeroSection() {
  return (
    <Container>
      <Navbar />
      <HeroContent />
      <SocialMedias />
    </Container>
  );
}

export default HeroSection;
