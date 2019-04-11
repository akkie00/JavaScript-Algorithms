function isDigit(str){

    let digitArray = ['1','2','3','4','5','6','7','8','9'];
    return digitArray.includes(str);
    // return str.includes('/[0-9]/+')
}

console.log(isDigit('1'));
console.log(isDigit('5'));
console.log(isDigit('d'));
