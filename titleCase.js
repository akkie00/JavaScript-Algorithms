function titleCase(str){

    // let splitStr = str.split(' ');

    // let titledCase = splitStr.forEach(element => {
    //     element = titled.concat(element.slice(1, element.length));
    // });
    // titledCase = titledCase.join(' ');
    // return titledCase;

    // let splitStr = str.split(' ');
    // let titleCasedSentence = '';
    // splitStr.forEach(element => {
    //     const titled = element.charAt(0).toUpperCase();
    //     element = titled.concat(element.slice(1, element.length))
    //     titleCasedSentence = element;
    // });
    // titleCasedSentence = titleCasedSentence.join(' ');
    // return element;
    let splitStr2 = str.split(' ');

    splitStr2 = splitStr2.map((word) =>{
        console.log(word)
        const titled = word.charAt(0).toUpperCase();
        word = titled.concat(word.slice(1, word.length))
        return word;

    });

    return splitStr2.join(' ');
}

console.log(titleCase('hi, my name is akshay'));