//TYPE CONVERSOION
// line 20, The Unary + Operator
//The unary + operator can be used to convert a variable to a number:


const form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
    e.preventDefault();
    const item = document.querySelector('#item').value;

    // the global String() method can convert a number, bollean and date to string
    var getInput = item.toString();
        getInput = true.toString();
        getInput = String(false);
        getInput = (123).toString();
        getInput = String(3434);
        getInput = String(new Date());
        getInput = new Date().toString();
        getInput = Date().toString();
        getInput = + item;
        getInput = Number(true);
        getInput = Number(false);
        getInput = Number(new Date());
        



    

    const items = document.querySelector('#items');
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(getInput));
    
    
    
    var delBtn = document.createElement('botton');
    delBtn.className = "btn btn-danger btn-sm float-right delete";  
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    items.appendChild(li);

    console.log(getInput);
    console.log(typeof(getInput));
    
}

