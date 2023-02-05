
// console.log("working!")

// //variabili del prezzo


// //seleziono gli elementi interattivi dell'html tramite il "name"

// // const inputYourName = document.getElementById("nomeid")

// const inputYourName = document.getElementById("name-id");

// const inputTotalDistance = document.getElementById("distance-id")

// const selectDiscountElement = document.getElementById("sconto")

// const inputBtnElement = document.getElementById("button-id")


// console.log(
//   inputYourName,
//   inputTotalDistance,
//   selectDiscountElement,
//   inputBtnElement
//   )
  
//   let pricePerKm = 0.21;
  
//   let finalPrice = inputTotalDistance * 0.21;
  
//   inputBtnElement.addEventListener("click", function () {
    
//     console.log
//     (inputYourName.value, inputTotalDistance.value, selectDiscountElement.value, pricePerKm, finalPrice)
    
//     document.getElementById("distance-sector").innerHTML = finalPrice;
    
    
    
//   })
  
// -----------------------PROVA DUE DOPO VARI TRIAL AND ERROR E RIPASSI----------------------

console.log("funziono! :)")

// credo delle variabili agganciandole all'html in modo tale da poter utilizzare
//IL RISULTATO dell'inserimento dell'utente e utilizzarlo per IL MIO CALCOLO!

const prezzoPerKm = 0.21  //variabile del prezzo per 1 km

const inputNameElement = document.getElementById("nome-cognome-id")

const inputDistanceElement = document.getElementById("distance-id")
console.log(inputDistanceElement)  //dichiaro var dell'input nel html

const selectDiscountElement = document.getElementById("discount-id")
console.log(selectDiscountElement)  //dichiaro variabile del selettore sconto/fascia eta,

const inputBtnElement = document.getElementById("calculate-id")
console.log(inputBtnElement)    //dichiaro var del input bottone sempre prendendo dal doc.html

// AGGIUNGI VARIABILE CON INNERHTML CORRISPONDENTE AL RISULTATO

const resultName = document.getElementById("risultato-nome-id")

const resultElement = document.getElementById("risultato-id")

//AL CLICK IL PULSANTE CALCOLA IL PREZZO DEL BIGLIETTO 
// * tenendo conto delle variabili inserite sopra

// INIZIO FUNZIONE CON SEGUENTE CALCOLO AL CLICK! ----------------------

inputBtnElement.addEventListener ("click", function (){

  //STAMPARE NOME IN HTML
  resultName.innerHTML = inputNameElement.value // inserira' in html il valore di cio che scrivo nell'input name
                                                // in questo caso parliamo del text, quindi cio che scrivo

  //DEFINIRE PREZZO BASE
  let km = inputDistanceElement.value
  console.log(typeof km, km.length) // viene prodotta una stringa al click, va convertita in numeri

  let kmNumber = parseFloat(km) // parsefloat trasforma le stringhe in un valore numerico, da poter utiliozzare nel mio calcolo
  console.log(typeof kmNumber, kmNumber) // uso il console log per identificare di che tipo e' il prodotto che esce dall'inserimento dei km

  
  let prezzoBase = kmNumber * prezzoPerKm //il prezzo base= kmNumber(km ma trasformato da stringa in numero sopra) moltiplicato per prezzoPerKm (0.21)
  console.log("prezzo base!", prezzoBase) //controllo il console log cosa dice dopo aver inserito i km nel imput e vedo il risultato, che non subira' sconti dato che ci sta ancora da definire lo sconto nella SELECT

  //DEFINIRE LO SCONTO

  let discount = 0
  const selectedDiscount = selectDiscountElement.value //lo sconto parte dal numero 0 nella variabile, creo una const scontoSelezionato, che corrisponde al valore di selectDiscountElement
  console.log(selectedDiscount, typeof selectedDiscount) // dal console log selectedDiscount e' una stringa

  //CASISTICHE POSSIBILI DELLA SCELTA

  if (selectedDiscount === '1') {  // se selectedDiscount uguale al valore '1' della prima select, controlla il value della select!!!
    discount = prezzoBase * 0.2    //allora discount = prezzoBase * 0.2 (quindi 20%)
  } else if (selectedDiscount === '2') {
    discount = prezzoBase * 0.4    //allora discount = prezzoBase * 0.4 (quindi 40%)
  }

  const finalPrice = prezzoBase - discount
  console.log(prezzoBase, discount, finalPrice) // controllo che venga applicato lo sconto in base alla select selezionata tramite il value!!!

  resultElement.innerHTML = finalPrice.toFixed(2) + ' euro'

}) // FINE DELLA FUNZIONE E CALCOLI