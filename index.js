var randomNumber = Math.round(Math.random() * 5 + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png");

var randomNumber2 = Math.round(Math.random() * 5 + 1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draws!";
}
