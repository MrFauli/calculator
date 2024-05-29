let num1 = undefined;
let num2 = undefined;
let operator = undefined;
let displayValue = undefined;
const display = document.querySelector("#display");
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equals")
const divs = document.createElement("div");
const nums = document.querySelector("#nums");

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function operate(num1,operator,num2){
    result = operator(num1,num2)
    
    return result;
}
function showDisplay(value){
    displayValue = value;
    divs.textContent = value;

    display.appendChild(divs);
}

for(let i = 0; i<10;i++){
    document.getElementById("num"+ i).addEventListener("click",() =>{
        
        if(operator == undefined){
            if(num1==undefined){
                num1 = "";
            }
            num1 += String(document.getElementById("num"+ i).value);
            showDisplay(num1);
        }
        else{
            if(num2==undefined){
                num2 = "";
            }
            num2 += String(document.getElementById("num"+ i).value);
            showDisplay(num2);
        }
        console.log(num1)
        console.log(num2)
       } 
    )};
for(let i = 1; i<5;i++){

    document.getElementById("digit"+ i).addEventListener("click",() =>{
        operator = String(document.getElementById("digit"+ i).value);
        showDisplay(operator);
       
        } 
    )};
equal.addEventListener("click",()=>{
    console.log(typeof(operator))
    console.log(operate(num1,operator(),num2))
})