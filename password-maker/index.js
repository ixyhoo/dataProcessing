
const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%^&*()_+=-{}[];':\"\\|,.<>?/~`";
const rangeValue = document.getElementById("password-length");
console.log(rangeValue.value);

function generatePassword() {
    let data = []
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    console.log(data[Math.floor(Math.random() * data.length)]);
}

generateButton.addEventListener("click", generatePassword);

