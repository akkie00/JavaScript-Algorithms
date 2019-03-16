function intro(str1, str2){
    return "Hi, my name is " +str1 + str2;
}

function intro2(str1, str2){
    var str3 = "Hello, my name is "
    return str3.concat(str1, str2);
}

function introduction3(firstName, lastName){
    const intro = `Hi all, my name is ${firstName} ${lastName}.`;
    return intro;
}

console.log(introduction3('Akshay', 'kumar'));
// console.log(intro2('Akkie', ' kumar'))
// console.log(intro('Akshay', ' kumar'))