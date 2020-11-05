import "../scss/main.scss"; /*dont  delete this code line*/

import moment from "moment";
/*pobranie repozytorium do html*/
fetch("https://api.github.com/users/kamilMalinowski/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const repositoryList = document.querySelector(".list--js");
      const { name, html_url } = repo;
      const myTemplate = 
      `<li class="list__element">${name} <a class="link" href="${html_url}" title="link do repozytorium ${name} na githubie">link do githuba</a></li>`;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("nie udało się pobrać");
  });

/*zadanie domowe wtf tydzień VI - hamburger*/
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

console.log(hamburger);

/*document.documentElement.style.setProperty('--zmienna', 'wartość') - darkmmode*/
let isDark = false;

const switchModes = document.querySelector(".darkmode");

switchModes.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty(
      "--bacground1",
      "rgb(250, 255, 238)"
    );
    document.documentElement.style.setProperty("--color-black", "black");
    document.documentElement.style.setProperty("--color-termina", "#686a6b");
    document.documentElement.style.setProperty("--color-js", "#f7df1e");
    document.documentElement.style.setProperty("--color-css", "#58a3e6");
    document.documentElement.style.setProperty("--color-html", "#ff761e");
    document.documentElement.style.setProperty("--link-color", "#ff75bb");
    document.documentElement.style.setProperty("--color-gray", "#333333");
    document.documentElement.style.setProperty("--color-darkpurple", "#796db3");
    document.documentElement.style.setProperty("--color-purple", "#a38fff");
    document.documentElement.style.setProperty("--color-green", "#daff82");
    document.documentElement.style.setProperty("--dot", "white");
    document.documentElement.style.setProperty("--click-menu-button", "white");
    isDark = false;
  } else {
    document.documentElement.style.setProperty(
      "--bacground1",
      "rgb(17, 17, 17)"
    );
    document.documentElement.style.setProperty("--color-black", "white");
    document.documentElement.style.setProperty("--color-termina", "#000000");
    document.documentElement.style.setProperty("--color-js", "#443d07");
    document.documentElement.style.setProperty("--color-css", "#26425c");
    document.documentElement.style.setProperty("--color-html", "#442009");
    document.documentElement.style.setProperty("--link-color", "#834664");
    document.documentElement.style.setProperty("--color-gray", "#d3cbcb");
    document.documentElement.style.setProperty("--color-darkpurple", "#29253a");
    document.documentElement.style.setProperty("--color-purple", "#6e6591");
    document.documentElement.style.setProperty("--color-green", "#2b331a");
    document.documentElement.style.setProperty("--dot", "black");
    document.documentElement.style.setProperty("--click-menu-button", "grey");
    isDark = true;
  }
});

// const time = moment().endOf("week").fromNow();
// const timePlaceholder = document.querySelector(".time--js");
// timePlaceholder.innerHTML = time;


