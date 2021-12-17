import React from "react";
import { useLocation } from "react-router-dom";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import styled from "styled-components";

export default function Article() {
  const location = useLocation();
  const article = location.state;
  const { title, body, thumbnail, date, tags } = article;
  return (
    <div>
      <Header />
      <StyledArticle>
        <StyledTitle>{title}</StyledTitle>
        <StyledWrapper>
          <div>
            <span>남주영</span>
            <span> · {date}</span>
          </div>
          <ArticleOptions article={article} />
        </StyledWrapper>
        <StyledTags>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </StyledTags>
        {thumbnail && (
          <StyledImageWrapper>
            <img src={thumbnail} alt="thumbnail" />
          </StyledImageWrapper>
        )}
        <div>{body}</div>
      </StyledArticle>
      <Profile />
    </div>
  );
}

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1024px;
`;

const StyledTitle = styled.h1`
  margin-top: 5.5rem;
  font-size: 3rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 32px;
  font-size: 1rem;
  & span:first-child {
    font-weight: bold;
  }
`;

const StyledTags = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  span {
    font-size: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2rem;
    border-radius: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background: rgb(241, 243, 245);
    color: rgb(12, 166, 120);
    margin-right: 0.75rem;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    margin-bottom: 0.75rem;
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  & > img {
    object-fit: cover;
    width: 100%;
  }
`;
