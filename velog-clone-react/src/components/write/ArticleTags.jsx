import React from "react";
import styled from "styled-components";

const ArticleTags = ({ tags, onKeypress, onClick }) => {
  return (
    <StyledTags>
      {tags.map((tag) => (
        <span key={tag} onClick={(e) => onClick(e)}>
          {tag}
        </span>
      ))}
      <input
        type="text"
        onKeyPress={(e) => onKeypress(e)}
        placeholder="태그를 입력하세요"
      />
    </StyledTags>
  );
};

export default ArticleTags;

const StyledTags = styled.div`
  display: flex;
  width: 100%;
  padding: 0 48px;
  input {
    outline: none;
    cursor: text;
    font-size: 1.125rem;
    line-height: 2rem;
    margin-bottom: 0.75rem;
    min-width: 8rem;
    border: none;
  }
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
