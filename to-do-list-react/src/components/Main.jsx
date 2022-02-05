import React, { useState } from 'react';
import Today from './Today';
import Tomorrow from './Tomorrow';
import styled from 'styled-components';

const Main = ({isToday, isTomorrow}) => {
  const [todayTodos, setTodayTodos] = useState([]);
  const [tomorrowTodos, setTomorrowTodos] = useState([]);
  return (
    <StyleMain>
      <Today isToday={isToday} todayTodos={todayTodos} setTodayTodos={setTodayTodos} />
      <Tomorrow isTomorrow={isTomorrow} tomorrowTodos={tomorrowTodos} setTomorrowTodos={setTomorrowTodos} />
    </StyleMain>
  );
};

export default Main;

const StyleMain = styled.main`
  background-color: #f3f4f5;
  display: flex;
  flex-grow: 1;
  height: 100%;
  section {
    ul {
      flex-grow: 1;
      width: 100%;
      padding: 0 20px;
      li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
        padding: 5px 0;
        margin: 5px 0;
        button {
          background-color: transparent;
        }
      }
    }
  }
`;