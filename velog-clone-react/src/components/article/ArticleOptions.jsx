import React from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../libs/api";
import styled from "styled-components";

export default function ArticleOptions({ article }) {
  const navigate = useNavigate();
  const handleArticleDelete = async () => {
    await client.delete(`article/${article.id}`);
    navigate("/");
  };
  const navigateEditPage = async () => {
    navigate(`/article/edit/${article.id}`, { state: article });
  };
  return (
    <StyledArticleOptions>
      <button>통계</button>
      <button onClick={navigateEditPage}>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </StyledArticleOptions>
  );
}

const StyledArticleOptions = styled.div`
  & > * {
    color: rgb(134, 142, 150);
    font-size: 1rem;
  }
  & :not(& > *:last-child) {
    margin-right: 8px;
  }
`;
