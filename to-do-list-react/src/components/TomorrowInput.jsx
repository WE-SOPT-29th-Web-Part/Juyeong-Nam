import React, { useState } from 'react';
import styled from 'styled-components';

const TomorrowInput = ({tomorrowTodos, setTomorrowTodos}) => {
  const [inputValue, setInputValue] = useState('');
  const handleInput = () => {
    const newTodo = <li key={Date.now()}>
                      <span>{inputValue}</span>
                      <button onClick={(e) => e.target.parentElement.remove()} >X</button>
                    </li>;
    setTomorrowTodos([...tomorrowTodos, newTodo]);
    setInputValue('');
  }
  const handleChange = (e, setState) => {
    setState(e.target.value);
  }
  return (
    <StyleInput>
      <input type="text" onChange={(e) => handleChange(e, setInputValue)} onKeyPress={(e) => {if(e.key === 'Enter') {handleInput();}}} value={inputValue} />
      <button onClick={handleInput} >+</button>
    </StyleInput>
  );
};

export default TomorrowInput;

const StyleInput = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  input {
    width: 100%;
    border: 0;
    outline: 0;
    height: 40px;
    border-radius: 30px;
    padding: 10px;
    font-size: 15px;
  }
  button {
    background-color: transparent;
    margin-left: 10px;
    font-size: 20px;
  }
`;