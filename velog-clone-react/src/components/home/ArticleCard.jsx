import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageWrapper from "../common/ImageWrapper";

const ArticleCard = ({ article }) => {
  const { title, summary, tags, thumbnail, date } = article;
  return (
    <StyledArticleCard>
      <Link to={`article/${article.id}`} state={article}>
        {thumbnail && (
          <ImageWrapper ratio="56%">
            <img src={thumbnail} alt="" />
          </ImageWrapper>
        )}
        <h3>{title}</h3>
      </Link>
      <p>{summary}</p>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      <Date>{date}</Date>
    </StyledArticleCard>
  );
};

export default ArticleCard;

const StyledArticleCard = styled.article`
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 64px 0 64px 0;
  width: 768px;
  p {
    margin: 8px 0 32px 0;
    font-size: 1rem;
    color: rgb(73, 80, 87);
  }
  span {
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
  a {
    text-decoration: none;
  }
  a:active,
  a:visited,
  a:link {
    color: #22262b;
  }
`;

const Date = styled.div`
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
  margin-top: 16px;
`;
