let activeCircles = 1;
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
  if (activeCircles > 1) {
    activeCircles--;
  }

  update();
});

nextBtn.addEventListener("click", () => {
  if (activeCircles < 4) {
    activeCircles++;
  }

  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < activeCircles) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  console.log(activeCircles, circles.length);
  progressBar.style.width = `${
    ((activeCircles - 1) / (circles.length - 1)) * 100
  }%`;

  if (activeCircles === 1) {
    prevBtn.disabled = true;
  } else if (activeCircles === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

// const goToNext = () => {

// };
