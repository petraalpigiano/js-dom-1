const lightOnbButtonEl = document.getElementById("light-on-button");
const lightOnbEl = document.querySelector(".d-none");
const lightOffbEl = document.querySelector(".light-off");

lightOnbButtonEl.addEventListener("click", function () {
  lightOffbEl.style.display = "none";
  lightOnbEl.classList.remove("d-none");
  lightOnbEl.classList.add("d-inline-block");
});
