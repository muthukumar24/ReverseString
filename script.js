function convertFunction()
{
var inputText = document.getElementById("input").value;

var outputText = inputText.split("").reverse().join("");

document.getElementById("outputtext").innerHTML = outputText;
}

