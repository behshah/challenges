//js comparison and logical operators 
//Comparison and logical operators are using to test for true or false 



const form = document.querySelector('#addForm');
form.addEventListener('submit',clickSubmit);
function clickSubmit(e){
   e.preventDefault();
    const item = document.querySelector('#item').value;

    var age ;
    var votable ;

    // if (isNaN(age)){
    //     votable = "is not a number";
        
    //  } else{
    //  votable = (age < 18 ) ? "too young to vote":"old enough to vote";
        
    //  }
//****************if else statemet***********************/
    // if (isNaN(age)){
    //     votable ="is not a number";
    // }else if (age >= 18){
    //     votable = "is aligible to vote";

    // }else{
    //     votable = "is not aligible to vote"
    // }
//*******************switch Statemet********************/

switch (age = Number(item)) {
    case (age<18):
        votable = "votable is not aligible to vote"
        break;
    case (age>18):
            votable = "votable is aligible to vote";
        break
    case (isNaN(age)):
                votable = "is not a number";
        break;
    default:
                votable = "is unknown"
    
}

    const items = document.querySelector('#items');
    var li = document.createElement(li);
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(votable));
    
    
    
    var delBtn = document.createElement('botton');
    delBtn.className = "btn btn-danger btn-sm float-right delete";  
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    items.appendChild(li);

    console.log(votable);
    
}

