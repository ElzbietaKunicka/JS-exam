/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const element = document.querySelector("#btn__element");

let countClick = 0;

element.onclick = function () {
  const state = document.querySelector("#btn__state");
  countClick++;
  state.textContent = countClick;
};
