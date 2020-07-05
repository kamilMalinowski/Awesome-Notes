import '../scss/main.scss';

/*ćwiczenia z lekcji nr.1
const name = "Kamil";
const age = 27;
console.log(name);
console.log(age);
console.log(`Cześć, nazywam się ${name} i mam ${age} lat.`);

ćwiczenia z lekcji nr.2
let newName = "Adam";
newName = "Andrzej";
console.log(
  `Cześć, nazywam się ${newName}.`
); - przypisanie tego typu jest prawidłowe

const firstName = "Adam";
firstName = "Andrzej";
console.log(
  `Cześć, nazywam się ${firstName}.`
); - przypisanie tego typu jest nieprawidłowe


const training = document.querySelector(".footer--js");
console.log(training);


training.innerHTML = "Zmiany sprawdz w konsoli oraz main.js";
console.log(training.innerHTML);


function request(name, age) {
  console.log(`Cześć, nazywam się ${name} i mam ${age} lat.`);
}
request(name, age);


function calculate(myNumber) {
  console.log(`Dostałam wynik ${myNumber}.`);
  return myNumber * 7;
}
const myResults = calculate(4);
console.log(myResults);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
createContent(".header-home__title--js", "trenujemy funkcje");

const calculateNew = (myNumber) => {
  console.log(`Dostałam nr ${myNumber}.`);
};

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
};
*/

/*zadanie domowe wtf tydzień VI - hamburger*/
const hamburger = document.querySelector(".hot-dog--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

console.log(hamburger);

/*document.documentElement.style.setProperty('--zmienna', 'wartość') - darkmmode*/
let isDark = false;

const switchModes = document.querySelector(".dot--js");

switchModes.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty(
      "--bacground1",
      "rgb(250, 255, 238)"
    );
    document.documentElement.style.setProperty("--text-font", "black");
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
    document.documentElement.style.setProperty("--text-font", "white");
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
