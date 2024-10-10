let openIndex = () => {
    window.location="index.html";
}
let openMultiple= () => {
    window.location="multiples.html";
}
let openArray = () => {
    window.location="arrays.html";
}
let openTest = () => {
    window.location="test.html";
}
let sumNumbers = 0;
let toCalc = () => {
    let numberA = document.getElementById('inputNumberA').value; //get element from HTML
    let numberB = document.getElementById('inputNumberB').value; //get element from HTML
    let numberN = document.getElementById('inputNumberN').value; //get element from HTML
    for (i = 0; i < numberN; i++) {
        if((i % numberA == 0) || (i % numberB ==0 ))
            sumNumbers += i;  
    } 
    let show = document.getElementById('answer');    
        show.style.display = 'block';
    document.getElementById('result').innerHTML = sumNumbers; //update element on HTML
    alert('\n The sum of all the multiples is: ' + sumNumbers);
}
let toClean = () => {
    document.getElementById('inputNumberA').value = '';
    document.getElementById('inputNumberB').value = '';
    document.getElementById('inputNumberN').value = '';
    document.getElementById('answer').style.display = 'none';
}