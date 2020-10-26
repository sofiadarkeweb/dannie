const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

let cities;

function fetchCities() {
  return fetch(endpoint).then((response) => response.json());
}

input.addEventListener("input", function () {
  const matches = cities
    .filter((city) => city.city.toLowerCase().includes(this.value))
    .map((matchingCity) => {
      const regexp = new RegExp(this.value, "gi");
      const highlightedCity = matchingCity.city.replace(
        regexp,
        `<span class="hl">${this.value}</span>`
      );
      const html = `
            <li>
                <span class="name">${highlightedCity}, ${matchingCity.state}</span>
                <span class="population">${matchingCity.population}</span>
            </li>
        `;

      return html;
    })
    .join("");

  suggestions.innerHTML = matches;
});

fetchCities().then((response) => {
  cities = response;
});
