import styled from 'styled-components';

const Container = styled.div`
  font-size: 16px;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const SmallText = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SmallText;
