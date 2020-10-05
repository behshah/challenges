//DOM EVENTS
// HTML DOM allow js to react to HTML events.
//REACTING TO EVENTS
//A js can be executed when a events occure,like when a user click on a HTML elements.



var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
    e.preventDefault();
    
    //EXAMPLE:
    // in this example , afunction is called from the event handler
    var h1 = document.querySelector('#header-title');
    //h1.innerHTML = "i am anothe header";
    // *************************************************************************
    // HTML EVENTS ATTRIBUTE
    // to assign events to HTML elements we can use events attributes.
    // for example we can use Date() attribute to diaplay the date.
    // h1.innerHTML = Date();
    //************************************************************************** */
    // Assign events using the HTML DOM
    // the HTML DOM allow us to assign events to HTML elements using js:
    //************************************************************************** */
    // ONLOAD and UNONLOAD Events.
    // the onload and unload events triggers when user enters or leave the page.
    // onload event can be used to check the visitor's browser type and browser version.
    //onload and unonload events can be used to deal with cookies.
    // EXAMPLE
    //  var text = "";
    //  if(navigator.cookieEnabled == true){
    //      text = "cookies are enabled"
    //  }else{
    //      text = "cookies are not enabled"
    //  }
    //  h1.innerHTML = text;
    // *********************************************************************************
    // The ONCHANGE Evant
    

var item = document.querySelector('#item').value;

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