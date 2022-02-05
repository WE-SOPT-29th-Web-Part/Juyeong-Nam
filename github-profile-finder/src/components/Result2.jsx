import React from 'react';
import PendingResult from './PendingResult';
import RejectedResult from './RejectedResult';
import Result from './Result';

const Result2 = ({setUserInfo, userInfo}) => {
  switch(userInfo.status) {
    case "idle" :
      return <></>;
    case "pending" :
      return <PendingResult />;
    case "resolved" :
      return <Result userInfo={userInfo.data} setUserInfo={setUserInfo} />;
    case "rejected" :
      return <RejectedResult />;
    default :
      return <></>;
  }
};

export default Result2;