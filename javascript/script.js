
function insertNum(numOrOp) {
    document.getElementById("field").value += numOrOp;
}

function reset() {
    document.getElementById("field").value = '';
}


function count() {
    var readFromField = document.getElementById("field").value;
    var inputLength = readFromField.length;
    
    var addPosition = readFromField.indexOf("+");
    var subPosition = readFromField.indexOf("-");
    var multiplyPosition = readFromField.indexOf("*");
    var divPosition = readFromField.indexOf("/");
    
    if (addPosition > -1) {
        var numb1 = readFromField.substring(0, addPosition);       
        var numb2 = readFromField.slice(addPosition + 1, inputLength);
        var result = parseFloat(numb1) + parseFloat(numb2);
        document.getElementById("field").value = result;
    }   
}


