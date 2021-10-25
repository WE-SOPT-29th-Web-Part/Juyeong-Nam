"use strict"

const period = document.querySelector(".nav__period");
const dropdown = document.querySelector(".nav__dropdown");
const posts = document.querySelector(".posts");
// const main = document.querySelector(".main");
const slideLeftBtn = document.querySelector(".main__slide-btn-left");
const slideRightBtn = document.querySelector(".main__slide-btn-right");

let currentSlideNum = 1; 
const slideNum = Math.ceil(posts.children.length / 3);

function onClickPeriod() {
  dropdown.classList.toggle("visible");
}

function onClickDropdown(e) {
  dropdown.querySelectorAll("li").forEach(li => li.classList.remove("active"));
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

function onClickSlide(e) {
  if(e.target === slideLeftBtn) {
    if(currentSlideNum === 1) return;
    currentSlideNum--;
  }else if(e.target === slideRightBtn) {
    if(currentSlideNum === slideNum) return;
    currentSlideNum++;
  }
  posts.style.marginLeft = `-${1056 * (currentSlideNum-1)}px`;
}

period.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickDropdown);

posts.addEventListener("click", onClickPost);

slideLeftBtn.addEventListener("click", onClickSlide);
slideRightBtn.addEventListener("click", onClickSlide);