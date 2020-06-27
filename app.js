


function getNumber(num){
    
    var result = document.getElementById("result");
    result.value += num; 
}

function clearInput(){
    var result = document.getElementById("result");
    result.value = ""
}

function getAnswer(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function back() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0, result.length - 1);
}