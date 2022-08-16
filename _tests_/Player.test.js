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









const Potion =require('../lib/Potion');
jest.mock('../lib/Potion.js');
console.log(new Potion());
