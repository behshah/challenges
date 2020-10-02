// javascript HTML DOM
// with the HTML DOM js can access and change all the elements of an HTML documents.

// with the object model,js gets all the power it needs to create dynamic HTML:
// js can change all the html ELEMENTS  in the page
// js can change all the html ATTRIBUTES in the page.
// js can change all the CSS style in the page.
// js can remove all the existing html ELEMENTS & ATTRIBUTES.
// js can add new html ELEMENTS & ATTRIBUTES.
// js can react to all existing html EVENTS in the page.
// js can create a new HTML events in the page.

// HTML DOM METHODS are ACTIONS we can perform(on html elements).
// HTML DOM PROPERTIES are VALUES (of html Elements) that we can set or change.

// the HTML DOM can be accessed by js(and other programming language).
// in the DOM , all HTML elements are defined as objects.
// the programming interface is th propertis and methods of each object.
// A property is a value thay you can get or set (like changing the content of an HTML element)
// A method is an action you can do(like add or deleting HTML Element).
// Example querrySelector is an method and innerHTML is a property .

//innerHTML
//the innerHTML peroperty is useful to get or replace the content of HTMl Elemnts.
// innerHTML property can be used to get or change any HTML element including <html> and <body>.

var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
e.preventDefault();

let title = document.querySelector('.title');
title.innerHTML = " i am changed";

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