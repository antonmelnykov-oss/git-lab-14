const player = {
  name: "Герой",
  health: 100,
  attackPower: 20
};

const monster = {
  name: "Гоблін",
  health: 80,
  attackPower: 15
};

const inventory = ["меч", "щит", "зілля здоров'я"];

function showStatus() {
  console.log(`Гравець: ${player.name}`);
  console.log(`Здоров'я: ${player.health} HP`);
  console.log(`\nМонстр: ${monster.name}`);
  console.log(`Здоров'я: ${monster.health} HP`);
}

function attack(attacker, target) {
  target.health -= attacker.attackPower;

  if (target.health < 0) {
    target.health = 0;
  }
}

function monsterAttack() {
  const shieldBonus = inventory.includes("щит") ? 5 : 0;
  const damage = monster.attackPower - shieldBonus;

  player.health -= damage;

  if (player.health < 0) {
    player.health = 0;
  }
}

console.log("Гра «Битва з монстром»");
console.log(`Інвентар: ${inventory.join(", ")}\n`);
showStatus();

let round = 1;

while (player.health > 0 && monster.health > 0) {
  console.log(`\n=== Раунд ${round} ===`);

  console.log(`Герой атакує монстра!`);
  attack(player, monster);
  console.log(`Здоров'я монстра: ${monster.health} HP`);

  if (monster.health > 0) {
    console.log(`\nМонстр атакує героя!`);
    monsterAttack();
    console.log(`Здоров'я героя: ${player.health} HP`);
  }

  round++;
}

console.log("\n=== Кінець гри ===");

if (player.health > 0) {
  console.log("🏆 Перемога!");
  console.log(`${player.name} переміг монстра!`);
} else {
  console.log("💀 Поразка!");
  console.log(`${monster.name} переміг героя.`);
}