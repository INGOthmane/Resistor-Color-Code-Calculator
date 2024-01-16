function changeColor(elementId, bande) {
  var selectElement = document.getElementById(elementId);
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  var bandeChangeColor = document.getElementById(bande);

  // Couleurs correspondant aux valeurs sélectionnées
  var colorMap = {
    0: "black",
    1: "brown",
    2: "red",
    3: "orange",
    4: "yellow",
    5: "green",
    6: "blue",
    7: "violet",
    8: "grey",
    9: "white",
  };

  // Appliquer la couleur en fonction de la valeur sélectionnée
  bandeChangeColor.style.backgroundColor =
    colorMap[selectedValue] || "transparent";
}

// Utilisation
function updateColors() {
  changeColor("anneau1", "bande1");
  changeColor("anneau2", "bande2");
}
