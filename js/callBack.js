'use strict';
console.log('main.js');

function displayAsH2(str) {
  const h2El = document.getElementById('h2');
  h2El.textContent = str;
}

function displayAsParagraph(value) {
  const paraEl = document.getElementById('para');
  paraEl.textContent = `The value is ${value}!!!`;
}

displayAsH2('hello world'); // hello world

function myPower(num, callbackfn) {
  const rez = num ** 3;
  callbackfn(rez);
  // return rez;
}
myPower(3, displayAsParagraph);
myPower(11, displayAsH2);
// displayAsParagraph(rez);

console.log('myPower ===', myPower);
