"use strict";
// document.querySelector(".message").textContent = "happy";
// document.querySelector(".guess").value = 23;
let num = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hscore = 0;
console.log(num);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number 🥲 ";
  } else if (guess === num) {
    document.querySelector(
      ".message"
    ).textContent = `yes your Guess  is correct  🥳`;
    score++;
    num = Math.trunc(Math.random() * 20 + 1);
    console.log(num);
    if (hscore < score) {
      hscore = score;
      document.querySelector(".highscore").textContent = hscore;
    }
    document.querySelector("body").style.backgroundColor = "#1a3312";
    document.querySelector("body").style.color = " #cfffbe";
    document.querySelector("body").style.color = " #cfffbe";
    document.querySelector(".number").textContent = num;
  } else if (guess > num) {
    document.querySelector(
      ".message"
    ).textContent = `No your number   is too high  😒`;
    document;
    score--;
  } else if (guess < num) {
    document.querySelector(
      ".message"
    ).textContent = `No your number   is too low  🤐🤐`;
    score--;
  }
  if (score < 0) {
    document.querySelector(".message").textContent = `You lost the game 😪`;
    document.querySelector('body').style.backgroundColor="red";
    score = 0;
  }
  document.querySelector(".score").textContent = score;
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  const num = Math.trunc(Math.random() * 20 + 1);
});
