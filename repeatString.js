// function repeatAString(str, num){
// console.log(str+ " "+num)
// let repeatedString ='';
//     for(var i = 0; i <= num; i++){
//         repeatedString += str;
//     }
//     return repeatAString;
// }

function repeatAString (str, num){
    let repeatedString = ''
    while(num > 0){
        console.log('hey')
        // repeatedString = repeatedString.concat(str);
        repeatedString += str;
        num--;
    }
    return repeatedString;

}

console.log(repeatAString('Akshay', 3));