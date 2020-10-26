const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("fill");
  });

  const button = box.querySelector("button");

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    box.remove();
  });
});
