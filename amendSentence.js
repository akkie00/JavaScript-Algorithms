function sentence(inputStr){

    let properSentence = '';
    let splitStr = inputStr.split('');
    console.log(splitStr)
    for (var i =0; i< splitStr.length; i++){
        console.log(splitStr[i])
        if(splitStr[i] == splitStr[i].toUpperCase()){
            splitStr[i] = splitStr[i].toLowerCase();
            splitStr.splice(i, 0, ' ');
            
         }
    }
properSentence = splitStr.join('').trim();
console.log(properSentence.length)
return properSentence

}

console.log(sentence('LoseYourselfInTheMusic'));
console.log(sentence('EminemIsRapGod'));