
let body = document.querySelector("body");

window.addEventListener("click", ()=>{
    body.style.backgroundColor = "yellow";
})

// rapel des types de données

let string = "je suis une chaine de caractère";
let number = 42;
let boolean = true;
let maVariable; // undefined

// arrays

let array = ["je", "suis", "un", "tableau"];
console.log(array[1][0]);

let array2 = ["ben", 24, [1, 2], {nom: "fly"}]

console.log(array2);