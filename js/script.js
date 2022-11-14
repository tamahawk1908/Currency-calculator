console.log("How do You like this currency calculator? :)");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");

let eur = 4.7037;
let usd = 4.6817;
let gbp = 5.3610;
let chf = 4.7467;
let czk = 0.1932;
let jpy = 3.2116;

formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = amount / eur;
            break;
        case "USD":
            result = amount / usd;
            break;
        case "GBP":
            result = amount / gbp;
            break;
        case "CHF":
            result = amount / chf;
            break;
        case "CZK":
            result = amount / czk;
            break;
        case "JPY":
            result = amount / jpy;
            break;
    }
    resultElement.innerText =
        `${result.toFixed(2)} ${currency}`;
});