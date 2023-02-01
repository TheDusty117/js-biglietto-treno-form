
console.log("working!")

//variabili del prezzo


//seleziono gli elementi interattivi dell'html tramite il "name"

const inputYourName = document.querySelector(
  "input[name='your-name']"
)

const inputTotalDistance = document.querySelector(
  "input[name='distance']"
)

const selectAgeElement = document.querySelector(
  "select[name='age']"
)

const inputBtnElement = document.querySelector(
  "input[type='button']"
)

const h1Element = document.querySelector("div .name-lastname-sector")

console.log(
  inputTotalDistance,
  selectAgeElement,
  inputBtnElement,
  inputYourName
  )

//aggiungo il listener al bottone con il click

inputBtnElement.addEventListener("click", function () {
  console.log("applica tutto")

  console.log
  (inputYourName.value, inputTotalDistance.value, selectAgeElement.value, )

  let  = document.getElementById("name-lastname-sector")


  

})



// let pricePerKm = 0.21;

// let finalPrice = totalDistance * pricePerKm;

// console.log(totalDistance)
