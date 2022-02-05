import React, { useState, useEffect } from 'react';
import { client } from '../../libs/api'
import ArticleCard from './ArticleCard';
import styled from 'styled-components';

const ArticlesContainer = () => {
  const [articleData, setArticleData] = useState([]);
  const getArticleData = async () => {
    const { data } = await client.get("/article");
    setArticleData(data);
    console.log('data', data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <Posts>
      {articleData.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Posts>
  );
};

export default ArticlesContainer;

const Posts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 768px;
`;