"use strict";

const period = document.querySelector(".nav__period");
const dropdown = document.querySelector(".nav__dropdown");
const posts = document.querySelector(".posts");
const darkModeBtn = document.querySelector(".header__dark-mode-button input");

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

function toggleColorTheme(e) {
  if (e.target.checked) {
    localStorage.setItem("colorTheme", "dark");
    setColorTheme();
  } else {
    localStorage.setItem("colorTheme", "light");
    setColorTheme();
  }
  console.log("삐약");
}

function setColorTheme() {
  const colorTheme = localStorage.getItem("colorTheme");
  if (colorTheme && colorTheme === "dark") {
    document.body.classList.add("dark-theme");
    darkModeBtn.checked = true;
  } else {
    document.body.classList.remove("dark-theme");
    darkModeBtn.checked = false;
  }
}

period.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickDropdown);
posts.addEventListener("click", onClickPost);
darkModeBtn.addEventListener("click", toggleColorTheme);

setColorTheme();
