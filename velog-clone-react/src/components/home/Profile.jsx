import React from 'react';
import profileImg from "../../asset/images/profile.png";
import styled from 'styled-components';

const Profile = () => {
  return (
    <StyledProfile>
      <img src={profileImg} alt="" />
      <Text>
        <div>나무주영</div>
        <div>무럭무럭 자라라🌳</div>
      </Text>
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 90px;
  width: 768px;
  height: 150px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e6e4e4;
  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
`;

const Text = styled.div`
  margin-left: 16px;
  & > div:first-child {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
    color: rgb(33, 37, 41);
  }
  & > div:last-child {
    white-space: pre-wrap;
    font-size: 1.125rem;
    line-height: 1.5;
    margin-top: 0.25rem;
    color: rgb(73, 80, 87);
    letter-spacing: -0.004em;
  }
`;