function sumOfDigits(inputStr){
    
    //setting a regular expression to match the digits in a given string
    let digitExp = /\d+/g;
    let numArr = inputStr.match(digitExp);
    // console.log(numArr)
    //initializing a variable to count the total sum
    let sum = 0;

    // var array = [1,2,3,4]
    // // var total = 0;
    // console.log(array)
    // // for( var i in array){
    // //     total += array[i];
    // // }
    // // console.log(total)

    //using a for loop to iterate over the array which contains digits in string format
    for(var i in numArr){
        console.log(numArr[i])
        //wrapping it with Number to convert the string to a number
        sum += Number(numArr[i]);
    }
    return sum;
}

console.log(sumOfDigits('2 apples, 23 oranges'));
console.log(sumOfDigits('233232'));
console.log(sumOfDigits('I know, there are no numbers!'));