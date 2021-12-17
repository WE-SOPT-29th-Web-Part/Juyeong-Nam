import React from "react";
import styled from "styled-components";

const ArticleBody = ({ body, onChange }) => {
  return (
    <Body>
      <textarea
        value={body}
        placeholder="당신의 이야기를 적어보세요 . . ."
        onChange={(e) => onChange("body", e.target.value)}
      />
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
