import React from 'react';
import styled from 'styled-components';

const Nav = ({setIsToday, setIsTomorrow}) => {
  return (
    <StyleNav>
      <button onClick={() => {setIsToday(true); setIsTomorrow(false);}} >TODAY</button>
      <button onClick={() => {setIsToday(false); setIsTomorrow(true);}}>TOMORROW</button>
      <button onClick={() => {setIsToday(true); setIsTomorrow(true);}}>ALL</button>
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