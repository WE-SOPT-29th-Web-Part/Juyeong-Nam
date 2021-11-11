import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyleNav>
      <button>TODAY</button>
      <button>TOMORROW</button>
      <button>ALL</button>
    </StyleNav>
  );
};

export default Nav;

const StyleNav = styled.nav`
  text-align: center;
  margin: 10px 0;
  button {
    /* background-color: #4e6164; */
    background-color: black;
    border: 0;
    color: white;
    padding: 8px 10px;
    margin: 0 10px;
    font-size: 20px;
  }
`;