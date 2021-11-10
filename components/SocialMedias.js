import styled from 'styled-components';
import SocialMediaIcon from './atoms/SocialMediaIcon';
import emailIcon from '../assets/icons/email_icon.svg';
import githubIcon from '../assets/icons/github_icon.svg';
import linkedinIcon from '../assets/icons/linkedin_icon.svg';
import mediumIcon from '../assets/icons/medium_icon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: start;
  a {
    font-weight: bold;
    margin: 5px 0px;
    align-items: center;
    display: flex;
    span {
      margin-left: 5px;
    }
  }
`;

function SocialMedias() {
  return (
    <Container>
      <a href='#'>
        <SocialMediaIcon src={emailIcon} />
        <span> email</span>
      </a>
      <a href='#'>
        <SocialMediaIcon src={linkedinIcon} />
        <span> linkedin</span>
      </a>
      <a href='#'>
        <SocialMediaIcon src={githubIcon} />
        <span> github</span>
      </a>
      <a href='#'>
        <SocialMediaIcon src={mediumIcon} />
        <span> medium</span>
      </a>
    </Container>
  );
}

export default SocialMedias;
