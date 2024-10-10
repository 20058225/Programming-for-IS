
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

let toCalc = () => {
    // Example usage:
    let list = [];
    let sumNumbers = 0;
    let numberA = document.getElementById('inputNumberA').value;
    let numberB = document.getElementById('inputNumberB').value;
    let numberL = document.getElementsByName('listNumb');
    for(i = 0; i < numberL.length; i++){
        list = numberL[i];
        console.log(list.value);
        for (j = 0; j < list; j++) {
            if((j % numberA == 0) || (j % numberB == 0))
                sumNumbers += j;  
                console.log(sumNumbers);
        } 
    }        
    let show = document.getElementById('answer');    
    show.style.display = 'block';
    document.getElementById('result').innerHTML = sumNumbers; //update element on HTML
    document.getElementById('listInteger').innerHTML = numberL; //update element on HTML

}
