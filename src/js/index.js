import "../scss/main.scss"; /*dont  delete this code line*/
import "bootstrap"; /*second step to install bootstrap*/

// import moment from "moment";
/*pobranie repozytorium do html*/
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

/*zadanie domowe wtf tydzień VI - hamburger*/
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".menu-navigation--js");
  nav.classList.toggle("menu-navigation--open");
});

console.log(hamburger);

/*document.documentElement.style.setProperty('--zmienna', 'wartość') - darkmmode*/
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

// const time = moment().endOf("week").fromNow();
// const timePlaceholder = document.querySelector(".time--js");
// timePlaceholder.innerHTML = time;

//wysuwany aside w sekcji html

let buttonAside = document.querySelector(".buttonAside--js");

buttonAside.addEventListener("click", () => {
  const aside = document.querySelector(".notes-article--aside");
  aside.classList.toggle("notes-article--openAside");
});

//GAMEJS - Prosta gra, w której walczę z JavaScriptem :).

// const gameJS = document.querySelector(".gameJS--js");
let me = document.querySelector(".me--js");
// const javaSript = document.querySelector(".javaSript--js");
const jumpButton = document.querySelector(".jumpButton--js");

jumpButton.addEventListener("click", () => {
  if (me.classList != "animation") {
    me.classList.add("animation");
  }
  setTimeout(function () {
    me.classList.remove("animation");
  }, 500);
});
//kontynuacja niebawem


