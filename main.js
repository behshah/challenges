// first change is main.js.why vs is so slow damn vs shame on you.
const form = document.querySelector('#addForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
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
    
    //  var a = "jhon";;
    //  var cars = ("pride", "sab" , "honda", "merci","wv");
    // cars[3] = "topol"
    // var person = {firstName:"John", lastName:"Doe", age:46};
    //  var x = Number(a);
    
    //  var cars = ["volvo", "pride", "mitsubishi","cadilac","jeep","razavi","datson"];
// //    var points = [40, 100 , 1 , 2 , 25 , 10];
//    var cars = [
//        {type:"jeep", year:2001},
//        {type:"NEC" , year:2020},
//        {type:"hone", year:2016}
//    ]
//    //cars.sort(function (a,b) {return a.year-b.year});
//    cars.sort(function(a, b){
//     var x = a.type.toLowerCase();
//     var y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
 

//         points.sort(function(a,b){return b-a});
        // function myArrayMax(arr){
        //     var len = arr.length;
        //     var max = -Infinity;
        //     while (len--){
        //         if (arr[len] > max){
        //             max = arr[len];
        //         }
        //     }
        //     return max;
        // }
//    for (i = points.length -1;      i > 0;       i--) {
//     j = Math.floor(Math.random() * i)
//     k = points[i]
//     points[i] = points[j]
//     points[j] = k
//   }


    // var txt = "";
    // numbers.forEach(myFunction);
    // function myFunction(value){
    //     txt = txt + value + "<br>";
    // };

    // var fruits = ["Apple","Orange ","Apple","Mango"]
    // var numbers = [4,9,16,24,28]
    // var over18 =  numbers.findIndex(myFunction);

    //     function myFunction(value,index,array){
    //         return value>18
    //     }

    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     date =months[date.getMonth()];

        const ulItems = document.querySelector('#items') ;
        ulItems.value = date ;
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(date));
    ulItems.appendChild(li);
    console.log(Array.isArray(date))
    console.log(date);
  
   });