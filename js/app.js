
console.log("working!")

//variabili del prezzo


//seleziono gli elementi interattivi dell'html tramite il "name"

// const inputYourName = document.getElementById("nomeid")

const inputYourName = document.getElementById("name-id");

const inputTotalDistance = document.getElementById("distance-id")

const selectAgeElement = document.getElementById("age-id")

const inputBtnElement = document.getElementById("button-id")


console.log(
  inputYourName,
  inputTotalDistance,
  selectAgeElement,
  inputBtnElement
  )

//aggiungo il listener al bottone con il click
// fin qua sotto tutto bene, il console log sembra ricevere tutte le info sopra richieste

inputBtnElement.addEventListener("click", function () {
  
  console.log
  (inputYourName.value, inputTotalDistance.value, selectAgeElement.value, )

  document.getElementById("name-lastname-sector").innerHTML = inputYourName.value;
  document.getElementById("distance-sector").innerHTML = inputTotalDistance.value;
  document.getElementById("age-sector").innerHTML = selectAgeElement.value;

  

})




// let pricePerKm = 0.21;

// let finalPrice = totalDistance * pricePerKm;

// console.log(totalDistance)
