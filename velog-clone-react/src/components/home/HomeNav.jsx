import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HomeNav = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Nav>
      <Links>
        <LinkPost selected={selected} onClick={()=>(setSelected(0))} to="/">글</LinkPost>
        <LinkSeries selected={selected} onClick={()=>(setSelected(1))} to="/series">시리즈</LinkSeries>
      </Links>
      <BottomLine selected={selected} />
    </Nav>
    
  );
};

export default HomeNav;

const Nav = styled.nav`
  width: 256px;
  position: relative;
  margin: 72px 0;
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`;

const LinkPost = styled(Link)`
font-weight: 600;
font-size: 1.325rem;
  width: 128px;
  /* height: 48px; */
  text-align: center;
  color: ${props=>props.selected === 0 ? "rgb(32, 201, 151)" : "#333a3f"};
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    color:rgb(32, 201, 151);
  }
`;

const LinkSeries = styled(Link)`
font-weight: 600;
font-size: 1.325rem;
  width: 128px;
  /* height: 48px; */
  text-align: center;
  color: ${props=>props.selected === 1 ? "rgb(32, 201, 151)" : "#333a3f"};
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    color:rgb(32, 201, 151);
  }
`;

const BottomLine = styled.div`
  height: 2px;
  width: 128px;
  background-color:rgb(32, 201, 151);
  position: relative;
  left: ${props=>props.selected === 0 ? "0" : "128px"};
  transition: left 0.25s ease-in-out 0s;
`;

