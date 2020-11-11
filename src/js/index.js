import "../scss/main.scss"; /*dont  delete this code line*/

import moment from "moment";
/*pobranie repozytorium do html*/
fetch("https://api.github.com/users/kamilMalinowski/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const repositoryList = document.querySelector(".list--js");
      const { name, html_url } = repo;
      const myTemplate = `<li class="list__element">${name} <a class="link" href="${html_url}" title="link do repozytorium ${name} na githubie">link do githuba</a></li>`;
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

const switchModes = document.querySelector(".darkmode--js");

switchModes.addEventListener("click", () => {

  if (isDark) {
    document.documentElement.style.setProperty("--color-lightGreen", "#daff82");
    document.documentElement.style.setProperty("--color-purple", "#a38fffa6b");
    document.documentElement.style.setProperty("--color-orange", "#ffd475");
    document.documentElement.style.setProperty("--color-pink", "#e86bab");
    document.documentElement.style.setProperty("--color-green", "#75ffc2");

    document.documentElement.style.setProperty("--color-gray", "#333333");
    document.documentElement.style.setProperty("--color-bg", "#faffee");

    isDark = false;
  } else {
    document.documentElement.style.setProperty("--color-lightGreen", "#333333");
    document.documentElement.style.setProperty("--color-purple", "#333333");
    document.documentElement.style.setProperty("--color-orange", "#333333");
    document.documentElement.style.setProperty("--color-pink", "#75ffc2");
    document.documentElement.style.setProperty("--color-green", "#333333");

    document.documentElement.style.setProperty("--color-gray", "#faffee");
    document.documentElement.style.setProperty("--color-bg", "#333333");

    isDark = true;
  }
});

// const time = moment().endOf("week").fromNow();
// const timePlaceholder = document.querySelector(".time--js");
// timePlaceholder.innerHTML = time;

