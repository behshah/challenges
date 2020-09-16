//javaScrip Object
//In js almost "everything" is an object.
//All js values,except privitines , are objects.
//js defines 5 type of primitive data type.
//String,Numbers,Boolean.Null,Undefined.
//Primitive values are Immutable(can not be changged).
//Objects are variable whch can containe many values
//Exapmle var person = {firstName:"behnam" , lastName:"shah" , age:40 , eyeColor:"black"}
//OBJECT METHODS
//methods are actions that can be performed an objects.
//Object properties :the named values , in js objects are called properties.
//*****   Property      value                   */
//*****   FirstName     Jhon                  */
//*****   LastName      Doe                  */
//*****   FullName      function(){return this.firstNamt + this.Lastname}    */
//Creating A js Object
//using an object literal ,Example  var person = {firstName:"behnam" , lastName:"shah" , age:40 , eyeColor:"black"}
//Using the js Keyword new 
//          var person = new object ();
//              person.firstName = "jhon";
//              person.LastName  = "Doe" ;
//              perosn.age = 40;
//Js Object are Mutable(they can change) means they are addressed by refrence not by the value.
//  var person = {firstName:"behnam" , lastName:"shah" , age:40 , eyeColor:"black"}
//  var x = person.
//  x.age = 10; // this will change both x.age and person.age
// js object prpperties.
//properties are the values assocciated with a js object.
//Accessing js property.
// for ...in loop , this statement will loop through the properties of an object 
//Syntax for (variable in object){ // code to be executed}
//Adding new properties : we can add new property to an existing object by simply giving it a value.person.nationality = "persian"/
//Deliting a property :  the "Delete" keyword deletes a property from existing object. delete person.age ;
//*************    PROPERTY OBJECT METHOD **************/
//

// var txt = "";
// var person = {firstName:"behnam" , lastName:"shah" , age:40 , eyeColor:"black"};
// person.nationality = "persian";
// delete person.eyeColor;
// var x;
// for( x in person ){
//     txt += person[x] + " ";
// }    

//     var person = {
//         firstName:"behnam" ,
//          lastName:"shah" ,
//           age:40 ,
//            eyeColor:"black",
//             fullName : function(){
//                 return this.firstName + " " + this.lastName
//         } 
//         };
// var name = JSON.stringify(person);

//Using Set to Set a value to a property
    var person = {
        firstName:"behnam" ,
         lastName:"shah" ,
          language:"",
            set lang(lang){
                 this.language = lang;
        } 
        };
        person.lang ="en";

//Using Get to display a property 
    // var person = {
    //     firstName:"behnam" ,
    //      lastName:"shah" ,
    //       language:"en",
    //         get lang(){
    //             return this.firstName
    //     } 
    //     };




var form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
    e.preventDefault();
    var item = document.querySelector('#item').value;
    

    const items = document.querySelector('#items');
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(person.language));
    
    
    
    var delBtn = document.createElement('botton');
    delBtn.className = "btn btn-danger btn-sm float-right delete";  
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    items.appendChild(li);

    console.log(person.language);
    console.log(typeof(person));


   

    
}


