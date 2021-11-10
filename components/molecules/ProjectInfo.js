import styled from 'styled-components';
import SeeMoreBtn from '../atoms/buttons/SeeMoreBtn';
import NormalText from '../atoms/NormalText';
import TitleText from '../atoms/TitleText';

const Container = styled.div`
  margin: 20px;
  p {
    margin: 5px;
  }
`;
function ProjectInfo() {
  return (
    <Container>
      <TitleText label='Title' />
      <NormalText label='Description' />
      <p>React, Graphql, Typescript</p>
      <SeeMoreBtn label='See Detail' />
    </Container>
  );
}

export default ProjectInfo;
