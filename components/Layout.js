import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
`;
const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
