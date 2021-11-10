import { useState } from 'react';
import styled from 'styled-components';

const menuBar = `
  height: 3px;
  margin: 5px 0;
  border-radius: 25px;
  transition: 0.3s;
  background: black;
`;

const Container = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
`;

const Navbar = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    &.one {
      ${menuBar}
      width: 50px;
      &.active {
        transform: rotate(45deg) translateX(4px) translateY(14px);
        width: 45px;
        padding-left: 5px;
      }
    }
    &.two {
      ${menuBar}
      width: 30px;
      &.active {
        transform: rotate(0deg) translateX(0) translateY(0);
        width: 0;
      }
    }
    &.three {
      ${menuBar}
      width: 40px;
      &.active {
        transform: rotate(-45deg) translateX(4px) translateY(-16px);
        width: 45px;
        padding-left: 5px;
      }
    }
  }
  &:hover {
    div {
      &.one {
        &:not(.active) {
          ${menuBar}
          width: 50px;
        }
      }
      &.two {
        &:not(.active) {
          ${menuBar}
          width: 50px;
        }
      }
      &.three {
        &:not(.active) {
          ${menuBar}
          width: 50px;
        }
      }
    }
  }
`;
function HamburgerBtn({ isActive, setIsActive }) {
  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    // var one = document.getElementsByClassName('one');
    // var two = document.getElementsByClassName('two');
    // var three = document.getElementsByClassName('three');
    // var menu = document.getElementById('nav');
    // if (isMenu) {
    //   menu.style.display = 'none';
    //   one[0].classList.remove('trigger');
    //   two[0].classList.remove('trigger');
    //   three[0].classList.remove('trigger');
    // } else {
    //   menu.style.display = 'inline';
    //   one[0].classList.add('trigger');
    //   two[0].classList.add('trigger');
    //   three[0].classList.add('trigger');
    // }
    // setIsMenu((prevState) => ({ ...prevState, isMenu: !prevState.isMenu }));
  };

  return (
    <Container>
      <Navbar onClick={toggleMenu}>
        <div className={`one ${isActive ? 'active' : ''}`}></div>
        <div className={`two ${isActive ? 'active' : ''}`}></div>
        <div className={`three ${isActive ? 'active' : ''}`}></div>
      </Navbar>
    </Container>
  );
}

export default HamburgerBtn;
