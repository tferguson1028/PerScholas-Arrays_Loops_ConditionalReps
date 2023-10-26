// Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"], 
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]]
];

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);
