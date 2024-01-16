// var anneau1 = document.querySelectorAll("#couleurAnneau1");
// for (let i = 0; i < anneau1.length; i++) {
//   var anneau1_value = anneau1[i].value;
//   // console.log(anneau1_value);
// }
// var anneau2 = document.querySelectorAll("#couleurAnneau2");
// for (let i = 0; i < anneau2.length; i++) {
//   var anneau2_value = anneau2[i].value;
//   // console.log(anneau2_value);
// }
// var anneau3 = document.querySelectorAll("#couleurAnneau3");
// for (let i = 0; i < anneau3.length; i++) {
//   var anneau3_value = anneau3[i].value;
//   // console.log(anneau3_value);
// }

// var option1 = document.querySelectorAll("#couleurAnneau1");
// console.log(option1);
// document.querySelector(".opt").addEventListener("click", valeurAnneau1);

//***************************************************** */

//  Début : Code Yassin //
// let anneau1 = document.querySelector("#anneau1");
// let valeur1;
// function valeurAnneau1() {
//   valeur1 = anneau1.options[anneau1.selectedIndex].value;
//   console.log(valeur1);
// }

// document
//   .querySelector("#btn")
//   .addEventListener("click", () => console.log(valeur1));

// anneau1.addEventListener("click", valeurAnneau1);

//  Fin : Code Yassin //

/******* Essai AIT DOUCH ***************/
let anneau1 = document.querySelector("#anneau1");
let anneau2 = document.querySelector("#anneau2");
let anneau3 = document.querySelector("#anneau3");
let tolerance = document.querySelector("#anneauTolérance");
let resultat;
let toleranceValue;
let resultatMin;
let resultatMax;

const btn = document.querySelector("#btn");
btn.addEventListener("click", getValue);
function getValue() {
  let valeur1 = anneau1.value;
  let valeur2 = anneau2.value;
  let valeur3 = anneau3.value;
  let valeur4 = tolerance.value;
  // console.log(valeur1);
  // console.log(valeur2);
  // console.log(valeur3);
  // console.log(valeur4);
  let x;
  x = valeur1.toString() + valeur2.toString();
  parseInt(x);
  // console.log(x);
  resultat = x * 10 ** valeur3;
  // console.log(resultat);
  toleranceValue = (resultat * valeur4) / 100;
  // console.log(toleranceValue);
  resultatMin = resultat - toleranceValue;
  resultatMax = resultat + toleranceValue;
  // console.log(resultatMax);
  // console.log(resultatMin);
  let inputResistance = document.querySelector("#resultat_resistance");
  let inputTolerance = document.querySelector("#resultat_tolerance");
  let inputResultatMax = document.querySelector("#resultat_max");
  let inputResultatMin = document.querySelector("#resultat_min");
  inputResistance.value = resultat;
  inputTolerance.value = toleranceValue;
  inputResultatMax.value = resultatMax;
  inputResultatMin.value = resultatMin;
}

function changeColor() {
  var selectElement1 = document.getElementById("anneau1");
  var selectElement2 = document.getElementById("anneau2");
  var selectElement3 = document.getElementById("anneau3");
  var selectElement4 = document.getElementById("anneauTolérance");

  // console.log(selectElement1);
  var bandeChangeColor = document.getElementById("bande1");
  var bande2ChangeColor = document.getElementById("bande2");
  var bande3ChangeColor = document.getElementById("bande3");
  var bande4ChangeColor = document.getElementById("bande4");
  // console.log(bandeChangeColor);
  // Obtenez la valeur sélectionnée
  var selectedValue1 =
    selectElement1.options[selectElement1.selectedIndex].value;
  test(selectedValue1, bandeChangeColor);
  var selectedValue2 =
    selectElement2.options[selectElement2.selectedIndex].value;
  test(selectedValue2, bande2ChangeColor);
  var selectedValue3 =
    selectElement3.options[selectElement3.selectedIndex].value;
  test(selectedValue3, bande3ChangeColor);
  var selectedValue4 =
    selectElement4.options[selectElement4.selectedIndex].value;
  switch (selectedValue4) {
    case "5":
      bande4ChangeColor.style.backgroundColor = "gold";
      break;
    case "10":
      bande4ChangeColor.style.backgroundColor = "silver";
      break;

    default:
      bande4ChangeColor.style.backgroundColor = "transparent";
  }

  // Appliquez le style en fonction de la valeur sélectionnée
  function test(bom, toto) {
    switch (bom) {
      case "0":
        toto.style.backgroundColor = "black";
        break;
      case "1":
        toto.style.backgroundColor = "brown";
        break;
      case "2":
        toto.style.backgroundColor = "red";
        break;
      case "3":
        toto.style.backgroundColor = "orange";
        break;
      case "4":
        toto.style.backgroundColor = "yellow";
        break;
      case "5":
        toto.style.backgroundColor = "green";
        break;
      case "6":
        toto.style.backgroundColor = "blue";
        break;
      case "7":
        toto.style.backgroundColor = "violet";
        break;
      case "8":
        toto.style.backgroundColor = "grey";
        break;
      case "9":
        toto.style.backgroundColor = "white";
        break;
      default:
        // Gérez le cas par défaut si nécessaire
        toto.style.backgroundColor = "transparent";
    }
  }

  // switch (selectedValue2) {
  //   case "0":
  //     bande2ChangeColor.style.backgroundColor = "black";
  //     break;
  //   case "1":
  //     bande2ChangeColor.style.backgroundColor = "brown";
  //     break;
  //   case "2":
  //     bande2ChangeColor.style.backgroundColor = "red";
  //     break;
  //   case "3":
  //     bande2ChangeColor.style.backgroundColor = "orange";
  //     break;
  //   case "4":
  //     bande2ChangeColor.style.backgroundColor = "yellow";
  //     break;
  //   case "5":
  //     bande2ChangeColor.style.backgroundColor = "green";
  //     break;
  //   case "6":
  //     bande2ChangeColor.style.backgroundColor = "blue";
  //     break;
  //   case "7":
  //     bande2ChangeColor.style.backgroundColor = "violet";
  //     break;
  //   case "8":
  //     bande2ChangeColor.style.backgroundColor = "grey";
  //     break;
  //   case "9":
  //     bande2ChangeColor.style.backgroundColor = "white";
  //     break;

  //   default:
  //     bande2ChangeColor.style.backgroundColor = "transparent";
  // }
}
