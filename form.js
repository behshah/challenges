//javaScript form 


const form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
    e.preventDefault();
    const item = document.querySelector('#item').value;

           
    const items = document.querySelector('#items');
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(item));
    
    
    
    var delBtn = document.createElement('botton');
    delBtn.className = "btn btn-danger btn-sm float-right delete";  
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    items.appendChild(li);

    console.log(item);
    console.log(typeof(item));





    // function validateForm(){
    //     var x = document.forms["myform"]["fname"].value
    //     if(x == ""){
    //         alert("name must be fill out");
    //         return false;
    //     }
    // }
    
}

