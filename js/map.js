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
