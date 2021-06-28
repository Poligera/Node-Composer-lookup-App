const head = document.querySelector("head");
const body = document.querySelector("body");
const form = document.querySelector("form");
let composerName;
let composerData;
let url;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  composerName = e.target.name.value;
  url = `http://localhost:3000/?name=${composerName}`;
  fetchData();
});

const fetchData = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      composerData = data[0];
      console.log(composerData);
      addDataToDOM(composerData);
    })
    .catch((err) => console.warn("Oops, something went wrong!"));
};

function addDataToDOM(comp) {
  body.innerHTML = `<header>
<nav>
  <a href="./index.html">HOME</a>
</nav>
</header>
<main>
<section>
  <h1>COMPOSER INFO</h1>
  <img src=${comp.portraitURL} alt="composer photo" />
</section>
<table>
  <tbody>
    <tr>
      <td>FULL NAME</td>
      <td class="info" id="name">
      ${comp.fullName}
      </td>
    </tr>
    <tr>
      <td>YEARS</td>
      <td class="info" id="years">${comp.years}</td>
    </tr>
    <tr>
      <td>COUNTRY</td>
      <td class="info" id="country">${comp.country}</td>
    </tr>
    <tr>
      <td>NOTABLE WORKS</td>
      <td class="info" id="works">
      ${comp.works}
      </td>
    </tr>
    <tr>
      <td>MORE</td>
      <td class="info" >
        <a href=${comp.fullName}
          >LEARN MORE</a>
      </td>
    </tr>
  </tbody>
</table>
</main>
</body>`;
  head.insertAdjacentHTML(
    "beforeend",
    '<link rel="stylesheet" href="composers-style.css" />'
  );
}
