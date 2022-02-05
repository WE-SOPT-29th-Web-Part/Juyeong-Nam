import React, { useState } from "react";
import styled from "styled-components";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTags from "../components/write/ArticleTags";
import ArticleTitle from "../components/write/ArticleTitle";
import { client } from "../libs/api";
import PublishScreen from "../components/write/PublishScreen";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state;
  const [articleData, setArticleData] = useState(
    article ?? {
      title: "",
      body: "",
      summary: "",
      series: "",
      tags: [],
      thumbnail: "",
    }
  );
  const [isPublishOpened, setIsPublishOpened] = useState(false);

  const createArticle = async () => {
    if (article) {
      await client.patch(`article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    await client.post("/article", {
      ...articleData,
    });
    navigate("/");
  };

  const movePublishScreen = () => {
    if (isPublishOpened) {
      setIsPublishOpened(false);
    } else {
      setIsPublishOpened(true);
    }
  };

  const handleArticleData = (key, value) => {
    setArticleData((articleData) => ({
      ...articleData,
      [key]: value,
    }));
  };

  const handleTag = (e) => {
    if (e.key === "Enter") {
      const tempData = { ...articleData };
      tempData.tags = [...tempData.tags, e.target.value];
      setArticleData(tempData);
      e.target.value = "";
    }
  };

  const deleteTag = (e) => {
    const tempData = { ...articleData };
    tempData.tags = tempData.tags.filter((tag) => tag !== e.target.innerText);
    setArticleData(tempData);
  };

  return (
    <StyledWrite>
      <div>
        <ArticleTitle onChange={handleArticleData} title={articleData.title} />
        <Line />
        <ArticleTags
          tags={articleData.tags}
          onKeypress={handleTag}
          onClick={deleteTag}
        />
        <ArticleBody body={articleData.body} onChange={handleArticleData} />
        <ArticleFooter onClick={movePublishScreen} />
      </div>
      <PublishScreen
        summary={articleData.summary}
        thumbnail={articleData.thumbnail}
        id={articleData.id}
        isPublishOpened={isPublishOpened}
        movePublishScreen={movePublishScreen}
        onChange={handleArticleData}
        createArticle={createArticle}
      />
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
  position: relative;
`;

const Line = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  border-radius: 1px;
  margin: 1.5rem 48px 1rem 48px;
`;
