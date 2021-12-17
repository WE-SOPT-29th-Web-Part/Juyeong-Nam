import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as AddImageIcon } from "../../asset/icons/add_image.svg";
import { imageClient } from "../../libs/api";

export default function PublishScreen({
  isPublishOpened,
  movePublishScreen,
  createArticle,
  onChange,
  summary,
  thumbnail,
  id,
}) {
  const [isImageSelected, setIsImageSelected] = useState(
    thumbnail ? true : false
  );
  const [imageSrc, setImageSrc] = useState(thumbnail ? thumbnail : "");
  const handleFileInput = async (e) => {
    const imageFile = e.target.files[0];
    if (e.target.files && imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIsImageSelected(true);
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(imageFile);
      const formData = new FormData();
      formData.append("file", imageFile);
      const imageResponse = await imageClient.post("", formData);
      const imageUrl = imageResponse.data.url;
      onChange("thumbnail", imageUrl);
    }
  };
  const publish = async () => {
    await createArticle();
  };
  const deleteThumbnail = () => {
    setIsImageSelected(false);
    onChange("thumbnail", "");
  };
  return (
    <StyledPublishScreen isPublishOpened={isPublishOpened}>
      <StyledTitle>포스트 미리보기</StyledTitle>
      <StyledImageEdit isImageSelected={isImageSelected}>
        <label htmlFor="file">재업로드</label>
        <span>·</span>
        <button onClick={deleteThumbnail}>삭제</button>
      </StyledImageEdit>
      <StyledThumbnail>
        <StyledAddImage>
          <AddImageIcon />
          <StyledHiddenFileInput
            type="file"
            id="file"
            onChange={(e) => handleFileInput(e)}
          />
          <StyledUploadButton htmlFor="file">썸네일 업로드</StyledUploadButton>
        </StyledAddImage>
        <StyledThumbnailImageWrapper isImageSelected={isImageSelected}>
          <StyledThumbnailImage src={imageSrc} />
        </StyledThumbnailImageWrapper>
      </StyledThumbnail>
      <StyledSummary
        value={summary}
        onChange={(e) => onChange("summary", e.target.value)}
        placeholder="당신의 포스트를 짧게 소개해보세요."
      />
      <StyledButtons>
        <StyledButton onClick={movePublishScreen} color="rgb(134, 142, 150)">
          취소
        </StyledButton>
        <StyledButton onClick={publish} color="rgb(18, 184, 134)">
          출간하기
        </StyledButton>
      </StyledButtons>
    </StyledPublishScreen>
  );
}

const StyledPublishScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(247, 249, 251);
  position: absolute;
  top: ${(props) => (props.isPublishOpened ? "0" : "100%")};
  left: 0;
  transition: all 0.2s ease-in 0s;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    width: 352px;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0px;
  width: 352px;
`;

const StyledImageEdit = styled.div`
  display: ${(props) => (props.isImageSelected ? "flex" : "none")};
  justify-content: flex-end;
  margin-bottom: 8px;
  & > * {
    font-size: 1rem;
    color: rgb(134, 142, 150);
  }
  & > label {
    cursor: pointer;
  }
  & > button {
    background: none;
    outline: none;
    border: none;
    padding: 0px;
  }
  & > *:first-child,
  & > *:last-child {
    text-decoration: underline;
  }
  & > span {
    margin: 0 8px;
  }
`;

const StyledThumbnail = styled.div`
  position: relative;
`;

const StyledAddImage = styled.div`
  width: 100%;
  height: 194px;
  background-color: rgb(234, 236, 240);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHiddenFileInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  display: none;
`;

const StyledUploadButton = styled.label`
  cursor: pointer;
  margin-top: 1rem;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 2%) 0px 0px 4px;
  font-size: 1rem;
  padding: 6px 20px;
  text-align: center;
  color: rgb(32, 201, 151);
  font-weight: 600;
  &:hover {
    background: rgb(244, 245, 247);
  }
`;

const StyledThumbnailImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 194px;
  display: ${(props) => (props.isImageSelected ? "block" : "none")};
`;

const StyledThumbnailImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledSummary = styled.textarea`
  margin-top: 24px;
  resize: none;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  line-height: 1.5;
  font-size: 0.875rem;
  height: 7.375rem;
  padding: 0.75rem 1rem;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const StyledButton = styled.button`
  background: ${(props) => props.color};
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 0px 1.125rem;
  height: 2.5rem;
  font-size: 1.125rem;
  margin: 0 5px;
`;
