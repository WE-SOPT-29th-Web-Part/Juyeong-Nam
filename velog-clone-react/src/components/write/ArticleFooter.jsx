import React from 'react';
import styled from 'styled-components';

const ArticleFooter = ({children}) => {
  return (
    <Footer>
      {children}
    </Footer>
  );
};

export default ArticleFooter;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 64px;
  box-shadow: 0 0 4px 1px rgb(240, 239, 239);
  display: flex;
  align-items: center;
  button {
    background-color: rgb(18, 184, 134);
    height: 40px;
    width: 120px;
    border-radius: 7px;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
    color: white;
  }
`;

