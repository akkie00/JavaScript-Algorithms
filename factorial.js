function factorial(num){
    let prod = 1;
    for(var x = 1; x <= num; x++){
        console.log(x);
        console.log(prod);
        prod *=  x;
        console.log(prod);
    }

    return prod;
}

console.log(factorial(5));
console.log(factorial(0));