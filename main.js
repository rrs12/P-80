function para1() {
    var inputs = [];
  for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("p1_ib_"+i).value);
       console.log(inputs);
    }
    document.getElementById("showpara1").innerHTML = inputs.join(". ");
}

function getpara2() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("p2_ib_" + i).value);
    }
    document.getElementById("showpara2").innerHTML = inputs.join(". ")+".";
}

function getpara3(){
    var inputs = [document.getElementById("showpara1").textContent
    +"<br>".concat(document.getElementById("showpara2").textContent)];
    document.getElementById("showpara3").innerHTML = inputs;
}