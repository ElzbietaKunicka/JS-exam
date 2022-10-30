/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white"
};

function showObjectKeys(obj) {
  const arrayWithKey = Object.keys(obj);
  return arrayWithKey;
};
console.log(showObjectKeys(audi));

