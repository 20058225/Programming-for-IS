
let openIndex = () => {
    window.location="index.html";
}
let openMultiple= () => {
    window.location="multiples.html";
}
let openArray = () => {
    window.location="arrays.html";
}
function openTest() {
    window.location="test.html";
}
    //find the sum of all the multiples of a or b in l
    //l is a list of integers

function toCalc() {
    let numberA = document.getElementById('inputA').value;
    let numberB = document.getElementById('inputB').value;
    const list = [
        document.getElementById('inputL').value,
        document.getElementById('inputL1').value,
        document.getElementById('inputL2').value
    ];     
    console.log(list);

//get and show element on HTML
    let show = document.getElementById('answer');    
        show.style.display = 'block';

//update element on HTML
    document.getElementById('result').innerHTML = listq1(numberA,numberB,list); 
    document.getElementById('listInteger').innerHTML = list; 
}

let listq1=(a,b,multiples)=>{
    let sumNumbers = 0;
       
    for(i = 0; i < list.length; i++){
        if((list[i] % a == 0) || (list[i] % b == 0))
            multiples += list[i];
    }

    return sumNumbers;
}