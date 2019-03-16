//my soln
function convertTemperature(celsius){

    const fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

console.log(convertTemperature(30));
console.log(convertTemperature(-30));

//Dylan's
function convertToFahrenheit(celsius){
    return celsius * 9/5 + 32;
}
console.log(convertToFahrenheit(30));