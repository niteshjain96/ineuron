// with inbuilf functions
let arr=[87,3,23,41,2,0,23,4,854,23,12,643,64,22,33,1];

// let sortedarr=arr.slice().sort((a,b)=>a-b);
// console.log(arr);
// console.log(sortedarr);

// without inbuilt functions
let temp;
for(let i=0;i<arr.length-1;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
for(let key of arr){
    console.log(key);
}