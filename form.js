//javaScript form validation


var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
    e.preventDefault();
    var item = document.querySelector('#item').value;
    var h2 = document.querySelector('#title');;
    

    //if(!item.checkValidity()){
    if(item.validity.rangeOverflow){
        h2.innerHTML = "input is too large";
    }else{
        h2.innerHTML = "input is ok!";

    }



    // var h2 = document.querySelector('#title');
    // if(isNan(item) || item > 10 || item < 1 ){
    //     h2 ="input should be anumber between 1 to 10";
    // }else
    //     h2 = "input is ok"
    // }
    
           
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


   

    
}
//     function validateForm(){
//         item = document.forms["myform"]["fname"].value
//         if(item == ""){
//             alert("name must be fill out");
//             return false;
//         }
//     }
    
// }

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

