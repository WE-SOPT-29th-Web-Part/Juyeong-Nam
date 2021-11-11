import React from 'react';
import styled, {css} from 'styled-components';
import Input from './Input';

const Today = ({isToday}) => {
  return (
    <Todos isToday={isToday}>
      <h1>TODAY</h1>
      <ul>
      </ul>
      <Input />
    </Todos>
  );
};

export default Today;

const Todos = styled.section`
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 0px;
  visibility: hidden;
  transition: all ease-in 300ms;
  ${props => props.isToday === true &&
    css`
      width: 100%;
      visibility: visible;
      transition: all ease-in 300ms;
    `
  };
  h1 {
    margin: 30px 0;
  }
`;