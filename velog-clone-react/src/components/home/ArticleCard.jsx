import React from 'react';
import styled from 'styled-components';

const ArticleCard = ({article}) => {
  const {id, title, body, summary, series, tags, thumbnail, date} = article;
  return (
    <Article>
      {thumbnail === "" ? <></> : <ImgWrapper>
        <img src={thumbnail} alt="" />
      </ImgWrapper>}
      <h3>{title}</h3>
      <p>{summary}</p>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      <Date>{date}</Date>
    </Article>
  );
};

export default ArticleCard;

const Article = styled.article`
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 64px 0 64px 0;
  width: 768px;
  p{
    margin: 8px 0 32px 0;
    font-size: 1rem;
    color: rgb(73, 80, 87);
  }
  span{
    margin-bottom: 0.875rem;
    background: rgb(241, 243, 245);
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.875rem;
    color: rgb(12, 166, 120);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
  }
`;

const ImgWrapper = styled.div`
  height: 402px;
  width: 100%;
  margin-bottom: 16px;
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Date = styled.div`
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
  margin-top: 16px;
`;