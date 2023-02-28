let coinFlip;
let games = parseInt(prompt("How many rounds do you want to play?"));
for (let i = 0; i < games; i++) {
  coinFlip = Math.round(Math.random());
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}
