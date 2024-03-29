//TODO
//collegare gli input di HTML con JS
//trasformare gli elementi in modo tale da poter eseguire le operazioni di calcolo del costo del biglietto e dello sconto applicato
//stampare in HTML il risultato dei calcoli, possibilmente riportato in una scheda di riepilogo del viaggio

//collegamento input HTML all'input 'submit' del form

const buttonElementSubmit = document.getElementById('submit')

const kmElement = document.getElementById ('km')
const km = kmElement.value

const ageElement = document.getElementById('age')
const age = ageElement.value

const shownPrice = document.getElementById('result') 
const showDiscount = document.getElementById('discount')

buttonElementSubmit.addEventListener ('click', function () {

    const km = kmElement.value

    const age = ageElement.value

    let flatPrice = 0.21 * km
    console.log(flatPrice)

    let discount = 0
    if(age<18){
        discount= 0.2
    } else if (age>65){
        discount = 0.4
    }
    const finalPrice = flatPrice - flatPrice*discount

    console.log(finalPrice.toFixed(2))

    shownPrice.innerHTML = 'Il prezzo del tuo biglietto è di: ' + finalPrice.toFixed(2) + ' &euro;' 

    showDiscount.innerHTML = 'Sconto totale ricevuto: ' + discount.toFixed(2) + ' &euro;'


})


