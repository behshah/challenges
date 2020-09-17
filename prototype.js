//PROTOTYPE
// in constructor section we learn hoe to use Object Constractor and also
// noticed can not add a new property to an existing object constructor.
// All js objects inherit properties and methods from a PROTOTYPE
//  * DATE object inherit from date.prototype.
//  * ARRAY object inherit from Array.prototype.
//  * PERSON objects inherit from Person.prototype.
// The object.prototype is on the top of the prototype inheritance chain :
//  Date objects , Aray Objects , Person object inherit from object.prototype.

function Person (first,last,age,eye){
    this.firstName = first,
    this.lastName = last,
    this.age = age

}
    //adding a  property to constructor using prototype
    Person.prototype.hairColor = "blond"
    Person.prototype.name = function(){return this.firstName + " " + this.lastName};

var myFather = new Person ("jhon","Doe",50,"blue");
var myMother = new Person ("sara","mara",47,"green");
//adding a new property to an existing object
myMother.nationality = "iranian";
myFather.name = function(){
    return this.firstName + " " + this.lastName;
}

var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
e.preventDefault();
var item = document.querySelector('#item').value;


const items = document.querySelector('#items');
var li = document.createElement(li);
li.className = "list-group-item";
li.appendChild(document.createTextNode(myFather.name()));



var delBtn = document.createElement('botton');
delBtn.className = "btn btn-danger btn-sm float-right delete";  
delBtn.appendChild(document.createTextNode("X"));
li.appendChild(delBtn);
items.appendChild(li);

console.log(myMother.hairColor);
console.log(typeof(item));

}

