import styled from 'styled-components';
import NormalText from '../atoms/NormalText';
import TitleText from '../atoms/TitleText';
import ExperimentsItem from '../molecules/ExperimentsItem';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

function ExperimentsSection() {
  return (
    <Container>
      <TitleText label='Experiments & Open Sources' />
      <NormalText label='View All' />
      <ExperimentsItem />
    </Container>
  );
}

export default ExperimentsSection;
