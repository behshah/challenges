//Boolean 
//we can use Boolean() function to find our if an expression is true or false



const form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
   e.preventDefault();
    const item = document.querySelector('#item').value;
    
    var boolean = Boolean(10>9);
        boolean = (4<2);
        boolean = 4>1;
        boolean = Boolean(0);// returns false means any expression except 0 return true.
        boolean = Boolean();// everyting without a value returns false .
        boolean = Boolean(-0)//The boolean value of -0 returns false.
        boolean = ""; // boolean value of empty string returns false.
        boolean = Boolean(undefined);//boolean value of undefined is false.
        boolean = Boolean(null);//boolean value of null is false;
        boolean = Boolean (false); //boolean value of false is false;
        boolean = Boolean (NaN);//  boolean value of NaN is false;
        boolean = false;//normally js booleand are primitive values created from literal
        boolean = new Boolean(false);//but boolean can be defined as object by useing keyword new.
         

                
     

    const items = document.querySelector('#items');
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(boolean));
    
    
    
    var delBtn = document.createElement('botton');
    delBtn.className = "btn btn-danger btn-sm float-right delete";  
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    items.appendChild(li);

    console.log(typeof(boolean));
    
}

