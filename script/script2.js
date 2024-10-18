
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
function toCalc() {
    let sumNumbers = 0;

    let numberA = 3;//document.getElementById('inputA').value;
    let numberB = 5;//document.getElementById('inputB').value;
    const list = [9,10,11];
        /*document.getElementById('inputL').value,
        document.getElementById('inputL1').value,
        document.getElementById('inputL2').value
    ];    */ 

    for(i = 0; i < list.length; i++){
        if((list[i] % numberA == 0) || (list[i] % numberB == 0))
            sumNumbers += list[i];
    }
    console.log('sum numb:'+sumNumbers);

    let show = document.getElementById('answer');    
        show.style.display = 'block';

    document.getElementById('result').innerHTML = sumNumbers;
    document.getElementById('listInteger').innerHTML = list; 
}


