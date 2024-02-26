// remove duplicates from array

// Method 1
let arr=[12,5,12,3,5,32,76];
// let newarr=Array.from(new Set(arr));
// console.log((newarr))

// Method 2
let newarr=arr.filter((value,index,arr)=>arr.indexOf(value)===index)
console.log(newarr)