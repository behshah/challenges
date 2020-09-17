//OBJECT CONSTRUCTOR



function Person (first,last,age,eye){
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.eyeColor = eye
    //adding a  property to constructor
    this.hairColor = "blond"
    this.name = function(){return this.firstName + " " + this.lastName};
}

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

console.log(myMother.name());
console.log(typeof(item));

}

