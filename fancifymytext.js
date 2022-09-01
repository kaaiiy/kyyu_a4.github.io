function myFunction() {
    document.getElementById("txtArea").style.fontSize = "24pt";
}

function myButton1() {
    document.getElementById("txtArea").style.fontWeight = "bold";
    document.getElementById("txtArea").style.color = 'blue';
    document.getElementById("txtArea").style.textDecoration = "underline";

}

function myButton2() {
    document.getElementById("txtArea").style.fontWeight = "normal";
    document.getElementById("txtArea").style.color = "black";
    document.getElementById("txtArea").style.textDecoration = "none";
}

function myFunction2() {
    var str = document.getElementById("txtArea");
    var parts = str.value.split(".");  
    str.value = parts.join("-Moo");
}