const inputFieldOne = document.querySelector("#firstInput")
const inputFieldTwo = document.querySelector("#secondInput")
const button = document.querySelector("#button")
const result = document.querySelector("#result")

button.addEventListener("click", () => {
    const calculatedValue = inputFieldOne.value + inputFieldTwo.value
    result.innerText = calculatedValue
})
