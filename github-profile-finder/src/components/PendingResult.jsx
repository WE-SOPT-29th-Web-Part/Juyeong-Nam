import React from 'react';
import styled from 'styled-components';

const PendingResult = () => {
  return (
    <Root>
      <div></div>
    </Root>
  );
};

export default PendingResult;

const Root = styled.div`
  width: 50%;
  height: 300px;
  color: #fff; 
  text-align: center;
  position: relative;
  & > div {
    width: 70px;
    height: 70px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: spin 1s infinite;
  }
  @keyframes spin {
    100% { 
        transform: translate(-50%, -50%) rotate(360deg); 
    }
  }
`;