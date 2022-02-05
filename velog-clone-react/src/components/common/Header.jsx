import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as SearchIcon } from "../../asset/icons/search.svg"
import { ReactComponent as ArrowIcon } from "../../asset/icons/arrow_down.svg"
import profileImg from "../../asset/images/profile.png";

const Header = () => {
  const [isHover, setIsHover] = useState("#96989b");
  return (
    <StyledHeader>
      <StyledTitle>
        JYlog
      </StyledTitle>
      <StyledNav>
        <SearchIcon height="30px" width="30px" />
        <StyledLink to="/write">
          새 글 작성
        </StyledLink>
        <Profile>
          <img src={profileImg} alt="" />
          <ArrowIcon onMouseOver={() => (setIsHover("#333a3f"))} onMouseLeave={() => (setIsHover("#96989b"))} fill={isHover}/>
        </Profile>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 1024px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333a3f;
`;

const StyledTitle = styled.div`
  font-size: 30px;
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 97px;
    border: 1px solid #333a3f;
  border-radius: 50px;
  font-size: 16px;
  padding: 0 15px;
  background-color: white;
  height: 32px;
  line-height: 32px;
  margin: 0 20px;
  font-weight: bold;
  color: #333a3f;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
      background-color: #333a3f;
      color: white;
    }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100px;
    margin-right: 4px;
  }
`;