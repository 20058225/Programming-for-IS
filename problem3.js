let toShow = () => {
    let input1 = document.getElementById("txt1").value;
    let input2 = document.getElementById("txt2").value;

    document.getElementById("result").innerHTML = input1;
    document.getElementById("result2").innerHTML = input2;
}
let toShowAlert = () => {
    let input1 = document.getElementById("txt1").value;
    let input2 = document.getElementById("txt2").value;

    alert("The information inserted was: " + input1 + " and " + input2)   
} 