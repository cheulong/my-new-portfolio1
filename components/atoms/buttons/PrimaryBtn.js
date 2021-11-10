import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  cursor: pointer;
  p.mainText {
    position: absolute;
    font-size: 18px;
    transform: translate(0%);
    transition: 0.3s ease-out;
  }
  &:hover {
    p.mainText {
      position: absolute;
      font-size: 18px;
      color: #fff;
      transform: translate(19px, 0%);
      transition: 0.3s ease-out;
    }
  }
`;

const Button = styled.div`
  border: none;
  background: #c4c4c4;
  padding: 5px;
  margin: 0 16px;
  height: 50px;
  transition: 0.3s ease-out;

  &:hover {
    background: #7a7a7a;
    transition: 0.3s ease-out;
  }
  p {
    font-size: 18px;
    opacity: 0;
  }
`;

const PrimaryBtn = ({ label }) => {
  return (
    <Container>
      <p className='mainText'>{label}</p>
      <Button>
        <p>{label}</p>
      </Button>
    </Container>
  );
};

export default PrimaryBtn;
