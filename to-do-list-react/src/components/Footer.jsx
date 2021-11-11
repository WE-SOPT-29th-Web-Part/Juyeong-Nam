import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyleFooter>
      SOPT 29th WEB Part
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styled.footer`
  background-color: #b7f4ff;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
`;