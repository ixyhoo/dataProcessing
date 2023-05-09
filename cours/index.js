
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

console.log(data[2].pseudo );