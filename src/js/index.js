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
// 1. assign const(hamburger) to class(.hamburger--js)
// 2. assign click function to hamburger button
// 3. assign const(nav) to class(.menu-navigation--js)
// 4. assign toggle option to const(nav) |--> this add (menu-navigation--open)
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".menu-navigation--js");
  nav.classList.toggle("menu-navigation--open");
  console.log("It's open");
});

//GAME-JUMP ('notatki-js.html') - WORK IN PROGRESS
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

const play = document.querySelector(".play--js");
const jump = document.querySelector(".jump--js");

const sprite = document.querySelector(".sprite--js");
const js = document.querySelector(".js--js");

//buttons
//1. play

let isOff = false;
play.addEventListener("click", () => {
  const area = document.querySelector(".area--js");
  if (isOff) {
    area.style.display = "none";

    isOff = false;
  } else {
    area.style.display = "block";
    isOff = true;
  }
});

//2. jump
jump.addEventListener("click", () => {
  if (sprite) {
    sprite.classList.add("animation");
  }
  setTimeout(() => {
    sprite.classList.remove("animation");
  }, 400);
});

const gameOver = setInterval(() => {
  let spriteTop = parseInt(
    window.getComputedStyle(sprite).getPropertyValue("top")
  );
  let jsLeft = parseInt(window.getComputedStyle(js).getPropertyValue("left"));
  if (jsLeft < 25 && jsLeft > -25 && spriteTop >= 135) {
    js.style.animation = "none";
    js.style.left = "50px";
  }
}, 10);



//ASIDE MODE ('notatki-html.html')
// 1. assign const(buttonAside) to class(.buttonAside--js)
// 2. assign click function to buttonAside button
// 3. assign const(aside) to class(.notes-article--asideOff)
// 4. assign toggle option to const(aside) |--> this add (notes-article--asideOn)
const buttonAside = document.querySelector(".buttonAside--js");

buttonAside.addEventListener("click", () => {
  const aside = document.querySelector(".notes-article--asideOff");
  aside.classList.toggle("notes-article--asideOn");
});

//DARK MODE ('all')
// 1. create let = false
// 2. assign const(switchModes) to class(.darkmode--js)
// 3. assign click function to switchModes button
// 4. assign color to darkmode off | if
// 5. assign color to darkmode on  | else
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
    document.documentElement.style.setProperty("--color-lightGreen", "#000000");
    document.documentElement.style.setProperty("--color-purple", "#000000");
    document.documentElement.style.setProperty("--color-orange", "#000000");
    document.documentElement.style.setProperty("--color-pink", "#75ffc2");
    document.documentElement.style.setProperty("--color-green", "#000000");

    document.documentElement.style.setProperty("--color-gray", "#faffee");
    document.documentElement.style.setProperty("--color-bg", "#000000");

    isDark = true;
  }
});

//MOMENT ('notatki-js.html')
// 1. assign option from moment co const(time)
// 2. assign const(timePlaceholder) to class(.time--js)
// 3. put cont(time) to html
const time = moment().format("LLL");
const timePlaceholder = document.querySelector(".time--js");
timePlaceholder.innerHTML = time;
