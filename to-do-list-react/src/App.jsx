import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  const [isToday, setIsToday] = useState(true);
  const [isTomorrow, setIsTomorrow] = useState(true);
  return (
    <StyleApp>
      <Header />
      <Nav setIsToday={setIsToday} setIsTomorrow={setIsTomorrow} />
      <Main isToday={isToday} isTomorrow={isTomorrow} />
      <Footer />
    </StyleApp>
  );
}

export default App;

const StyleApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;