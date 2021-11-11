import React from 'react';
import styled, {css} from 'styled-components';
import TomorrowInput from './TomorrowInput';

const Tomorrow = ({isTomorrow, tomorrowTodos, setTomorrowTodos}) => {
  return (
    <StyleTomorrow isTomorrow={isTomorrow}>
      <h1>TOMORROW</h1>
      <ul>
        {tomorrowTodos}
      </ul>
      <TomorrowInput tomorrowTodos={tomorrowTodos} setTomorrowTodos={setTomorrowTodos} />
    </StyleTomorrow>
  );
};

export default Tomorrow;

const StyleTomorrow = styled.section`
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