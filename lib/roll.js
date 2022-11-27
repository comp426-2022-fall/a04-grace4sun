export function roll(sides, numDice, numRolls) {

  var resultArr = []
  var i = 0;
  var x = 0;

  while (i < numRolls){
    var roll = 0;
    while (x < numDice){
      roll += Math.floor(Math.random() * sides) + 1;
      x++;
    }
    resultArr[i] = roll;
    i++;
    x = 0;
  }


  const output = {
    "sides": sides,
    "dice": numDice,
    "rolls": numRolls,
    "results": resultArr
  }

  return JSON.stringify(output);
}