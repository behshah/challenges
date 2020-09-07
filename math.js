const form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);

function clickSubmit(e){
   e.preventDefault();
    



    const item = document.querySelector('#item');
    const getValueForm = item.value ;
    // console.log(getValueForm);

    const items = document.querySelector('#items');
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(getValueForm));
    
    items.appendChild(li);

}