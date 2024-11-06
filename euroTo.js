const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

const fromEuroToYen = function(valueInEuro) {
    return valueInEuro * oneEuroIs.JPY;
}

const fromEuroToPound = function(valueInEuro) {
    return valueInEuro * oneEuroIs.GBP;
}

module.exports = { fromEuroToDollar, fromEuroToYen, fromEuroToPound, oneEuroIs }