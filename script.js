/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

1. Find the sum of all the multiples of 3 or 5 below 1000.

2. Create a function to find the sum of all the multiples of a or b below n.
(a,b,n) are function parameters

3. Allow the user to enter the parameters via text box(es)
and alert them to the output
*/

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
    alert("\n The sum of all the multiples is:  " + sumNumbers)   
}