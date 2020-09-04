// first change is main.js.why vs is so slow damn vs shame on you.
const form = document.querySelector('#addForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
//  var a = "jhon";;
//  var cars = ("pride", "sab" , "honda", "merci","wv");
// cars[3] = "topol"
// var person = {firstName:"John", lastName:"Doe", age:46};
//  var x = Number(a);

 var cars = ["volvo", "pride", "mitsubishi","cadilac","jeep","razavi","datson"];
    
//  var cars = cars1.slice(1,4);
//  var SecondCar= ["volvo", "pride", "mitsubishi","cadilac"];
//  var thirdCar= ["hamer","volvo", "pride", "mitsubishi","cadilac"];
//  var cars = firstCar.concat(SecondCar,thirdCar,"hemmer");
//  cars[0]= "tesla";
    // cars[cars.length] = "tesla";
    // delete cars[1];
//  cars.splice(3,3);
// car.pop();
    //cars[cars.length] = "honda";
    //cars[7] = "honda";
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
    


    // const ulItems = document.querySelector('#items');
    // // var newLi = document.createElement(li);
    // var li = document.createElement(li);

    // li.className = "list-group-item";
    // li.appendChild(document.createTextNode(cars));
    // ulItems.appendChild(li);
    // console.log(Array.isArray(cars))
    var h2 = document.querySelector('.title').innerHTML = cars;
    console.log(cars);
  
    


})