const trivias = document.querySelector(".trivias")
/* 
`fetch` will not run when HTML files are loaded from `file://` 
so we need a basic webserver. For this example we will use
`http-server` from node

Install and run in terminal from `4-network-requests` folder with:
- npm i -g http
- http-server
*/
for (let i = 0; i < 10; i++) {
  fetch(`http://numbersapi.com/${i}/math`)
    .then((result) => result.text())
    .then((result) => {
      const trivia = document.createElement('li')
      trivia.innerText = result;
      trivias.appendChild(trivia);
    });
}
