function longestWord(str){

    let strArr = str.replace(/[\W]/g, ' ').split(' ');
    console.log(strArr)

    let longest = '';

    for (let i = 0; i < strArr.length; i++){
        // console.log(strArr[i].length)
        if(strArr[i].length > longest.length){
            longest = strArr[i];
        }
    }
    return longest;
}

console.log(longestWord('Ready, steady, go!'));
console.log(longestWord('Ready[][], steadyyy, GOOO!!!'));
console.log(longestWord('give me an , dfalkfj, kasldkfja'));