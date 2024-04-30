const result = document.querySelector('#result');
const topR = document.querySelector('#nums');
const input = document.querySelector('.inputs');

function display(){
    result.innerHTML = resT;
    topR.innerHTML = topT;
}

function clear(){
    resT = "";
    topT = "";
    op = "";
    num1 = "";
    num2 = "";
    display();
}

function equals(){
    if(num2 === ""){
        topT = num1 + " = ";
        num1 = parseFloat(num1);
        display();
        topT = resT;
        num1 = resT;
        num2 = "";
        resT = "";
        op = "";
    }
    else{
        topT = topT + num2 + " = ";
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        resT = operate(num1 , op, num2);
        display();
        topT = resT;
        num1 = resT;
        num2 = "";
        op = "";
    }
    resOn = true;
}

let resT = "";
let topT = "";
let op = "";
let num1 = "";
let num2 = "";
let resOn = true;

function operate(n1, op, n2){
    switch (op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        case '%':
            return n1 % n2;
        case 'pow':
            return n1 ** n2;
        case 'root':
            return n1 ** (1/n2);
        case 'inv':
            return 1/n2;
        default:
            return 'error';   
    }
}

let butts = [].slice.call(input.children);
console.log(butts);
butts.forEach(butt => {
    butt.addEventListener('click', () => {
        if(butt.textContent === 'C' || butt.textContent === 'CE'){
            clear();
        }
        else if('+-*/%powroot'.includes(butt.textContent)){
            if(op === ""){
                op = butt.textContent
                topT = num1 + " " + op + " ";
                resT = "";
                display();
            }
            else {
                equals();
                op = butt.textContent;
                result.innerHTML = "";
                topT = num1 + " " + op + " ";
                resT = "";
                display();
            }
        }
        else if(butt.textContent === 'inv' ){
            op = butt.textContent
            topT = op + " ";
            resT = "";
            display();
        }
        else if(butt.textContent === '='){
            equals();
        }
        else if(op != ""){
            num2 = num2 + butt.textContent;
            resT = resT + butt.textContent;
            display();
        }
        else{
            if(resOn){
                clear();
            }
            resOn = false;
            num1 = num1 + butt.textContent;
            resT = resT + butt.textContent;
            display();
        }
    });
});