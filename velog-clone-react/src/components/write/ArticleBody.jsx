import React from 'react';
import styled from 'styled-components';

const ArticleBody = ({setArticleData}) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value
    }));
  };
  return (
    <Body>
      <textarea placeholder="당신의 이야기를 적어보세요 . . ." onChange={handleChange} />
    </Body>
  );
};

export default ArticleBody;

const Body = styled.div`
  flex: 1 1 0%;
    min-height: 0px;
    display: flex;
    padding: 0 48px;
    textarea {
      border: none;
      outline: none;
      cursor: text;
      resize: none;
      font-size: 1.125rem;
      width: 100%;
      
    }
`;

