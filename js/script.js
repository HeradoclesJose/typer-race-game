let timer, score, number;

const wordDOM = document.getElementById("js--word");
const timerDOM = document.getElementById("js--timer");
const inputDOM = document.getElementById("js--input");
const highscoreDOM = document.getElementById("js--highscore");
const scoreDOM = document.getElementById("js--score");

const dictionary = [
  "variable",
  "arepa",
  "apple",
  "microsoft",
  "assuming",
  "algorithm",
  "forum",
  "president",
  "republic",
  "empanada",
  "pizza",
  "constellation",
  "beautiful",
  "spelling",
  "collection",
  "suitable",
  "novice",
  "expert",
  "parallelepiped",
  "otorhinolaryngology",
  "reconstructive",
  "audible",
  "reddit",
  "github",
  "programming",
  "javascript",
  "default",
  "weakest",
  "shedoesntloveyou",
  "warning",
  "manage",
  "performance",
  "development",
  "android",
  "computer",
  "caretaker",
  "broadcast",
  "private",
  "teacher",
  "america",
  "mexican",
  "demonstration",
  "because",
  "important",
  "application",
  "internet",
  "cookie",
  "cake",
  "scanner",
  "young",
  "unmarked",
  "surprises",
  "daughter",
  "update",
  "protocol",
  "police",
  "loophole",
  "community",
  "oriented",
  "unemployed",
  "money",
  "cosplay",
  "civilians",
  "lucky",
  "believe",
  "actually",
  "genuinely",
  "reports",
  "potential",
  "become",
  "family",
  "cosmetic",
  "entire",
  "guitar",
  "keyboard",
  "knowledge",
  "literally",
  "office",
  "adaptation",
  "browser",
  "someone",
  "pool",
  "sitting",
  "assault",
  "videogame",
  "hijacking",
  "links",
  "finally",
  "justice",
  "everybody",
  "interview",
  "tomorrow",
  "taught",
  "victims",
  "abuse",
  "blessed",
  "assembly",
  "forgive",
  "heavy",
  "telling",
  "afford",
  "whatever",
  "government",
  "predator",
  "flying",
  "depression",
  "interesting",
];

init();

function init() {
  timer = 15;
  score = 0;
  scoreDOM.textContent = 0;
  wordDOM.textContent = 'Type "start" to play';
  inputDOM.value = "";
  inputDOM.placeholder = "start";
  inputDOM.addEventListener("keyup", typeStart);
}

function typeStart() {
  if (inputDOM.value.toLowerCase() === "start") {
    inputDOM.removeEventListener("keyup", typeStart);
    gameStart();
  }
}

function gameStart() {
  timerDOM.textContent = timer + "s";
  gameMechanic();

  var interval = setInterval(() => {
    if (timer > 1) {
      timer--;
      timerDOM.textContent = timer + "s";
    } else {
      clearInterval(interval);
      inputDOM.removeEventListener("keyup", wordChecker);
      timerDOM.textContent = "Game over";
      if (score > highscoreDOM.textContent) highscoreDOM.textContent = score;
      init();
    }
  }, 1000);
}

function gameMechanic() {
  number = Math.floor(Math.random() * dictionary.length);

  inputDOM.value = "";
  wordDOM.textContent = 'Type "' + dictionary[number] + '"';
  inputDOM.placeholder = dictionary[number];

  inputDOM.addEventListener("keyup", wordChecker);
}

function wordChecker() {
  if (inputDOM.value.toLowerCase() === dictionary[number]) {
    timer++;
    score++;

    timerDOM.textContent = timer + "s";
    scoreDOM.textContent = score;
    gameMechanic();
  }
}
