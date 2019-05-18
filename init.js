// cep-dev-hw4

function Character(name, profession, str, dex, con, int, char, wis) {
  this.name = name;
  this.profession = profession;
  this.str = str;
  this.dex = dex;
  this.con = con;
  this.int = int;
  this.char = char;
  this.wis = wis;
  this.hitpoints = con * (Math.floor(Math.random() * 7) + 2);
  // Math.floor(Math.random() * (max - min + 1)) + min;

  var hit;
  var damage;

  this.weaponAttack = function(enemyDex) {
    // (str, dex)
    hit = false;
    if (this.dex * Math.floor((Math.random() * 6) + 1) > (enemyDex * 2)) {
      hit = true;
      damage = Math.floor(this.str * (Math.random() * 2));
      return damage;
    }
  }

  this.smite = function(enemyDex) {
    // int, char
    hit = false;
    if (this.int * Math.floor((Math.random() * 8) + 1)> (enemyDex * 2)) {
      hit = true;
      damage = Math.floor(this.char * (Math.random() * 2));
      return damage;
    }
  }

  this.fireball = function(enemyDex){
    hit = false;
    if (this.wis * Math.floor((Math.random() * 4) + 1)> (enemyDex * 2)) {
      hit = true;
      damage = Math.floor(this.wis * (Math.random() * 3));
      return damage;
    }
  }

  this.isAlive = function() {
    if (this.hitpoints <= 0) {
      return (name + " the " + profession + " is now dead.");
    } else {
      return (name + " the " + profession + " is stil alive.");
    }
  }

  this.attacked = function(hitAttack) {
    this.hitpoints = this.hitpoints - hitAttack;
  }
}

 // name, profession str, dex, con, int, char, wis
 // 8 10 12 13 14 15
// var knight = new Character('Baldur','Paladin',15, 13, 14, 8, 12, 10);
// var cleric = new Character('Gany', 'Cleric', 12, 8, 14, 13, 15, 10);
// var mage = new Character('Merlin', 'Wizard', 8, 13, 12, 14, 10, 15);

// Fight to the death
var fighter;
var enemy;
var fighterHTML;
var clicked = 0;
var characters = 3;
var selectedChars = [];
// var actionsBar;
// var cfP = document.getElementsByClassName('classes fighter--paladin');
// for(var i=0; i<cfP.length; i++) cfP[i].onclick = chosePaladin;


function chosePaladin() {
  if (clicked === 0) {
    clicked = 1;
    fighter = new Character('Baldur','Paladin',15, 13, 14, 8, 12, 10);
    // enemyW = new Character('Merlin', 'Wizard', 8, 13, 12, 14, 10, 15);
    // enemyC = new Character('Gany', 'Cleric', 12, 8, 14, 13, 15, 10);

    document.getElementById("header").innerHTML = "You chose: " + fighter.profession + "! Now choose your first opponent.";

    fighterHTML = document.getElementById("pally");
    // document.getElementById("myDiv").style.borderWidth = "thick";
    fighterHTML.style.borderWidth = "thick";
    fighterHTML.style.borderStyle = "dashed";

    document.getElementById("actions").style.visibility = "visible";
    document.getElementById("fighterHitpoints").innerHTML = "Your hitpoints = " + fighter.hitpoints;
    // document.getElementsByClassName("header").innerHTML = "Choose your first opponent."
  }
  else if (selectedChars.indexOf("P") === -1) {
    selectedChars.push("P");
    enemy = new Character('Baldur','Paladin',15, 13, 14, 8, 12, 10);
    fighterHTML = document.getElementById("pally");
    fighterHTML.style.borderWidth = "thick";
    fighterHTML.style.borderStyle = "dashed";
    fighterHTML.style.borderColor = "red";
    document.getElementById("enemyHitpoints").innerHTML = enemy.profession + "'s hitpoints = " + enemy.hitpoints;
    document.getElementById("attacks").style.visibility = "visible";
  }
}

function choseWizard() {
  if (clicked === 0) {
    clicked = 1;
    fighter = new Character('Merlin', 'Wizard', 8, 13, 12, 14, 10, 15);
    // enemyW = new Character('Merlin', 'Wizard', 8, 13, 12, 14, 10, 15);
    // enemyC = new Character('Gany', 'Cleric', 12, 8, 14, 13, 15, 10);

    document.getElementById("header").innerHTML = "You chose: " + fighter.profession + "! Now choose your first opponent.";

    fighterHTML = document.getElementById("wiz");
    fighterHTML.style.borderWidth = "thick";
    fighterHTML.style.borderStyle = "dashed";

    document.getElementById("actions").style.visibility = "visible";
    document.getElementById("fighterHitpoints").innerHTML = "Your hitpoints = " + fighter.hitpoints;
    // document.getElementsByClassName("header").innerHTML = "Choose your first opponent."
  }
  else if (selectedChars.indexOf("W") === -1) {
    selectedChars.push("W");
    enemy = new Character('Merlin', 'Wizard', 8, 13, 12, 14, 10, 15);
    fighterHTML = document.getElementById("wiz");
    fighterHTML.style.borderWidth = "thick";
    fighterHTML.style.borderStyle = "dashed";
    fighterHTML.style.borderColor = "red";
    document.getElementById("enemyHitpoints").innerHTML = enemy.profession + "'s hitpoints = " + enemy.hitpoints;
    document.getElementById("attacks").style.visibility = "visible";
  }
}

