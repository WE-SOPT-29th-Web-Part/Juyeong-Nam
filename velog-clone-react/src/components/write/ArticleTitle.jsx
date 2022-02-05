import React from "react";
import styled from "styled-components";

const ArticleTitle = ({ onChange, title }) => {
  return (
    <Textarea
      value={title}
      placeholder="제목을 입력하세요."
      onChange={(e) => onChange("title", e.target.value)}
    ></Textarea>
  );
};

export default ArticleTitle;

const Textarea = styled.textarea`
  display: block;
  margin: 0 48px;
  padding: 0px;
  font-size: 2.75rem;
  width: 100%;
  height: 65px;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: rgb(33, 37, 41);
  background-color: inherit;
  overflow: hidden;
`;
