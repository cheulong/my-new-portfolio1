import styled from 'styled-components';
import NormalText from '../atoms/NormalText';

const Container = styled.div``;
const Thumbnail = styled.div`
  background: gray;
  width: 100px;
  height: 100px;
`;
const ItemWrapper = styled.div``;
const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DetailWrapper = styled.div`
  margin: 5px 10px;
  align-items: flex-start;
`;
function BlogPreview() {
  return (
    <Container>
      <ItemWrapper>
        <ItemContainer>
          <Thumbnail />
          <DetailWrapper>
            <NormalText label='title' />
            <NormalText label='description' />
          </DetailWrapper>
        </ItemContainer>
        <ItemContainer>
          <Thumbnail />
          <DetailWrapper>
            <NormalText label='title' />
            <NormalText label='description' />
          </DetailWrapper>
        </ItemContainer>
        <ItemContainer>
          <Thumbnail />
          <DetailWrapper>
            <NormalText label='title' />
            <NormalText label='description' />
          </DetailWrapper>
        </ItemContainer>
      </ItemWrapper>
    </Container>
  );
}

export default BlogPreview;
