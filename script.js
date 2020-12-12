// function add(){
//     var text = document.querySelector(".text").value;



//     var table = document.getElementsByTagName('table')[0];


//     var newRow = table.insertRow(1);

//     var cel1 = newRow.insertCell(0);


//     cell1.innerHTML = text;
// }



var para = document.createElement("input");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para)