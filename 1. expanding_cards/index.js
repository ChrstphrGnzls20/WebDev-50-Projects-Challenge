document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("panel")) {
    return;
  }
  document.querySelectorAll(".panel").forEach((element) => {
    element.classList.remove("active");
  });

  event.target.classList.add("active");
});
