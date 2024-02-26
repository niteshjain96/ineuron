// palindrome

// Method1
// let string="naman";
// let reverse=Array.from(string).reverse().join('');
// console.log(reverse)
// if(string==reverse){
//     console.log("Palindorme");
// }
// else{
//     console.log("Not");
// }

// Method 2
let string='Naman';
let num=true;
for(let i=0;i<string.length/2;i++){
    if(string[i]!==string[string.length-1-i]){
        num=false;
        break;
    }
}
if(num==true){
    console.log('palindrome')
}
else{
    console.log('Not');
}
