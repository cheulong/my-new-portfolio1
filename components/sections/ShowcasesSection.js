import styled from 'styled-components';
import NormalText from '../atoms/NormalText';
import TitleText from '../atoms/TitleText';
import ProjectPreview from '../molecules/ProjectPreview';
import ProjectInfo from '../molecules/ProjectInfo';
import ProjectNumber from '../atoms/ProjectNumber';

const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

const ShowcasesSection = () => {
  return (
    <Container>
      <TitleText label='Selected Projects' />
      <NormalText label='View All Projects' />
      <ProjectPreview />
    </Container>
  );
};

export default ShowcasesSection;
