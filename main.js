// first change is main.js.why vs is so slow damn vs shame on you.
const form = document.querySelector('#addForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
//  var a = "jhon";;
//var cars = ("pride", "sab" , "honda", "merci","wv");
// cars[3] = "topol"
// var person = {firstName:"John", lastName:"Doe", age:46};
//  var x = Number(a);

 var cars = ["volvo", "pride", "mitsubishi","cadilac"];
//  cars[cars.length] = "honda";
    cars[7] = "honda";
//     cars.push("suzuki");
    // var  text = "<ul>";
    // cars.forEach(myFunction);
    // text += "</ul>";
    // function myFunction (value){
    //     text += "<li>"+ value + "</li>"
    // }

    // var cars = [ "volvo" , "fiat" , "honds" , "sab"]
    // var i ;

    // for (var i = 0; i < cars.length; i++){
    //        cars[i];   
    // }
    // const textForm = document.querySelector('#item').value;
    //const useMethod = textForm;
    // const useMethod = Number(textForm); 
    // const useMethod = parseInt(textForm); 
    // const useMethod = parseFloat(textForm); 
    // const useMethod = new Number(textForm)
    // const useMethod = textForm.toExponential(2);
    // var useMethod = Number.MAX_VALUE; 
    //      useMethod = Number.MIN_VALUE; 
    //      useMethod = Number.POSITIVE_INFINITY; 
    //      useMethod = Number.NEGATIVE_INFINITY; 
    //      useMethod = Number.NaN; 
    //const useMethod = textForm.valueOf()
    


    const ulItems = document.querySelector('#items');
    // var newLi = document.createElement(li);
    var li = document.createElement(li);

    li.className = "list-group-item";
    li.appendChild(document.createTextNode(cars instanceof Array));
    ulItems.appendChild(li);
    console.log(typeof(cars))
    console.log(cars instanceof Array);

    


})