//Class

var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
e.preventDefault();
var item = document.querySelector('#item').value;


const items = document.querySelector('#items');
var li = document.createElement(li);
li.className = "list-group-item";
li.appendChild(document.createTextNode(mycar.cnam));



var delBtn = document.createElement('botton');
delBtn.className = "btn btn-danger btn-sm float-right delete";  
delBtn.appendChild(document.createTextNode("X"));
li.appendChild(delBtn);
items.appendChild(li);

console.log(mycar.cnam);
console.log(typeof(mycar));

}

