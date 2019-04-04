function isPalindrome (str){

let lowCaseStr = str.toLowerCase();
lowCaseStr = lowCaseStr.replace(/[\W_]/g, '');


let reversedStr = lowCaseStr.split('').reverse().join('');
console.log(reversedStr)

return reversedStr == lowCaseStr;

}
console.log(isPalindrome('A man, a plan, a canal. Panama.'));
console.log(isPalindrome('_codegod{}'));
console.log(isPalindrome('Mom'));
