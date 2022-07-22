const nums = [-1, 5, 8, -20, 10, 12, -5, 14];
const colors = ['red', 'green', 'blue', 'tomato'];

const paraEl = document.getElementById('para');

// naudojan array.forEach()
// 1. atspausdinti html paragrafe visus skaicius  <p id="para"></p>
nums.forEach((value) => paraEl.append(value, ' '));
// 2. atspausdinti html h2 elemente visus padalintus is 10 - <h2 id="h2"></h2>
// 3. gauti ir atspausdinti nauja masyva kuriame visos reiksmes butu padaugintos is 3
// 4. gauti ir atspausdinti nauja masyva kuriame visos reiksmes padaugintos is ju indexo.
// 5. grazinti nauja masyva kuriame butu reikmes didesnes uz 9
const reiksmesDidesnesUz9 = [];
nums.forEach((sk) => {
  if (sk > 9) reiksmesDidesnesUz9.push(sk);
});
console.log('reiksmesDidesnesUz9 ===', reiksmesDidesnesUz9);
// 6. grazinti ir atspausdinti consoleje visas neigiamas reiksmes
// 6.1 is colors masyvo grazinti nauja masyva kuriame paskutine raide dizioji
// 7. sukurti nauja masyva kuriame turetume masyva su objektais
// [
//   {value: -1},
//   {value: 5},
//   {value: 8}
//   {value: -20}
//   ...
// ]
// 8 extra(nebutinai forEach) padaryti kad paspaudus mygtuka <button id="btn">Daryk</button> mes imptume spalvas is color masyvo ir su jomis dazytume musu .container spalva. Jei daejom iki galo tai pradedam is naujo nuo pirmos spalvos
// 9 extra is nums gauti objekta
// {
//   teigiami: [...]
//   neigiami: [...]
// }
