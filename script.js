import { values } from "./data.js";
import { json } from "./data.js";
// import { characters } from './data.js';

//Se guarda toda la tada en la constante AllData
const allvalue = values;
const alljson = json;

console.log(allvalue);
console.log(alljson);

let dropdown = document.getElementById("mySelectField");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Elija comuna";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

let alljsonlenght = Object.keys(alljson.data).length;

let option;
for (let i = 0; i < alljsonlenght; i++) {
  console.log(alljsonlenght);
  option = document.createElement("option");
  option.text = Object.keys(alljson.data)[i];
  option.value = Object.keys(alljson.data)[i];
  dropdown.add(option);
}

document.getElementById("mySelectField").onchange = function () {
  let selection = document.getElementById("mySelectField").value;

  if (selection == "BUIN") {
    console.log("BUIN");
  } else if (selection == "LAJA") {
    console.log("LAJA");
  } else if (selection == "LEBU") {
    console.log("LEBU");
  } else if (selection == "LOTA") {
    console.log("LOTA");
  } else {
    alert("Debe seleccionar una opción");
  }
};
