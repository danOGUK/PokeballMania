// Game Variables
var count = 0; //Ammount of Pokeballs
var value = 1; //Pokeballs Per Click
var greatballCost = 100;
var greatballs = 0;
var ultraballCost = 500;
var ultraballs = 0;
var premierballCost = 1000;
var premierballs = 0;
var fastballCost = 2500;
var fastballs = 0;
var dreamballCost = 7500;
var dreamballs = 0;
var heavyballCost = 15000;
var heavyballs = 0;
var timerballCost = 25000;
var timerballs = 0;
var beastballCost = 75000;
var beastballs = 0;
var masterballCost = 100000;
var masterballs = 0;

// -----------------------------------------------------------------------------------//

/* User clicks the Pokeball */
function findPokeballs() {
  count = count + value;
  document.getElementById("count").innerHTML = count;
}

// Buy Greatballs
function buyGreatballs() {
if(count >= greatballCost && greatballs == 0) {
 value = 2;
  greatballs = 1;
  count = count - greatballCost;
  document.getElementById("greatballs").innerHTML = greatballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (greatballs == 1) {
  alert("You have already purchased a greatball");
  } else {
  alert("You cannot afford to purchase a greatball");
  }
 }

// Buy Ultraballs
function buyUltraballs() {
if(count >= ultraballCost && ultraballs == 0) {
 value = 4;
  ultraballs = 1;
  count = count - ultraballCost;
  document.getElementById("ultraballs").innerHTML = ultraballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  alert("You have purchased a Ultraball");
  } else if (ultraballs == 1) {
   alert("You have already purchased a Ultraball");
  } else {
  alert("You cannot afford to purchase a Ultraball");
  }
 }

// Buy Premierballs
function buyPremierballs() {
if(count >= premierballCost && premierballs == 0) {
 value = 6;
  premierballs = 1;
  count = count - premierballCost;
  document.getElementById("premierballs").innerHTML = premierballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
   alert("You have purchased a Premierball");
  } else if (premierballs == 1) {
   alert("You have already purchased a Premierball");
  } else {
  alert("You cannot afford to purchase a Premierball");
  }
 }

// Buy Fastballs
function buyFastballs() {
if(count >= fastballCost && fastballs == 0) {
 value = 8;
  fastballs = 1;
  count = count - fastballCost;
  document.getElementById("fastballs").innerHTML = fastballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  alert("You have purchased a Fastball");
  } else if (fastballs == 1) {
   alert("You have already purchased a Fastball");
  } else {
  alert("You cannot afford to purchase a Fastball");
  }
 }

// Buy Dreamballs
function buyDreamballs() {
if(count >= dreamballCost && dreamballs == 0) {
 value = 10;
  dreamballs = 1;
  count = count - dreamballCost;
  document.getElementById("dreamballs").innerHTML = dreamballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (fastballs == 1) {
   alert("You have already purchased a Dreamball");
  } else {
  alert("You cannot afford to purchase a Dreamball");
  }
 }

// Buy Heavyballs
function buyHeavyballs() {
if(count >= heavyballCost && heavyballs == 0) {
 value = 12;
  heavyballs = 1;
  count = count - heavyballCost;
  document.getElementById("heavyballs").innerHTML = heavyballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (heavyballs == 1) {
   alert("You have already purchased a Heavyball");
  } else {
  alert("You cannot afford to purchase a Heavyball");
  }
 }

// Buy Timerballs
function buyTimerballs() {
if(count >= timerballCost && timerballs == 0) {
 value = 14;
  timerballs = 1;
  count = count - timerballCost;
  document.getElementById("timerballs").innerHTML = timerballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (timerballs == 1) {
   alert("You have already purchased a Timerball");
  } else {
  alert("You cannot afford to purchase a Timerball");
  }
 }

// Buy Beastballs
function buyBeastballs() {
if(count >= beastballCost && beastballs == 0) {
 value = 16;
  timerballs = 1;
  count = count - beastballCost;
  document.getElementById("beastballs").innerHTML = beastballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (beastballs == 1) {
   alert("You have already purchased a Beastball");
  } else {
  alert("You cannot afford to purchase a Beastball");
  }
 }

// Buy Masterballs
function buyMasterballs() {
if(count >= masterballCost && masterballs == 0) {
 value = 16;
  masterballs = 1;
  count = count - masterballCost;
  document.getElementById("masterballs").innerHTML = masterballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (masterballs == 1) {
   alert("You have already purchased a Masterball");
  } else {
  alert("You cannot afford to purchase a Masterball");
  }
 }

// ----------------------------------- AutoClicker ----------------------------------- //


// ----------------------------------- Save Game/Load Game/Reset Game --------------------------------//
// Load Game
function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.count !== "undefined") count = savedGame.count;
  if (typeof savedGame.value !== "undefined") value = savedGame.value;
  if (typeof savedGame.greatballs !== "undefined") greatballs = savedGame.greatballs;
  if (typeof savedGame.ultraballs !== "undefined") ultraballs = savedGame.ultraballs;
  if (typeof savedGame.premierballs !== "undefined") premierballs = savedGame.premierballs;
  if (typeof savedGame.fastballs !== "undefined") fastballs = savedGame.fastballs;
  if (typeof savedGame.dreamballs !== "undefined") dreamballs = savedGame.dreamballs;
  if (typeof savedGame.heavyballs !== "undefined") heavyballs = savedGame.heavyballs;
  if (typeof savedGame.timerballs !== "undefined") timerballs = savedGame.timerballs;
  if (typeof savedGame.beastballs !== "undefined") beastballs = savedGame.beastballs;
  if (typeof savedGame.masterballs !== "undefined") masterballs = savedGame.masterballs;
}

function saveGame() {
  var gameSave = {
    count: count,
    value: value,
    greatballs: greatballs,
    ultraballs: ultraballs,
    premierballs: premierballs,
    fastballs: fastballs,
    dreamballs: dreamballs,
    heavyballs: heavyballs,
    timerballs: timerballs,
    beastballs: beastballs,
    masterballs: masterballs,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

setInterval(function() {
  saveGame();
}, 1000); //saves every 1 seconds

// Create an Event Listener
document.addEventListener("keydown", function(event) {
  if(event.ctrlKey && event.which == 83) {
    event.preventDefault();
    saveGame();
  }
}, false);


//Load Save Game
window.onload = function() {
loadGame();
document.getElementById("count").innerHTML = count;
document.getElementById("greatballs").html() = greatballs;
document.getElementById("ultraballs").html() = ultraballs;
document.getElementById("premierballs").html() = premierballs;
document.getElementById("fastballs").html() = fastballs;
document.getElementById("dreamballs").html() = dreamballs;
document.getElementById("heavyballs").html() = heavyballs;
document.getElementById("timerballs").html() = timerballs;
document.getElementById("beastballs").html() = beastballs;
document.getElementById("masterballs").html() = masterballs;
document.getElementById("value").innerHTML = value;
};
