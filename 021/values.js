// console.log(typeof(7))
// console.log(typeof(2.5))
// console.log(2.5)

// String
// console.log(typeof('nitesh'))

// console.log(typeof(true))
// console.log(typeof(false))

// null
// console.log(typeof(null))
// console.log(typeof(undefined))

// Arrays
// let arr=[1,2,5,2,6]
// arr={
//     a:32
// }
// console.log(typeof(arr));

// objects

// let arr=[1,2,5,2,'nitesh',null,undefined,{id:'nitesh'}]
// for(let key of arr){
//     console.log(key);
// }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
let obj={
    name:'nitesh',
    age:54,
    gender:"Male"
}
for(let key in obj){
    // console.log((obj[key]));
    console.log(key);
}