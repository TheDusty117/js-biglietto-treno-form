
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

const h1ElementPrice = document.querySelector("div .prezzo_finito")

console.log(
  inputTotalDistance,
  selectAgeElement,
  inputBtnElement,
  h1ElementPrice
  )

//aggiungo il listener al bottone con il click

inputBtnElement.addEventListener("click", function () {
  console.log("applica modifica al prezzo")
})



// let pricePerKm = 0.21;

// let finalPrice = totalDistance * pricePerKm;

// console.log(totalDistance)
