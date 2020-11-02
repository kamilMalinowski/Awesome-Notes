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