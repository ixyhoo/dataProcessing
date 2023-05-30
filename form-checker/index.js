let body = document.querySelector("body");
document.body.addEventListener("click", function () {
  body.classList.toggle("pink-gradient");
});

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
}

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "The pseudo must contain between 3 and 20 characters.");
    pseudo = null;
  } else if (!/^[a-zA-Z0-9_.-]+$/.test(value)) {
    errorDisplay("pseudo", "The pseudo must not contain special characters.");
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
    return true;}
};

const emailChecker = (value) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorDisplay("email", "Invalid email address.");
    return false;
  } else if
};

const passwordChecker = (value) => {
  console.log(value);
};

const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
