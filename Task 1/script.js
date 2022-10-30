/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const paragraphWithLb = document.createElement("p");
const paragraphWithGr = document.createElement("p");
const paragraphWithOz = document.createElement("p");

document.getElementById("output").append(paragraphWithLb, paragraphWithGr, paragraphWithOz);

const user = document.querySelector("form").addEventListener("submit", weightConverter);

function weightConverter(e) {
  e.preventDefault();
  const userWeight = Number(document.querySelector("#search").value);
  const weightToLb = Math.round(userWeight * 2.2046 * 10) / 10;
  const weightToG = userWeight / 0.001;
  const weightToOz = Math.round(userWeight * 35.274 * 10) / 10;

  paragraphWithLb.textContent = "1. Svarai (lb): " + weightToLb;
  paragraphWithLb.style.backgroundColor = "rgb(68, 66, 66)";

  paragraphWithGr.textContent = "2. Gramai (g): " + weightToG;
  paragraphWithGr.style.backgroundColor = "rgb(68, 66, 66)";

  paragraphWithOz.textContent = "3. Uncijos (oz): " + weightToOz;
  paragraphWithOz.style.backgroundColor = "rgb(68, 66, 66)";

 document.querySelector("form").reset(); 
};
