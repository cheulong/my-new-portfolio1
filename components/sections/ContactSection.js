import styled from 'styled-components';
import PrimaryBtn from '../atoms/buttons/PrimaryBtn';
import SeeMoreBtn from '../atoms/buttons/SeeMoreBtn';
import NormalText from '../atoms/NormalText';
import TitleText from '../atoms/TitleText';
import BlogPreview from '../molecules/BlogPreview';
import ContactForm from '../molecules/ContactForm';

const Container = styled.div`
  margin: 60px auto;
  width: 80%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
function ContactSection() {
  return (
    <Container>
      <TitleWrapper>
        <TitleText label='Contact' />
      </TitleWrapper>

      <ContactForm />
    </Container>
  );
}

export default ContactSection;
