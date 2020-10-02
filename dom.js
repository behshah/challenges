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

//Changing the HTML output streem
// in js we can use document.write() to write directly to the html output streem.
//document.write(Date());
// Never use the document.write() after the document is loaded ,it will overwite the document.
var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
e.preventDefault();


//changing the HTML CONTENT
// the easiest way to MODIFY the conten of an HTML element is by using inner.HTML property.

// changing the HTML ATTRIBUTE
// to chanhe the value of an HTML ATTRIBUTE using bellow syntax:
let title = document.querySelector('.title');
title.innerHTML = " i am changed";
//document.getElemetById('  ').attribute = new value
// Example
// document.getElementById('').src ="behnam.jpg"

// changing HTML STYLE (css)
// To change the style of an HTML element use the belloe syntax:
// document.getElementById(' ').style.property = "new style";
var animate = document.querySelector('#animate');
// animate.style.backgroundColor = "white";

// js ANIMATION Code
// js animations are done bye programming gradual changes in an element's style.
// The changes are called by a timer.when the timer interval is small,the animation looks continous.
// The basic code is 

// var id = setInterval(frame,5);

// function frame (){
//     if(/* test for finished */) {
//         clearInterval(id);
//     }else{
//         /* code to change the element style */
//     }
// }

// var animation = setInterval(frame , 1);
// var pos = 0;
// function frame(){
//     if (pos == 350 ){
//         clearInterval(animation);
//     }else{
//         pos++;
//         animate.style.top = pos + "px";
//         animate.style.left = pos + "px"
//         animate.style.backgroundColor = "blue";

//     }
// }
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