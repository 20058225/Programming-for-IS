document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
function openIndex(){
    window.location="index.html";
}
function openMultiple(){
    window.location="multiples.html";
}
function openArray () {
    window.location="arrays.html";
}
function openTest() {
    window.location="test.html";
}
function toCalc () {
    let sumNumber = 0;
    let numberA = document.getElementById('inputA').value; //get element from HTML
    let numberB = document.getElementById('inputB').value; 
    let numberN = document.getElementById('inputN').value; 
    for (i = 0; i < numberN; i++) {
        if((i % numberA == 0) || (i % numberB == 0))
            sumNumber += i;  
    } 
    let show = document.getElementById('answer');    
        show.style.display = 'block';
    document.getElementById('result').innerHTML = sumNumber; //update element on HTML
    alert('\n The sum of all the multiples is: ' + sumNumber); 
}
function toClean() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('inputN').value = '';
    document.getElementById('answer').style.display = 'none';
}