import styled from 'styled-components';
import ProjectNumber from '../atoms/ProjectNumber';
import ProjectInfo from './ProjectInfo';

const Container = styled.div`
  height: 60vh;
  width: 90%;
  background: gray;
  margin: 10px auto;
  position: relative;
`;
const Wrapper = styled.div`
  background: gray;
  position: absolute;
  bottom: 0;
  display: flex;
`;

function ProjectPreview() {
  return (
    <Container>
      <Wrapper>
        <ProjectInfo />
      </Wrapper>
      <ProjectNumber />
    </Container>
  );
}

export default ProjectPreview;
