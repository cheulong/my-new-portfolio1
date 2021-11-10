import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
`;

const TitleText = ({ label }) => {
  return (
    <>
      <Title>{label}</Title>
    </>
  );
};

export default TitleText;
