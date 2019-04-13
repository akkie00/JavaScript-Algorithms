function isDuplicate(numArr){

    const sortedArr = numArr.sort(function (a,b){
        return a - b;
    });

    for( let i = 0; i < sortedArr.length; i++){
        // console.log(sortedArr[i])
        for( let j = i+1; j < sortedArr.length; j++){
            // console.log(sortedArr[j])
            if(sortedArr[i] === sortedArr[j]){
                // console.log('hey');
                return sortedArr[i];
            }
        }
    }

    // return sortedArr;
}

console.log(isDuplicate([1,3,4,5,1,6]))
console.log(isDuplicate([3,5,6,6]));
console.log(isDuplicate([1,2,3,4,5,6,7,7,78,8,8,]))