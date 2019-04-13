function missingNum (numArr){
    let sortedArr = numArr.sort(function (a,b) {
        return a - b;
    });

    for(let i = 0; i <= sortedArr.length; i++){
        console.log(sortedArr.length)
        if(i !== sortedArr[i]){
            return i;
        }
    }

    // return sortedArr;
}

console.log(missingNum([0,1,2,4,5,6,7,8,9]))
console.log(missingNum([2,1,5,3,7,8,4,0,6]))