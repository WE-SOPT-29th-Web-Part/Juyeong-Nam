"use strict";

const period = document.querySelector(".nav__period");
const dropdown = document.querySelector(".nav__dropdown");
const posts = document.querySelector(".posts");
const slideLeftBtn = document.querySelector(".main__slide-btn-left");
const slideRightBtn = document.querySelector(".main__slide-btn-right");

let startPost = 0;
const postsNum = posts.children.length;

let postsWidth = 1056;

function onClickPeriod() {
  dropdown.classList.toggle("visible");
}

function onClickDropdown(e) {
  dropdown
    .querySelectorAll("li")
    .forEach((li) => li.classList.remove("active"));
  e.target.classList.add("active");
  period.querySelector("span").innerText = e.target.innerHTML;
}

function onClickPost(e) {
  const clickedPost = e.target.closest("article");

  const background = document.createElement("div");
  const modal = document.createElement("article");
  const modalBtn = document.createElement("button");

  background.setAttribute("class", "post__modal-background");
  modal.setAttribute("class", "post__modal");
  modalBtn.setAttribute("class", "post__modal-btn material-icons");
  modalBtn.innerText = "close";
  modal.innerHTML = clickedPost.innerHTML;

  background.appendChild(modal);
  background.appendChild(modalBtn);
  document.body.appendChild(background);

  document.body.style.overflow = "hidden";
  modalBtn.addEventListener("click", () => {
    background.remove();
    document.body.style.overflow = "visible";
  });
}

function isEndSlide() {
  const lastPage = Math.floor(postsNum / shownPostNum);
  if (Math.floor((startPost + 1) / shownPostNum) === lastPage) return true;
  return false;
}

function getPostWidth() {
  return Number(window.getComputedStyle(posts).width.slice(0, -2));
}

function movePost() {
  const currentPage = Math.floor(startPost / shownPostNum);
  posts.style.marginLeft = `-${getPostWidth() * currentPage}px`;
}

function onClickSlide(e) {
  if (e.target === slideLeftBtn) {
    if (startPost === 0) return;
    startPost -= shownPostNum;
  } else if (e.target === slideRightBtn) {
    if (isEndSlide()) return;
    startPost += shownPostNum;
  }
  movePost();
}

function onResizeWindow() {
  if (window.innerWidth <= 753) {
    shownPostNum = 1;
    movePost();
  } else if (window.innerWidth <= 1042) {
    shownPostNum = 2;
    movePost();
  } else {
    shownPostNum = 3;
    movePost();
  }
}

period.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickDropdown);

posts.addEventListener("click", onClickPost);

slideLeftBtn.addEventListener("click", onClickSlide);
slideRightBtn.addEventListener("click", onClickSlide);

let shownPostNum;
if (window.innerWidth <= 753) {
  shownPostNum = 1;
} else if (window.innerWidth <= 1042) {
  shownPostNum = 2;
} else {
  shownPostNum = 3;
}
window.addEventListener("resize", onResizeWindow);
