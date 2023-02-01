
console.log("working!")

//seleziono gli elementi interattivi dell'html tramite il "name"

const inputTotalDistance = document.querySelector(
  "input[name='distance']"
  )

const selectAgeElement = document.querySelector(
  "select[name='age']"
)

const inputBtnElement = document.querySelector(
  "input[type='button']"
)

console.log(inputTotalDistance,selectAgeElement,inputBtnElement)

//aggiungo il listener al bottone con il click

inputBtnElement.addEventListener("click", function () {
  console.log("applica modifica al prezzo")
})



// let pricePerKm = 0.21;

// let finalPrice = totalDistance * pricePerKm;

// console.log(totalDistance)
