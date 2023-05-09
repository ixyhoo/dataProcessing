
let body = document.querySelector("body");

window.addEventListener("click", () => {
    body.classList.toggle("lightgreen")
   
})

// rapel des types de données

let string = "je suis une chaine de caractère";
let number = 42;
let boolean = true;
let maVariable; // undefined

// arrays

let array = ["je", "suis", "un", "tableau"];
console.log(array[1][0]);

let array2 = ["ben", 24, [1, 2], {name: "fly"}]

//console.log(array2[3].name);

let objet = {
    pseudo: "jojo",
    age: 45,
    technos: ["js", "react", "nodejs"],
    admin: false,
}

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
    }
]

//console.log(data[2].pseudo );
//les structure de controle
//----------------------

if(data[0].age > data[1].age){
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

for(const user of data){
  //  document.body.innerHTML += `<li>${user.pseudo} à ${user.age} ans</li>`
}

for(let i = 0; i < data.length; i++){
   // console.log(data[i].pseudo);
   document.body.innerHTML += `<h2>${data[i].pseudo} à ${data[i].age}</h2>`
}