function choseCleric() {
  if (clicked === 0) {
    clicked = 1;
    fighter = new Character('Gany', 'Cleric', 12, 8, 14, 13, 15, 10);
    // enemyW = new Character('Merlin', 'Wizard', 8, 13, 12, 14, 10, 15);
    // enemyC = new Character('Gany', 'Cleric', 12, 8, 14, 13, 15, 10);

    document.getElementById("header").innerHTML = "You chose: " + fighter.profession + "! Now choose your first opponent.";

    fighterHTML = document.getElementById("cler");
    fighterHTML.style.borderWidth = "thick";
    fighterHTML.style.borderStyle = "dashed";

    document.getElementById("actions").style.visibility = "visible";
    document.getElementById("fighterHitpoints").innerHTML = "Your hitpoints = " + fighter.hitpoints;
    // document.getElementsByClassName("header").innerHTML = "Choose your first opponent."
  }
  else if (selectedChars.indexOf("C") === -1) {
    selectedChars.push("C");
    enemy = new Character('Gany', 'Cleric', 12, 8, 14, 13, 15, 10);
    fighterHTML = document.getElementById("cler");
    fighterHTML.style.borderWidth = "thick";
    fighterHTML.style.borderStyle = "dashed";
    fighterHTML.style.borderColor = "red";
    document.getElementById("enemyHitpoints").innerHTML = enemy.profession + "'s hitpoints = " + enemy.hitpoints;
    document.getElementById("attacks").style.visibility = "visible";
  }
}


function weaponAttack() {
  document.getElementById("attackResults").style.visibility = "visible";
  var damage = fighter.weaponAttack(enemy.dex);
  if (damage > 0) {
    document.getElementById("outgoingAttack").innerHTML = "You hit " + enemy.name + " the " + enemy.profession + " for " + damage + " damage."
    enemy.attacked(damage);
  } else {
    document.getElementById("outgoingAttack").innerHTML = "You missed " + enemy.name + " the " + enemy.profession + "."
  }
  rebuttle();
  checkDeath();
}

function smite() {
  document.getElementById("attackResults").style.visibility = "visible";
  var damage = fighter.smite(enemy.dex);
  if (damage > 0) {
    document.getElementById("outgoingAttack").innerHTML = "You hit " + enemy.name + " the " + enemy.profession + " for " + damage + " damage."
    enemy.attacked(damage);
  } else {
    document.getElementById("outgoingAttack").innerHTML = "You missed " + enemy.name + " the " + enemy.profession + "."
  }
  rebuttle();
  checkDeath();
}

function fireball() {
  document.getElementById("attackResults").style.visibility = "visible";
  var damage = fighter.fireball(enemy.dex);
  if (damage > 0) {
    document.getElementById("outgoingAttack").innerHTML = "You hit " + enemy.name + " the " + enemy.profession + " for " + damage + " damage."
    enemy.attacked(damage);
  } else {
    document.getElementById("outgoingAttack").innerHTML = "You missed " + enemy.name + " the " + enemy.profession + "."
  }
  rebuttle();
  checkDeath();
}

function rebuttle() {
  if (enemy.profession === "Wizard") {
    var damage = enemy.fireball(fighter.dex);
    if (damage > 0) {
      document.getElementById("incomingAttack").innerHTML = "You were hit for " + damage + " damage."
      fighter.attacked(damage);
    } else {
      document.getElementById("incomingAttack").innerHTML = enemy.name + " the " + enemy.profession + " missed you!"
    }
  }
  else if (enemy.profession === "Paladin") {
    var damage = enemy.weaponAttack(fighter.dex);
    if (damage > 0) {
      document.getElementById("incomingAttack").innerHTML = "You were hit for " + damage + " damage."
      fighter.attacked(damage);
    } else {
      document.getElementById("incomingAttack").innerHTML = enemy.name + " the " + enemy.profession + " missed you!"
    }
  }
  else if (enemy.profession === "Cleric") {
    var damage = enemy.smite(fighter.dex);
    if (damage > 0) {
      document.getElementById("incomingAttack").innerHTML = "You were hit for " + damage + " damage."
      fighter.attacked(damage);
    } else {
      document.getElementById("incomingAttack").innerHTML = enemy.name + " the " + enemy.profession + " missed you!"
    }
  }
}

function checkDeath() {
  if (fighter.hitpoints <= 0) {
    document.getElementById("fighterHitpoints").innerHTML = "You died!";
    document.getElementById("attacks").style.visibility = "hidden";
    document.getElementById("attackResults").style.visibility = "hidden";
    document.getElementById("playAgain").style.visibility = "visible";
  } else if (enemy.hitpoints <= 0) {
    document.getElementById("enemyHitpoints").innerHTML = enemy.name + "has died. You win!";
    document.getElementById("playAgain").style.visibility = "visible";
  } else {
    document.getElementById("fighterHitpoints").innerHTML = "Your hitpoints = " + fighter.hitpoints;
    document.getElementById("enemyHitpoints").innerHTML = enemy.profession + "'s hitpoints = " + enemy.hitpoints;
  }
}

function playAgain() {
  location.reload();
}
