import styled from 'styled-components';
import PrimaryBtn from '../atoms/buttons/PrimaryBtn';
import NormalText from '../atoms/NormalText';
import SmallText from '../atoms/SmallText';
import TitleText from '../atoms/TitleText';

const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  p {
    /* font-weight: bold;
    font-size: 28px; */
  }
`;

const Wrapper = styled.div`
  width: 90%;
  font-size: 24px;
  margin: auto;
  line-height: 40px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;

const Space = styled.div`
  height: 50px;
`;

function AboutSection() {
  return (
    <Container>
      <Wrapper>
        <NormalText
          label='
       Base in Chiang Mai, Thailand. I develop full-stack applications, who
       always learn something new everyday. Currently, focus on ReactJs and
       NextJs.'
        />
        <SmallText>
          <p>
            Technologies are currently used:{' '}
            <span>ReactJs, NextJs, Sass, styled-components</span>
          </p>
        </SmallText>
        <Space />
        <ButtonContainer>
          <PrimaryBtn label='Selected Projects' />
          <PrimaryBtn label='About Me' />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

export default AboutSection;
