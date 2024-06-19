
var randomForPlayer1 = Math.floor(Math.random() * 6 + 1);
var randomForPlayer2 = Math.floor(Math.random() * 6 + 1);

if (randomForPlayer1 == 1) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");
}
else if (randomForPlayer1 == 2) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png");
}
else if (randomForPlayer1 == 3) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png");
}
else if (randomForPlayer1 == 4) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png");
}
else if (randomForPlayer1 == 5) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png");
}
else if (randomForPlayer1 == 6) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
}
if (randomForPlayer2 == 1) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice1.png");
}
else if (randomForPlayer2 == 2) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice2.png");
}
else if (randomForPlayer2 == 3) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice3.png");
}
else if (randomForPlayer2 == 4) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice4.png");
}
else if (randomForPlayer2 == 5) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice5.png");
}
else if (randomForPlayer2 == 6) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");
}

if (randomForPlayer1 > randomForPlayer2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomForPlayer1 < randomForPlayer2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}
