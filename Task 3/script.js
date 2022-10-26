/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const userCard = parameter => {
  if (parameter && parameter.length) {
    const paragraph = document.querySelector("#message");
    paragraph.textContent = "";
    const propertycontainer = document.getElementById("output");
    propertycontainer.style.display = "flex";
    propertycontainer.style.flexWrap = "wrap";
    propertycontainer.style.justifyContent = "center";
    propertycontainer.style.gap = "2rem";
    propertycontainer.style.margin = "2.4rem auto";
    propertycontainer.style.width = "50%";

    parameter.forEach(property => {
      const card = document.createElement("div");
      card.style.border = "0.2rem solid black";
      card.style.textAlign = "center";

      const img = document.createElement("img");
      img.src = property.avatar_url;
      img.alt = `${property.login} picture`;
      img.style.width = "20rem";

      const intro = document.createElement("h2");
      intro.textContent = property.login;

      card.append(img, intro);
      document.querySelector("#output").append(card);
    });
  }
};
userCard();

function getUserFun(event) {
  event.preventDefault();

  const getUsers = async () => {
    try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      userCard(data);
    } catch (error) {
      console.log(error);
    }
  };
  getUsers();
}

const showUsers = document.querySelector("button");
showUsers.addEventListener("click", getUserFun);
