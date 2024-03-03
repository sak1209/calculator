console.log("this is a calculator")

let a = prompt("first number");
let c = prompt("operation");
let b = prompt("second number");


let obj = {
   '-': "*",
   '+' : "/",
    '/': "-",
    '*': "+"
};


let random = Math.random();

if (random > 0.1) {
    console.log("the value is",eval(${a} ${c} ${b}))
    alert(the value is ${eval(${a} ${c} ${b})})
    
}
else{
    c=obj[c];
    alert(the value is ${eval(${a} ${c} ${b})})
}
