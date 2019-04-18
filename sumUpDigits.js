function sumOfDigits(num){

    console.log(typeof num);
    let digits = num.toString().split('');
    
    console.log( typeof digits, digits)

    digits =  digits.reduce((currentTotal, currentValue) => parseInt(currentTotal) + parseInt(currentValue))

    return digits; 
}

console.log(sumOfDigits(29));
console.log(sumOfDigits(9342));