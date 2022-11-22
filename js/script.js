{
    const calculateResult = (amount, currency) => {
        const eur = 4.7037;
        const usd = 4.6817;
        const gbp = 5.3610;
        const chf = 4.7467;
        const czk = 0.1932;
        const jpy = 3.2116;

        switch (currency) {
            case "EUR":
                return amount / eur;

            case "USD":
                return amount / usd;

            case "GBP":
                return amount / gbp;

            case "CHF":
                return amount / chf;

            case "CZK":
                return amount / czk;

            case "JPY":
                return amount / jpy;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault()

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value
        const currency = currencyElement.value

        const result = calculateResult(amount, currency);
        updateResultText(result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}