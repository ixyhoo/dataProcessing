/*let body = document.querySelector("body");

window.addEventListener("click", () => {
    body.classList.toggle("lightgreen")
   
})*/

// rapel des types de données

let string = "je suis une chaine de caractère";
let number = 42;
let boolean = true;
let maVariable; // undefined

// arrays

let array = ["je", "suis", "un", "tableau"];
console.log(array[1][0]);

let array2 = ["ben", 24, [1, 2], { name: "fly" }];

//console.log(array2[3].name);

let objet = {
  pseudo: "jojo",
  age: 45,
  technos: ["js", "react", "nodejs"],
  admin: false,
};

//objet.name = "soso"
//console.log(objet);

let data = [
  {
    pseudo: "jojo",
    age: 45,
    technos: ["js", "react", "nodejs"],
    admin: false,
  },
  {
    pseudo: "titi",
    age: 15,
    technos: ["php", "laravel", "synfony"],
    admin: false,
  },
  {
    pseudo: "lulu",
    age: 105,
    technos: ["ruby", "rails", "stimulus"],
    admin: false,
  },
];

//console.log(data[2].pseudo );
//les structure de controle
//----------------------

if (data[0].age > data[1].age) {
  //  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo);
}

//while

let w = 0;
while (w < 10) {
  w++;
  //console.log("la valeur de w est de " + w);
}

// do while
//let d = 0;
//do {
//  d++;
//console.log("la valeur de d est de " + d);
//}while(d < 5);

//for

for (const user of data) {
  //  document.body.innerHTML += `<li>${user.pseudo} à ${user.age} ans</li>`
}

for (let i = 0; i < data.length; i++) {
  // console.log(data[i].pseudo);
  //document.body.innerHTML += `<h2>${data[i].pseudo} pratique ${data[i].technos.join(" & ")}</h2>`
}

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "Js":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "blue";
      break;
    case "RoR":
      document.body.style.background = "red";
      break;
    default:
      null;
  }
});

// Méthodes String

let string2 = "je suis une chaine de caractère";

//console.log(eval("1" + 2));
//console.log(string.length);

//console.log(string2.indexOf("chaine"));
//console.log(string2.indexOf("z"));
//let newString = string2.slice(2);
//let newString = string2.slice(5, 22);

//console.log(newString);
//console.log(string2.split(" "));

//console.log(string2.toLowerCase());
//console.log(string2.toUpperCase());
//console.log(string2.replace("chaine", "femme"));

// Méthodes Number

let number2 = 42.1234;
let numberString = "42.12 est un nombre";

//console.log(number2.toFixed(0));
//console.log(parseInt("43.12"));
//console.log(parseInt(numberString ));
//console.log(parseFloat(numberString ));

//console.log(Math.PI);
//console.log(Math.round(4.5));
//console.log(Math.floor(4.9));
//console.log(Math.ceil(4.1));
//console.log(Math.pow(2, 7));
//console.log(Math.sqrt(16));
//console.log(Math.floor(Math.random() * 50) + 1);

// Méthodes Array

let array3 = ["js", "php", "ruby"];
let array4 = ["react", "laravel", "rails"];

//console.log(array3.concat(array4));

let newArray = [...array3, ...array4];
//console.log(newArray);

//console.log(array3.join(" & "));

//console.log(newArray.slice(1, 3));
//console.log(newArray.reverse());

//array3.forEach((language, index) => {
//  console.log(index, language);})

//console.log(array3.every(language => language === "js"));
//console.log(array3.some(language => language === "js"));

//let shift = array3.shift();
//console.log(shift);

//console.log(array3.pop());

//console.log(array3.push("nodejs"));
//console.log(array3);

//let restArray = array3.splice(1, 2, "express", "angular");
//console.log(array3);

// important

let arrayNumber = [4, 200, 10, 20, 15];
//console.log(arrayNumber.reduce.((x, y) => x / y));

//Filter, sort, map

//let supTen = arrayNumber.filter(number => number > 10);
//console.log(supTen);

//let sortArray = arrayNumber.sort((a, b ) => a - b );
//console.log(sortArray);

//let mapArray = arrayNumber.map(number => number * 2);
//console.log(mapArray);

// Méthodes Object

//document.body.innerHTML = data
//.filter((user) => user.age > 18)
//.sort((a, b) => b.age - a.age)
//  .map(
 //   (user) =>
   //   `<div class="card"><h2>${user.pseudo}</h2> 
    //<p>${user.age} ans </p> 
    //<p> ${user.technos.join(" ")}</p>
    //</div>`
 // )
 // .join(" ");

 //les dates
 // date classique
 let date = new Date();
 console.log(date);

 //Timestamp 

 let timestamp = Date.parse(date);
 console.log(timestamp);

 // isoString
  let iso = date.toISOString();

 function dateParser(chaine){
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", 
  {year: "numeric",
  month: "long", 
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})
  return newDate
 }

 console.log(dateParser(date));
 console.log(dateParser(timestamp));
 console.log(dateParser(iso));

 // destructuring

 let moreData = {
    destVar: "quelque chose",
 }

 const {destVar} = moreData;

 console.log(moreData.destVar);

 console.log(destVar);

  let array5 = ["js", "php", "ruby"];

  console.log(array5[0]);
  console.log(array5[1]);
  console.log(array5[2]);

  const [a, b, c] = array5;

  console.log(a);
  console.log(b);
  console.log(c);

  //console.log(iso);

  const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T")[0];
    
    let [y, m, d] = newDate.split("-");
   // console.log(newDate);
   return [d, m, y].join(":");
  }

  console.log(dateDestructuring(iso));

  //les Datatsets
const h3js = document.getElementById("Js");
console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");

h3.forEach((language) => {
  console.log(language.dataset.lang);
})

//mles regex

let mail = "ixyhoo@outlook.fr"

//console.log(mail.search(/y/));
//console.log(mail.replace(/outlook/, "gmail"));
//console.log(mail.match(/o/g));  
//console.log(mail.match(/[zug]/));
//console.log(mail.match(/[12]/));
//onsole.log(mail.match(/\d/ ));
//console.log(mail.match(/\w/ ));
//console.log(mail.match(/\W/));

//console.log(mail.match(/^[\w.-]+@[\w.-]+\.[a-z]{2,6}$/i));

let  separator  = 26652456262

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));



