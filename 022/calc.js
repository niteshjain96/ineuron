function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

let operation="sub";
let a=8;
let b=3;
switch(operation){
    case "mul": 
        console.log(mul(a,b));
        break;
    case "add":
        console.log(add(a,b));
        break;
    case 'sub':
        console.log(sub(a,b));
        break;
    case 'div':
        console.log(div(a,b));
        break;
    default:
        console.log('Enter Right Operation')
}