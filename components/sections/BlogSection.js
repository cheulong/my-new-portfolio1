import styled from 'styled-components';
import PrimaryBtn from '../atoms/buttons/PrimaryBtn';
import SeeMoreBtn from '../atoms/buttons/SeeMoreBtn';
import NormalText from '../atoms/NormalText';
import TitleText from '../atoms/TitleText';
import BlogPreview from '../molecules/BlogPreview';

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
function BlogSection() {
  return (
    <Container>
      <TitleWrapper>
        <TitleText label='I also wrote something' />
        <SeeMoreBtn label='See Detail' />
      </TitleWrapper>

      <BlogPreview />
    </Container>
  );
}

export default BlogSection;
