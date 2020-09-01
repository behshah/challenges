const form = document.querySelector('#addForm');

form.addEventListener('submit', function(e){
//  var a = "jhon";;
//  var x = Number(a);
    e.preventDefault();

    const textForm = document.querySelector('#item').value;
    //const useMethod = textForm;
    // const useMethod = Number(textForm); 
    // const useMethod = parseInt(textForm); 
    // const useMethod = parseFloat(textForm); 
    // const useMethod = new Number(textForm)
    const useMethod = textForm.toExponential(2);
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
    li.appendChild(document.createTextNode(useMethod));
    ulItems.appendChild(li);
    console.log(useMethod);

    


})