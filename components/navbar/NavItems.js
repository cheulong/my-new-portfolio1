import React from 'react';
import styled from 'styled-components';
import { navItem } from './NavItem.content';

const List = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 70px;
`;
const ListItem = styled.li`
  list-style: none;
  color: #fff;
  a {
    cursor: pointer;
    font-size: 70px;
    padding: 25px;
    font-weight: 700;
    text-align: center;
    transform: translateX(-8%);
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    display: block;
    &:hover {
      color: #d64d0e;
      text-decoration: underline;
    }
  }
`;

const NavItems = () => {
  return (
    <List>
      {navItem.map((item, index) => (
        <ListItem key={index}>
          <a>{item.text}</a>
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
