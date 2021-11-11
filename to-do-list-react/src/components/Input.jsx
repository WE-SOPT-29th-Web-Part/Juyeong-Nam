import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyleInput>
      <input type="text" />
      <button>+</button>
    </StyleInput>
  );
};

export default Input;

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