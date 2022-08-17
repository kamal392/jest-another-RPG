const Enemy = require("../lib/Enemy.js");
const Potion =require('../lib/Potion.js');
jest.mock("../lib/Potion.js");

test("creates an enemy object", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.name).toBe("goblin");
  expect(enemy.weapon).toBe("sword");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

// writing test for Enemy

test("gets enemy's health value",()=>{
  const enemy = new Enemy('goblin','sword');

  expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));

});

// check if enemy is alive or not

test('checks if enemy is alive or not',()=>{
  const enemy = new Enemy('goblin','sword');
  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;
  expect(enemy.isAlive()).toBeFalsy();

});
// gets enemy attack value

test('get enemy attack value',()=>{

  const enemy = new Enemy('goblin','sword');
  enemy.strength =10;
  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});
// subtract from the enemy's health

test('subtract from enemy health',()=>{
  const enemy = new Enemy('goblin','sword');
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);

  expect(enemy.health).toBe(0);
});

test('get a description of the enemy',()=>{
  const enemy = new Enemy('goblin','sword');

  expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
  expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));

});

