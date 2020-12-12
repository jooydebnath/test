
document.getElementById('btn').addEventListener('click', function(){
    var  valu = document.getElementById('txtvalue');
        if (valu !== ''){
            var listNode = document.getElementById('list'),
            liNode = document.createElement("li"),
            txtNode = document.createTextNode(valu.value);
            listNode.appendChild(liNode);
            liNode.appendChild(txtNode);
            valu.value='';         
        }
});