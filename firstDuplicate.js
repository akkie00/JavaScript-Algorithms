function firstDuplicate(dupArr){

    let duplicateObj = [];

    for (let num of dupArr){
        if(duplicateObj.hasOwnProperty(num)){
            return num;
        }
        duplicateObj[num] = num;
    }
    return -1;
}

console.log(firstDuplicate([1,2,3,4,5,3]));
console.log(firstDuplicate([1,2,3,,4,3]));
console.log(firstDuplicate([1,2,3,4]));