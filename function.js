//Functions
//Function Expression
// A js Function can also be defined using an expression ,it is storable in a variable
// var x = function(a,b){
//     return a*b
// }

// A js Function can also be defined using an expression ,it is storable in a variable
// var x = function(a,b){
//     return a*b
// }
// var z = x(4,3)
// function above is a anonymous funcion , functions stored in variables do not need
// function name, they are always invoke using varibale name.

// Function HOISTING
//hoisting is a js defalut behaviour to moving declaration to the top of the current scope,
//hoisting applies to the variable declaration and function declaration.
//because of this js function can be called before they are declared.
// FUNCTION DEFINED USING EXPRESSION ARE NOT HOISTED.

// Self Invoking Functions
// A self invoking function invokes automatically without being called.
// Function Expression will exectue autimatically if the expression is followed by ().
//* can not self-invoke a function delaraion.
// we have to add parenthesese around the function to indicate that it is a function expresion.
//EXAMPLE

// (function (){
//     var x =  "hello";
// }) ();

// function can be used as VALUES.
//Exaple 

// function myFunction(a,b){
//     return a*b;
// }
// js functions can be used in expressions

// function myFunction(a,b){
//     return a*b;
// }
// FUNCTIONS ARE OBJECTS
//the type of operator in js returns "functions" for functions.
//but,js functions can best be described as objects.
//js function have both properties and methods.
// the arguments.length property returns the number of arguments recives whtn the function was invoked.
// function myFunction(a,b){
//     return arguments.length
// } 

// TOSTRING
// tostring() method returns a function as a string.
// function myFunction(a,b){
//     return a*b;

// }
// JS  FUNCTION PARAMETERS
// * A js functions doesn't perform any cheking on parameters value (arguments).
//FUNCTION PARAMETERS AND ARGUMENTS
//  function parameters are the NAMES listed in the function definition.
// function arguments are the real value passed to (and recieved by) the function.

// PARAMETERS RULES 
// js function doesn't specify data type for parameters.
//js function do not perform type cheking on the passed arguments.
//js junction do not check the number of the argumnets recieved.

//PARAMETERS DEFAULT 
//if a function is called with missing arguments(less than declared) , the misiing values are set to undefined.
//sometimes this is acceptable, but sometimes is better to assign a default value to the parameter:
//EXAMPLE
// function myFunction(x,y){
//     if(y == undefined){
//         y = 0;
//     }
//     return x*y
// }

//ES5 allows default parameter values in the function declaration.
// function myFunction (a = 4 , b =2){
//     return a*b
// }


// THE ARGUMENTS OBJECT
//Js functions have a built-in object called the arguments object.
//the arguments object contains an array of the arguments used when the function was called (invoked).
// this way you can simply use a function to find (for instance) the highest value in a list of numbers:

x = findMax(488,188,199,30,183,1,95)
function findMax(){
    var i ;
    var max = -Infinity;
    for(i=0 ;i<arguments.length; i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}





var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
e.preventDefault();
var item = document.querySelector('#item').value;
// item = x = myFunction(5,5);
// item = x = myFunction(5,5)*213;
// item = myFunction(4,4,3,2,1);
// item = myFunction.toString();
// item = myFunction(8);
// item = myFunction();
item = x;
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

