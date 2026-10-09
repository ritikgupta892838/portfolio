const words = [
  "BCA Student",
  "O Level Learner",
  "Learning Web Development",
  "Python Beginner",
  "Future Software Developer"
];

let wordIndex = 0;

const typing = document.getElementById("typing");

function rotateText() {
  typing.textContent = words[wordIndex];

  wordIndex = (wordIndex + 1) % words.length;
}

rotateText();
setInterval(rotateText, 2200);

// Automatically show the current year
document.getElementById("year").textContent =
  new Date().getFullYear();
