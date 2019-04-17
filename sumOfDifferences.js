function gettingSum (inputArr){
    let max = Math.max(...inputArr);
    console.log(max)
    let min = Math.min(...inputArr)
    console.log(min)
    let sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
}

console.log(gettingSum([10, 5]));
// console.log(gettingSum([1,5]));