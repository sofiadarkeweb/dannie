const list = document.querySelector(".list")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    const item = document.createElement("li")
    item.innerText = Math.floor(Math.random() * 10);
    list.appendChild(item)
})
