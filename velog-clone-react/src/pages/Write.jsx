import React, { useState } from 'react';
import styled from 'styled-components';
import ArticleBody from '../components/write/ArticleBody';
import ArticleFooter from '../components/write/ArticleFooter';
import ArticleTags from '../components/write/ArticleTags';
import ArticleTitle from '../components/write/ArticleTitle';
import { client } from '../libs/api';
import { Link } from 'react-router-dom';

const Write = () => {

  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    series: "",
    tags: [],
    thumbnail: "",
    date: ""
  });

  const createArticle = async () => {
    const {data} = await client.get('/article');
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`;
    await client.post('/article', {...articleData, id, date, summary: "요약입니다."});
  }

  const handlePost = async () => {
    await createArticle();
  };

  return (
    <StyledWrite>
      <ArticleTitle setArticleData={setArticleData} />
      <Line />
      <ArticleTags tags={articleData.tags} articleData={articleData} setArticleData={setArticleData} />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter >
        <Link to="/" >
          <button onClick={handlePost}>출간하기</button>
        </Link>
      </ArticleFooter>
      
    </StyledWrite>
  );
};

export default Write;

const StyledWrite = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 32px;
  background-color: white;
  overflow: hidden;
`;

const Line = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  border-radius: 1px;
  margin: 1.5rem 48px 1rem 48px;
`;