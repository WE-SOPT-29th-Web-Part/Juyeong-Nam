const period = document.querySelector(".nav__period");
const dropdown = document.querySelector(".nav__dropdown");

function onClickDropdown(e) {
  dropdown.querySelectorAll("li").forEach(li => li.classList.remove("active"));
  e.target.classList.add("active");
  period.querySelector("span").innerText = e.target.innerHTML;
}

function onClickPost(e) {
  const post = e.target.closest("article");
  console.dir(post);
  console.log("event");
}

period.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickPeriod);
dropdown.addEventListener("click", onClickDropdown);