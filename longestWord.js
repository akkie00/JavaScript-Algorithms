function longestWord(str){
    //splitting each word up by space
    let wordArr = str.split(' ');
    //initializing word length to 0, so that it can be replaced with actual word.length
    let longestLength = 0;
    //iterating through each word using for loop
    for(var i = 0; i<wordArr.length; i++){
        console.log(wordArr[i])

        //checking each word's length if it is greater than the initialized variable
        if(wordArr[i].length > longestLength){

            //replacing the lenght of word variable if the condition is true
            longestLength = wordArr[i].length;
            console.log(longestLength)
        }
    }
    return longestLength;
}

console.log(longestWord('Google is best browser'));
console.log(longestWord('My name is Akshay'));