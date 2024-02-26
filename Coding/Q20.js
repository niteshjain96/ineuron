// find avaerage of array of numbers
let arr=[24,243,536,234,4,1,2,4,6,2,4,7,3,5]
// let sum=0;
// for(let i=0;i<arr.length;i++){
// sum +=arr[i];
// }
// console.log(sum);
// let average=sum/arr.length;
// console.log(average);

let result=arr.reduce((acc,index)=>(acc+index));
let average=result/arr.length;
console.log(average)