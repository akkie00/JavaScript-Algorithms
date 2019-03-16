//if divisble by 3, fizz.. 5 buzz, both fizzbuzz, none ''
function fizzBuzzDetector(divident) {
    if ((divident % 3 && divident % 5) === 0) {
        return 'fizzbuzz';
    }

    else if (divident % 3 === 0) {
        return 'fizz';
    }
    else if (divident % 5 === 0) {
        return 'buzz'
    }

    else {
        return 'invalid'
    }
}
console.log(fizzBuzzDetector(5));

//Dylan's 
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }

    else if (num % 3 === 0) {
        return 'fizz';
    }
    else if (num % 5 === 0) {
        return 'buzz'
    }
    else {
        return 'invalid'
    }
}
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(8));

//another clean way
function fizzBuzz2(num) {
    var word = '';
    if (num % 3 === 0) {
        word = word.concat('fizz');
    }
    if (num % 5 === 0) {
        word = word.concat('buzz');
    }
    return word;
}

console.log(fizzBuzz2(5));
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(8));
