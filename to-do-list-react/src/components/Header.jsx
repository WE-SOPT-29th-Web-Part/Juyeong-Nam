import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyleHeader>
      <h1>TO DO LIST</h1>
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.header`
  height: 50px;
  background-color: #b7f4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  h1 {
    font-size: 32px;
    text-align: center;
    /* color: #3e4647; */
    color: black;
  }
`;