"use strict"

const input = document.querySelector(".tags__input");
const tags = document.querySelector(".tags");

let tagArr = [];

input.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") {
    return;
  }

  if (tagArr.includes(e.target.value)) {
    e.target.value = "";
    return;
  }
  
  const tag = document.createElement("span");
  tag.setAttribute("class", "tag");
  tag.innerText = e.target.value;
  tags.insertBefore(tag, input);
  tagArr.push(e.target.value);
  e.target.value = "";

  tag.addEventListener("click", (e) => {
    tag.remove();
    tagArr = tagArr.filter((tag) => tag !== e.target.innerText);
  });
});