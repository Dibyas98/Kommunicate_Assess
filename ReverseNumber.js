
let num = 149;
function reverseNumber(num){
let revnum = num.toString().split('').reverse().join('')
  return parseInt(revnum)
}
let res = reverseNumber(num);
console.log(res);