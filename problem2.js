let i = 0;
let sumNumbers = 0;

let toCalc = () => {
    let numberA = document.getElementById("inputNumberA").value;
    let numberB = document.getElementById("inputNumberB").value;
    let numberN = document.getElementById("inputNumberN").value;
    for (i = 1; i < numberN; i++) {
        if((i % numberA == 0) || (i % numberB ==0))
            sumNumbers += i;       
    } 
    document.getElementById("result").innerHTML = sumNumbers;
}
