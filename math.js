// The JavaScript Math object allows you to perform mathematical tasks on numbers.
var numbers = (10,48,-30,3,84,-23,88,1);


const form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
   e.preventDefault();
    

    const item = document.querySelector('#item').value;
    // var itemValue = value;
    var math = Math.round(item);    
        math = Math.round(item);
        math = Math.sqrt(item);
        math = Math.pow(item);
        math = Math.abs(item);
        math = Math.ceil(item);
        math = Math.floor(item);
        math = Math.min(numbers);
        math = Math.max(numbers);

    const items = document.querySelector('#items');
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(math));
    
    
    
    var delBtn = document.createElement('botton');
    delBtn.className = "btn btn-danger btn-sm float-right delete";  
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    items.appendChild(li);

    console.log(math);
    
}

