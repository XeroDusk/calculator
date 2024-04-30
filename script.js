const result = document.querySelector('#result');
const topR = document.querySelector('#nums');
const input = document.querySelector('.inputs');

function clear(){
    result.innerHTML = '';
    topR.innerHTML = '';
}

let resT = "";
let topT = "";
let butts = [].slice.call(input.children);
console.log(butts);
butts.forEach(butt => {
    butt.addEventListener('click', () => {
        if(butt.textContent === 'C' || butt.textContent === 'CE'){
            clear();
            resT = "";
            topT = "";
        }
        else{
            resT = resT + butt.textContent;
            result.innerHTML = resT;
        }
    });
});