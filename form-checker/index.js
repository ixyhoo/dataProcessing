let body = document.querySelector("body");
document.body.addEventListener("click", function () {
  body.classList.toggle("pink-gradient");
});

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const progressBar = document.getElementById("progress-bar");
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
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      "pseudo",
      "The pseudo must contain between 3 and 20 characters."
    );
    pseudo = null;
  } else if (!/^[a-zA-Z0-9_.-]+$/.test(value)) {
    errorDisplay("pseudo", "The pseudo must not contain special characters.");
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
    return true;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "The email address is not valid.");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
    return true;
  }
};

const passwordChecker = (value) => {
  
  if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)) {
    errorDisplay(
      "password",
      "The password must contain at least 1 uppercase, 1 lowercase, 8 characters, 1 number and 1 special character."
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay('password', "", true);
    password = value;
  } else {
    progressBar.classList.remove("progressBlue");
    progressBar.classList.add("progressGreen");
    errorDisplay('password', "", true);
    password = value;
    return true;
  }
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
