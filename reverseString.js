//using all in one line
function reverseOfString(word) {
    var strArr = word.split('')
    var reverseArr = strArr.reverse(strArr).join('');

    console.log(reverseArr);
}

// using Arrow function
const reverse2 = (word) => {
    return word.split('').reverse().join('');
};

//using for loop
function reverseFor(word) {
    var splittedArr = word.split('');
    // console.log(splittedArr);
    var revesedArr = splittedArr.reverse();
    // console.log(revesedArr);
    for (var i = 0; i <= revesedArr.length - 1; i++) {
        console.log(revesedArr[i])
        // revesedArr = splittedArr[i].reverse();
        return revesedArr.join('');

    }
}

console.log(reverseFor('javascript'));
console.log(reverse2('javascript'));
console.log(reverseOfString('akshay'));
console.log(reverseOfString('codegod'));

//Dylan's 

function reversedWord (word){

    let reverseWord  = '';
        for( let i = word.length -1 ; i >= 0; i--){
            console.log(word[i]);
            reverseWord += word[i];
        }

    return reverseWord;
}
console.log(reversedWord('javascript'));