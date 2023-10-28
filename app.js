

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollarAmount){
    return (dollarAmount * oneEuroIs.JPY * 0.93);
}
console.log(fromDollarToYen(1));

function fromEuroToDollar(euroAmount){
    return (euroAmount * oneEuroIs.USD);
}
console.log(fromEuroToDollar(1));

function fromYenToPound(yenAmount){
    return ((yenAmount * 0.006) * oneEuroIs.GBP);
}
console.log(fromYenToPound(1));

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};