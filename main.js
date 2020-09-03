let chance = 3;
let randomNumber = randomNumberGenerator();
let previousInput = -1;

console.log(randomNumber);

var input = document.getElementById("user-input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("guess-but").click();
  }
});

function resetButton() {
    chance = 3;
    randomNumber = randomNumberGenerator();
    previousInput = -1;
    document.getElementById("guess-remain").innerHTML = `You have ${chance} chances remaining.` 
    document.getElementById("update-status").innerHTML =
    "";
    document.getElementById("history").innerHTML = "";
    document.getElementById("round-result").innerHTML = "";
    document.getElementById("guess-but").disabled = false;
    resetInputBar();
    console.log(randomNumber);
}

function numberGuessingGame() {

  let userInput = getUserNumber();
  if (chance === -1) {
    document.getElementById("update-status").innerHTML =
    "";
    document.getElementById("guess-remain").innerHTML = ""
    document.getElementById("round-result").innerHTML = "You're out of guess!";
    return;
  } else if (userInput === previousInput) {
    document.getElementById("update-status").innerHTML =
    `You've entered ${userInput}. Try again!`;
    return;
  }
  else {
    compareTo(userInput);
  }
  previousInput = userInput;

  if (chance === 0) {
    document.getElementById("update-status").innerHTML =
    "";
    document.getElementById("guess-remain").innerHTML = ""
    document.getElementById("round-result").innerHTML = "You're out of guess!";
    document.getElementById("guess-but").disabled = true;
    return;
  }
}

function randomNumberGenerator() {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  return randomNum;
}

function getUserNumber() {
  let userNumber = document.getElementById("user-input").value;
  return userNumber;
}

function resetInputBar() {
    let inputBar = document.getElementById("user-input");
    inputBar.value = inputBar.defaultValue;

}

function compareTo(userInput) {
  if (userInput > randomNumber) {
    document.getElementById("update-status").innerHTML =
      "The number you entered is HIGHER!";
    
      document.getElementById("history").innerHTML += `${userInput} `
      "";
    chance--;
    document.getElementById("guess-remain").innerHTML = `You have ${chance} chances remaining.` 
  } else if (userInput < randomNumber) {
    document.getElementById("update-status").innerHTML =
      "The number you entered is LOWER!";
    chance--;
    document.getElementById("guess-remain").innerHTML = `You have ${chance} chances remaining.` 
    document.getElementById("history").innerHTML += `${userInput} `
  } else {
    document.getElementById("guess-remain").innerHTML = ""
    document.getElementById("update-status").innerHTML =
    "";
    document.getElementById("round-result").innerHTML = "You Win!";
    document.getElementById("guess-but").disabled = true;

    document.getElementById("history").innerHTML += `${userInput} `
  }
}
