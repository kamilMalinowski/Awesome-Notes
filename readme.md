![myWtfNotesLogo](https://mir-cdn.behance.net/v1/rendition/project_modules/fs/85c71f90815521.5f10cd28aed53.jpg "Moja nauka Frontendu")

# MOJA NAUKA FRONTENDU - NOTES

My notes created as part of the "WTF: Co ten frontend" training. I'm still thinking about how to assimilate them better.

## TOOLS

- WTF Webpack starterkit
- HTML + CSS + JS
- Github API

## AVAILABLE SCRIPTS

`npm run start` - runs development mode

`npm run build` - runs build process for production

`npm run publish` - runs build process and publish the page using `gh-pages` branch

## AVAILABLE JAVASRIPT NOTES

# Co ten JS?-notatki

## Notatki JavaScript-czyli co jest czym w praktycznym kodzie

![javascript](https://github.com/kamilMalinowski/homepage/blob/master/images/background_homepage_JS.jpg?raw=true)

### Ściąga:
```javascript 
{} - tak tworzymy obiekty
[] - tak tworzymy tablice
... - spred operator
`` - backtick
$ {}

```
### Praktyczne przykłady:
#### konsola
```javascript 
console.log('Hello JavaScript!'); /*zawartość przenosimy do konsoli*/ ----------> wynik w konsoli:'Hello JavaScript!'
```

#### destrukturyzacja obiektów
```javascript 
/*standardowy zapis*/
const person = {name: 'Kamil',age: 28};

console.log(person); /*standardowy sposób*/ ----------> wynik w konsoli: Object {age: 28, name: "Kamil"}
console.log(person.name); /*standardowy sposób*/ ----------> wynik w konsoli: 'Kamil'
console.log(person.age); /*standardowy sposób*/ ----------> wynik w konsoli: 28

/*zapis przy użyciu destrukturyzacji*/
const person = {name: 'Kamil',age: 28};
const {name, age} = person;

console.log(name) /*destrukturyzacja*/ ----------> wynik w konsoli: 'Kamil'
console.log(age) /*destrukturyzacj*/ ----------> wynik w konsoli: 28
```

#### destrukturyzacja tablic
```javascript 
/*standardowy zapis*/
const food = ['apple','banana','orange'];

console.log(food); /*standardowy sposób*/ ----------> wynik w konsoli: ['apple','banana','orange']

/*zapis przy użyciu destrukturyzacji*/
const food = ['apple','banana','orange'];
const [first,second,third] = food;

console.log(first); ----------> wynik w konsoli: 'apple'
```
#### spred operator w obiektach
###### standardowy zapis
```javascript 
const person = {name: 'Kamil', age: 28};
const address = {city: 'Gdańsk', country: 'Poland'};

console.log(person); ----------> wynik w konsoli: Object {age: 28,name: "Kamil"}
console.log(address); ----------> wynik w konsoli: Object {city: "Gdańsk",country: "Poland"}

const personWithAddress = {
name: person.name,
age: person.age,
city: address.city,
country: address.country
};

console.log(personWithAddress); ----------> wynik w konsoli:
Object {
  age: 28,
  city: "Gdańsk",
  country: "Poland",
  name: "Kamil"
}
```
###### zapis przy użyciu spred operator
```javascript 
const person = {name: 'Kamil', age: 28};
const address = {city: 'Gdańsk', country: 'Poland'};

console.log(person); ----------> wynik w konsoli: Object {age: 28,name: "Kamil"}
console.log(address); ----------> wynik w konsoli: Object {city: "Gdańsk",country: "Poland"}

const personWithAddress = {
...person,
...address
};

console.log(personWithAddress); ----------> wynik w konsoli:
Object {
  age: 28,
  city: "Gdańsk",
  country: "Poland",
  name: "Kamil"
}
```

#### spred operator w tablicach
###### standardowy zapis
```javascript 
const fruit = ['orange', 'banana'];
const drink = ['water', 'juice'];

console.log(fruit);
console.log(drink);

const fruitAndDrink =[fruit[0], fruit[1], drink[0], drink[1]];
console.log(fruitAndDrink);
```
###### zapis przy użyciu spred operator
```javascript 
const fruit = ['orange', 'banana'];
const drink = ['water', 'juice'];

console.log(fruit);
console.log(drink);

const fruitAndDrink =[...fruit, ...drink];
console.log(fruitAndDrink);
```

#### fetch api
```javascript 
fetch("https://api.github.com/users/kamilMalinowski/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const repositoryList = document.querySelector(".list--js");
      const { name, html_url } = repo;
      const myTemplate = 
      ``;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("nie udało się pobrać");
  });
```

#### hamburger
```javascript
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

console.log(hamburger);
```

#### == vs ===, czyli o koercji typów
###### ===
```javascript
IDENTYCZNE === IDENTYCZNE
//zapis ten jest prawidłowy

IDENTYCZNE === 'IDENTYCZNE'
//zapis ten jest błędny 

PRZYKŁAD:
2 === 2 
typeof 2
number
//typ number - nie dochodzi do koercji
```
###### ==
```javascript
KOERCJA typów to inaczej ZMIANA typów

1.  1 == 1            => return 1 === 1
2. null == undefined  => return true
3. undefined == null  => return true
4. 1 == '1'           => return 1 == Number('1')
5. '1' == 1           => return Number('1') == 1
6. true == ...        => return Number(true) == ...
7. ... == true        => return ... == Number(true)
8. '1' == [1, 2, 3]   => return '1' == ToPrimitive([1, 2, 3])
9. [1, 2, 3] == '1'   => return ToPrimitive([1, 2, 3]) == '1'
10. return false 

p.s.
- sprawdzenie typu w przypadku tablicy używamy metody:
np. [2, 3].toString()
"2,3"

```





