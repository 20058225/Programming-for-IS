//The sum of all the multiples
let i = 0;
let sum = 0;
let show = () => {
    for (i = 1; i < 10; i++) {
        if((i % 3 == 0) || (i % 5 == 0))
            sum += i;
    }
    document.getElementById("result").innerHTML = sum;
}

