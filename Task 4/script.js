/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const carCard = parametr => {
    if (parametr && parametr.length) {
      const propertycontainer = document.getElementById("output");
      propertycontainer.style.display = "flex";
      propertycontainer.style.gap = "2rem";
      propertycontainer.style.flexDirection = "column";
      propertycontainer.style.width = "50%";
      propertycontainer.style.alignItems = "center";
      propertycontainer.style.margin = "2rem auto";
  
      parametr.forEach(property => {
        const card = document.createElement("div");
        card.style.border = "0.2rem solid black";
        card.style.textAlign = "center";
        card.style.width = "100%";
        card.style.height = "min-content";
        card.style.backgroundColor = "rgb(78, 88, 98)";
  
        const brand = document.createElement("h2");
        brand.textContent = property.brand;
        brand.style.height = "15%";
        brand.style.fontSize = "2.2rem";
        brand.style.color = "rgb(245, 224, 224)";
        brand.style.paddingTop = "1rem";
  
        const carModels = document.createElement("div");
        carModels.id = "outputmodels";
        const modelsArray = property.models;
  
        const addSpace = () => {
          const convertToString = modelsArray.toString().split(",").join(", ");
          return convertToString;
        };
  
        carModels.innerHTML += "<span> Models:</span>" + "<br>" + addSpace();
        const modelsStyle = carModels.style;
        modelsStyle.gap = "2rem";
        modelsStyle.height = "80%";
        modelsStyle.width = "100%";
        modelsStyle.fontSize = "1.5rem";
        modelsStyle.textAlign = "left";
        modelsStyle.overflowWrap = "normal";
        modelsStyle.padding = "1.2rem";
        modelsStyle.lineHeight = "2.5rem";
        modelsStyle.letterSpacing = "0.2rem";
  
        card.append(brand, carModels);
        document.querySelector("#output").append(card);
      });
    };
  };
  
  const getCars = async () => {
    try {
      const response = await fetch("./cars.json");
      const data = await response.json();
      carCard(data);
    } catch (error) {
      console.log(error);
    };
  };
  getCars();