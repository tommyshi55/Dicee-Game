var randomNumber = Math.round(Math.random() * 5 + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png");

var randomNumber2 = Math.round(Math.random() * 5 + 1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
