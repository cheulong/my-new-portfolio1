import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  width: 120px;
  p.mainText {
    position: absolute;
    font-size: 14px;
    transform: translate(0%);
    transition: 0.3s ease-out;
  }
  &:hover {
    p.mainText {
      position: absolute;
      font-size: 14px;
      color: #fff;
      transform: translate(19px, 0%);
      transition: 0.3s ease-out;
    }
  }
`;

const Button = styled.div`
  border: none;
  text-align: center;
  font-size: 14px;
  background: #c4c4c4;
  padding: 5px;
  transition: 0.3s ease-out;

  &:hover {
    text-decoration: underline;
    background: #7a7a7a;
    color: #fff;
    font-weight: bold;
    transition: 0.3s ease-out;
  }
  p {
    font-size: 14px;
  }
`;

const SeeMoreBtn = ({ label }) => {
  return (
    <Container>
      {/* <p className='mainText'>{label}</p> */}
      <Button>{label}</Button>
    </Container>
  );
};

export default SeeMoreBtn;
