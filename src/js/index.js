import "../scss/main.scss"; /*dont delete this code line*/
import "bootstrap"; /*second step to install bootstrap*/

import moment from "moment"; /*unlock this code for use moment*/

console.log("PL: Witam, cieszę się, że tu zaglądasz ❤️."); /*greeting*/
console.log("EN: Hello, i'm glad you're here ❤️."); /*greeting*/

//FETCH ('index.html')
// 1. 
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
// 10.
fetch("https://api.github.com/users/kamilMalinowski/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const repositoryList = document.querySelector(".repoList--js");
      const { name, html_url } = repo;
      const myTemplate = `
      <li class="notes-list__element">${name} 
        <a 
        class="notes-list__link" 
        href="${html_url}" 
        title="link do repozytorium ${name} na githubie"
        > - link do GitHuba
        </a>
      </li>`;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("nie udało się pobrać");
  });

//MENU BUTTON - HAMBURGER ('all')
// 1. 
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
// 10.
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".menu-navigation--js");
  nav.classList.toggle("menu-navigation--open");
});

//DARK MODE ('all')
// 1. 
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
// 10.
let isDark = false;

const switchModes = document.querySelector(".darkmode--js");

switchModes.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty("--color-lightGreen", "#daff82");
    document.documentElement.style.setProperty("--color-purple", "#a38fff");
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

//MOMENT ('notatki-js.html')
// 1. assign option from moment co const(time)
// 2. assign const(timePlaceholder) to class(.time--js)
// 3. put cont(time) to html
const time = moment().format('LLL'); 
const timePlaceholder = document.querySelector(".time--js");
timePlaceholder.innerHTML = time;

//GAMEJS - Prosta gra, w której walczę z JavaScriptem :).

// const gameJS = document.querySelector(".gameJS--js");
const mePerson = document.querySelector(".mePerson--js");
// const javaSript = document.querySelector(".javaSript--js");
const jumpButton = document.querySelector(".jumpButton--js");

jumpButton.addEventListener("click", () => {
  if (mePerson.classList != "animation") {
    mePerson.classList.add("animation");
    console.log("Button is working");
  }
  setTimeout(function () {
    mePerson.classList.remove("animation");
  }, 500);
});
//kontynuacja niebawem


//ASIDE MODE
// const buttonAside = document.querySelector(".buttonAside--js");

// buttonAside.addEventListener("click", () => {
//   const aside = document.querySelector(".notes-article--aside");
//   aside.classList.toggle("notes-article--openAside");
// });