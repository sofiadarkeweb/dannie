const list = document.querySelector(".list");

function renderOneHundredThousandSpans() {
  for (let i = 0; i < 100000; i++) {
    const span = document.createElement("span");
    span.innerText = i;
    list.appendChild(span);
  }
}

renderOneHundredThousandSpans();
