/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const user = document.querySelector("form");

user.addEventListener("submit", weightConverter);

function weightConverter(e) {
  e.preventDefault();
  const userWeight = Number(document.querySelector("#search").value);

  const weightToLb = Math.round(userWeight * 2.2046 * 10) / 10;
  const weightToG = Math.round((userWeight / 0.001) * 10) / 10;
  const weightToOz = Math.round(userWeight * 35.274 * 10) / 10;

  //create outputParagraf

  const paragrafWithLb = document.createElement("p");
  paragrafWithLb.textContent = "1. Svarai (lb): " + weightToLb;

  const paragrafWithGr = document.createElement("p");
  paragrafWithGr.textContent = "2. Gramai (g): " + weightToG;

  const paragrafWithOz = document.createElement("p");
  paragrafWithOz.textContent = "3. Uncijos (oz): " + weightToOz;

  document
    .getElementById("output")
    .append(paragrafWithLb, paragrafWithGr, paragrafWithOz);

  document.querySelector("form").reset();
};
