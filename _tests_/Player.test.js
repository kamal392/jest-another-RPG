const Player = require('../lib/Player');
// writing test for creating player object
test('create a player object',()=>{
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
   
});
// writing test for player's stats

test("gets player's stats as a object",()=>{
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

// writing a test for inventory method
test("gets inventory from player or returns false", () => {
  const player = new Player("Dave");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

// writing a test for method getHealth()
test("get player's health value",()=>{
  const player = new Player('Dave');

expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()))
});

// Writing a test to for player life

test('checks if player is alive or not',()=>{
const player = new Player('Dave')

expect(player.isAlive()).toBeTruthy();

player.health = 0;

expect(player.isAlive()).toBeFalsy();
});

// Writing test for reduceHealth()
test("subtracts from players's health",()=>{
  const player = new Player('Dave');
  const oldHealth = player.health;

 
  player.reduceHealth(5);
  expect(player.health).toBe(oldHealth-5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);

});

// writing test for player's attack
test("gets  player's attack value",()=>{

  const player = new Player('Dave');
  player.strength =10;

  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
  
});

// writing a test to check potion was added correctly
test('add a potion to the inventory',()=>{
  const player =new Player('Dave');
  const oldCount = player.inventory.length;

  player.addPotion(new Potion());

  expect(player.inventory.length).toBeGreaterThan(oldCount);
});

// writing test to ensure rite potion is removed

test('use a potion from inventory',()=>{
  const player = new Player('dave');
  player.inventory = [new Potion(),new Potion(),new Potion()];
  const oldCount = player.inventory.length;

  player.usePotion(1);
  expect(player.inventory.length).toBeLessThan(oldCount);

});









const Potion =require('../lib/Potion');
jest.mock('../lib/Potion.js');
console.log(new Potion());
