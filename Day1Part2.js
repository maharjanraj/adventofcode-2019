const modules = require("./Day1Input");

const modulesArray = modules.split("\n");
let totalFuel = 0;

for (let i = 0; i < modulesArray.length; i++) {
  const module = modulesArray[i];

  function calculateTotalFuel(module) {
    const fuel = Math.floor(module / 3) - 2;
    if (fuel <= 0) {
      return;
    } else {
      totalFuel += fuel;
      return calculateTotalFuel(fuel);
    }
  }

  calculateTotalFuel(module);
}

console.log(totalFuel);

// Ans: 4992931
