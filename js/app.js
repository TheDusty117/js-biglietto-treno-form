
console.log("working!")

//variabili del prezzo


//seleziono gli elementi interattivi dell'html tramite il "name"

// const inputYourName = document.getElementById("nomeid")

const inputYourName = document.getElementById("name-id");

const inputTotalDistance = document.getElementById("distance-id")

const selectAgeElement = document.getElementById("age-id")

const inputBtnElement = document.getElementById("button-id")

const h1Element = document.querySelector("div .name-lastname-sector")

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


  

})




// let pricePerKm = 0.21;

// let finalPrice = totalDistance * pricePerKm;

// console.log(totalDistance)
