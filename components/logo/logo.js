import styled from 'styled-components';

const logoImg = '/logo.svg';
const LogoStyle = styled.img``;
function Logo() {
  return (
    <div>
      <LogoStyle src={logoImg} alt={logoImg} />
    </div>
  );
}

export default Logo;
