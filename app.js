// // toFixed : return a strig ,with a number written with the specified number of decimals.
// var a = 9.656;
// var x = a.toFixed() ;
// var y = a.toFixed(2) ;
// var z = a.toFixed(4) ;
// var zz = a.toFixed(6);


// toExponential() method : return a string , with a number rounded and written using exponential notation.
// var a = 9.656;
// var x = a.toExponential() ;
// var y = a.toExponential(2) ;
// var z = a.toExponential(4) ;
// var zz = a.toExponential(6);


// toString() method :return a number as a string
// var x = 123;
// var y = x.toString();            // returns 123 from variable x
// var z =(123).toString();        // returns 123 from literal 123
// var zz =(100 + 23).toString();   // returns 123 from expression 100 + 23

// toPrecision() : return a string, with a number written with a specified length
// var a = 9.656;
// var x = a.toPrecision() ;
// var y = a.toPrecision(2) ;
// var z = a.toPrecision(4) ;
// var zz = a.toPrecision(6);

//valueOf() method : return a number as a number
// var a = 123;
// var x = a.valueOf();            // returns 123 from variable x
// var y = (123).valueOf();        // returns 123 from literal 123
// var z = (100 + 23).valueOf();   // returns 123 from expression 100 + 23

// CONVERT VARIABLE TO NUMBER
//Number() method returns a number converted from its argumnet
//ParseFloat() parse its argument and returns a floating point number
//ParseInt() parse it argument and returns an intger

var x = new Number(123);
// var x = Number(true);          // returns 1
// var y = Number(false);         // returns 0
// var z = Number("10");          // returns 10
// var zz = Number("  10");        // returns 10
// var a = Number("10  ");        // returns 10
// var b = Number(" 10  ");       // returns 10
// var c = Number("10.33");       // returns 10.33
// var d = Number("10,33");       // returns NaN
// var e = Number("10 33");       // returns NaN
// var f = Number("John");        // returns NaN
const button= document.querySelector('.btn');
button.addEventListener('click' , function(){

    

    const newUl  = document.querySelector('#itemList')
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    

    
    li1.appendChild(document.createTextNode(x));
    newUl.appendChild(li1);
    console.log(li1);

    li2.appendChild(document.createTextNode(y));
    newUl.appendChild(li2)
    console.log(li2);

    li3.appendChild(document.createTextNode(z));
    newUl.appendChild(li3);
    console.log(li3);

    li4.appendChild(document.createTextNode(zz));
    newUl.appendChild(li4);
    console.log(li4);

    li5.appendChild(document.createTextNode(a));
    newUl.appendChild(li5);
    console.log(li5);
  
    li6.appendChild(document.createTextNode(b));
    newUl.appendChild(li6);
    console.log(li6);

    li7.appendChild(document.createTextNode(c));
    newUl.appendChild(li7);
    console.log(li7);

    li8.appendChild(document.createTextNode(d));
    newUl.appendChild(li8);
    console.log(li8);

    li9.appendChild(document.createTextNode(e));
    newUl.appendChild(li9);
    console.log(li9);

    li10.appendChild(document.createTextNode(f));
    newUl.appendChild(li10);
    console.log(li10);


       

})