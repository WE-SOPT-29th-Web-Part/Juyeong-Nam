import Title from "./components/Title"
import SearchBar from "./components/SearchBar"
import Result2 from "./components/Result2"
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [userInfo, setUserInfo] = useState({data: null, status: "idle"});
  
  return (
    <Root className="App">
      <Title />
      <SearchBar setUserInfo={setUserInfo}/>
      <Result2 userInfo={userInfo} setUserInfo={setUserInfo}/>
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
