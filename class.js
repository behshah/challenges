//Class
//A class is a type of function , but instead of using keyword function to initiate it ,
//we use the keyword class, and the properties and assigned inside a constructor() method.
//CLASS DEFINITION
// Use the keyword class to create a class , and always add a constructor() method.
//The constructor method is calles each time the class object is initialized.


// class Car {
//     constructor(brand){
//         this.carName = brand ;
//     }
// }

//now can create objects using the car class

// mycar = new Car ("ford")

//Static method 
//Static methids are defined on the class itself, and not at the prototype .
// that means we can not call a static method on the object (mycar ),but on the class (Car);



// class Car {
//     constructor(brand){
//         this.carName = brand ;
//     }
//     static hello(){
//         return "hello behnam"
//     }
// }
//     mycar = new Car ("ford")


// if we want to use the my car object inside the static method,you can send it as a parameter.

// class Car {
//     constructor(brand){
//         this.carName = brand;
//     }
//     static hello(x) {
//     return "hello " + x.carName;
// }
// }
// mycar = new Car ("ford");

//INHERITANCE
// to create a class inhertitance use the extends keyword.
// A class created with a class inheritance inherits al the methods from anothr class.

// class Car {
//     constructor(brand ){
//         this.carname = brand;
//     }
//     present(){
//         return "I have a " + this.carname;
//     }
// }


// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.present() + ", it is a " + this.model
//     }
// }
// mycar = new Model ("ford", "Mustang")

//GETTER & SETTER
// Classes also alow to use getters and setters.
// To add getters and setters  use get and set keyword.
// EXAMPLE create a getter and setter for the "carname" property.

class Car {
    constructor(brand){
        this.carname = brand; 
    }
    get cnam (){
        return this.carname;    
    }

    set cnam(x){
        this.carname = x;
    }
}

mycar = new Car ("ford")

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

