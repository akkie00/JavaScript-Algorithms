function uniqueArrayValues(arr1, arr2) {

    console.log(arr1, arr2);

    let uniqueArr = [];
    for (const val of arr1) {
        if (!arr2.includes(val) && !uniqueArr.includes(val)) {
            uniqueArr.push(val);
        }
    }
    for (const val of arr2) {
        if(!arr1.includes(val) && !uniqueArr.includes(val)){
            uniqueArr.push(val)
        }
    }
    return uniqueArr;

}

console.log(uniqueArrayValues([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(uniqueArrayValues([1,2,8,3,6], [3,2,1,8]))