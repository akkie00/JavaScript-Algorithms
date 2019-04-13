function isValidTime(str){

    let inputTime = str.split(':');
    console.log(inputTime[0], inputTime[1]);

    if((Number(inputTime[0])) < 24 && (Number(inputTime[1])) < 60){
        return true;
    }
    else return false;
}

console.log(isValidTime('00:00'));
console.log(isValidTime('00:30'));
console.log(isValidTime('00:60'));
console.log(isValidTime('24:30'));

// console.log(isValidTime('05:30'));