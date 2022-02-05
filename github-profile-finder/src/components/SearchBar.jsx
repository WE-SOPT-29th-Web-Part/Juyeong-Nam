import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ setUserInfo }) => {
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserInfo((currentUserInfo) => ({...currentUserInfo, status: "pending"}));
    
    try{
      const { data } = await axios.get(`https://api.github.com/users/${user}`);   
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data,
        status: "resolved"
      }));
    }catch (error) {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data: null,
        status: "rejected"
      }));
      console.log(error);
    }
    setUser("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={user} onChange={handleChange} type="text" placeholder="Github 프로필을 검색해보세요." />
    </form>
  );
};

export default SearchBar;

const Input = styled.input`
  width: 320px;
  height: 57px;
  padding: 16px;
  color: rgb(229, 230, 231);
  background-color: rgb(36, 39, 43);
  outline: none;
  border: 8px solid rgb(149, 151, 153);
  border-radius: 20px;
`;