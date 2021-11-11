import React from 'react';
import styled, {css} from 'styled-components';
import Input from './Input';

const Tomorrow = ({isTomorrow}) => {
  return (
    <Todos isTomorrow={isTomorrow}>
      <h1>TOMORROW</h1>
      <ul>
      </ul>
      <Input />
    </Todos>
  );
};

export default Tomorrow;

const Todos = styled.section`
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 0px;
  visibility: hidden;
  transition: all ease-in 300ms;
  ${props => props.isTomorrow === true &&
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