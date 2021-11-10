import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  bottom: 50px;
  right: 30px;
  font-style: italic;
  .first {
    position: absolute;
  }
  .second {
    position: absolute;
    top: 10px;
    left: 20px;
  }
  .third {
    position: absolute;
    top: 20px;
    left: 30px;
  }
`;

const ProjectNumber = () => {
  return (
    <Container>
      <span className='first'>1</span>
      <span className='second'>/</span>
      <span className='third'>3</span>
    </Container>
  );
};

export default ProjectNumber;
