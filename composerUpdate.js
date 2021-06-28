import { composerData } from "./index";

const portrait = document.querySelector("img").src;
const nameCell = document.querySelector("#name");
const years = document.querySelector("#years");
const country = document.querySelector("#country");
const works = document.querySelector("#works");
const link = document.querySelector(".info-url").href;

function addDataToDOM(composerObj) {
  portrait = composerObj.portraitURL;
  nameCell.textContent = composerObj.fullName;
  years.textContent = composerObj.years;
  country.textContent = composerObj.country;
  works.textContent = composerObj.works;
  link = composerObj.url;
}

addDataToDOM(composerData);

// export composerDa from "./composerUpdate.js";
