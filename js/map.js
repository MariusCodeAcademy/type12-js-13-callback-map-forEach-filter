const nums = [-1, 5, 8, -20, 10, 12, -5, 14];

const numsForEach = nums.forEach((sk) => sk * 100);
// ta pacia eilute bet su map vietoj forEach
// paziureti skirtumus
// map grazina tai ka mes grazinam is funcijos
const numsMap = nums.map((sk) => {
  if (sk > 5) return `reiksme ${sk}`;
});
console.log('nums ===', nums);
console.log('numsMap ===', numsMap);

// console.log({ numsMap: numsMap, numsForEach });

// 7. sukurti nauja masyva kuriame turetume masyva su objektais
// [
//   {value: -1},
//   {value: 5},
//   {value: 8}
//   {value: -20}
//   ...
// ]
// map naudojamas kai norim pakeisti struktura
const objektuMaysvas = nums.map((sk, i) => {
  const rez = {};
  rez.value = sk;
  rez.ind = i;
  return rez;
});
console.log('objektuMaysvas ===', objektuMaysvas);
