/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;

  Calculator.prototype.sum = function () {
    const sum = Number(a + b);
    console.log(sum);
  };
  Calculator.prototype.subtraction = function () {
    const subtraction = Number(a - b);
    console.log(subtraction);
  };
  Calculator.prototype.multiplication = function () {
    const multiplication = Number(a * b);
    console.log(multiplication);
  };
  Calculator.prototype.division = function () {
    const division = Number(a / b);
    console.log(division);
  };
};

const calculate = new Calculator(25.5, 2);

calculate.sum();
calculate.subtraction();
calculate.multiplication();
calculate.division();
