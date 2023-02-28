let coinFlip2;
do {
  randomNum = Math.round(Math.random());
  if (randomNum === 0) {
    coinFlip2 = "Heads";
    console.log("Heads");
  } else {
    coinFlip2 = "Tails";
    console.log("Tails");
  }
} while (coinFlip2 !== "Tails");
