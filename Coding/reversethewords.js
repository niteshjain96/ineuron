// let string="John Doe";
// let splitted=string.split(" ");
// let result='';
// function reverse(str){
//     result= str.split('').reverse().join('');
//     return result;
// }
// console.log((reverse(string)))
// for(let i=0;i<splitted.length;i++){
//     result += splitted[i].split('').reverse().join('');
// }
// console.log(result);

// var myString = "Hello, World!";
// var reversedString = myString.split(' ').reverse().join(' ');
// console.log(reversedString);

let string='John Doe';
// let str2=string.split(' ');
// // console.log(str2);
// let result=str2.reverse()
// console.log(result.reverse())
let str3=Array.from(string).reverse().join('').split(' ');
// console.log("str2" , str2);
// let str3=str2.split(' ');
// console.log("str3" , str3);
let result='';
for(let i=str3.length-1;i>=0;i--){
    result = result+ str3[i] +" ";
}
console.log(result);