'use strict';

const nums = [-1, 5, 8, 0, -20, 10, 12, -5, 14];
// filter - atrenka reiksme jei grazinam is vidines funkcijos true, truthy

// const filtered = nums.filter((sk, i) => {
//   if (sk < 0) return true;
//   return false;
// });
const filtered = nums.filter((sk) => (sk = 12));

console.log('filtered ===', filtered);
console.log('nums ===', nums);

// arrray.find() - grazina reiksme kai graznam true

const users = [
  { id: 1, name: 'James', age: 24 },
  { id: 8, name: 'Meke', age: 34 },
  { id: 95, name: 'Bill', age: 54 },
  { id: 14, name: 'Jill', age: 28 },
];

const found = nums.find((sk) => sk < 0);
console.log('found ===', found);

// surasti ir grazinti user su id 14
const user14 = users.find((uObj) => uObj.id === 14);
console.log('user14 ===', user14);
// user14.town = 'Kaunas';
console.log(users[3] === user14);

// atfiltruoti vyresnius nei 25
const over25 = users.filter((betoKOks) => betoKOks.age > 25);

const over25Vardai = over25.map((uObj) => uObj.name);
console.log('over25Vardai ===', over25Vardai);

const magic = users
  .filter((u) => u.age > 25)
  .map((u) => u.name)
  .map((name) => name.toUpperCase());
console.log('magic== ', magic);
