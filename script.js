function Clear(){
    document. getElementById("name"). value = "";
    document. getElementById("dob"). value = "";
    document. getElementById("email"). value = "";
    document. getElementById("number"). value = "";
}

function Add(){
    var copyText = document.getElementById("name");
    copyText.select();
}


var row = 1;

var submit = document.getElementById("submit");
if(submit){
    submit.addEventListener("click", displayDetails);
}
function displayDetails(){

    var Name   =  document. getElementById("name"). value;
    var Dob    =  document. getElementById("dob"). value;
    var Email  =  document. getElementById("email"). value;
    var Number =  document. getElementById("number"). value;

    var firstNum = String(Name.length);
    var age  =String(Dob.length).charAt(9,10);

    if(!Name || !Dob || !Email || !Number  ){
        alert("Please fill all the boxes ");
        return ;
    }
    if(firstNum >5 ){
        alert("User Name should be in 5 character");
        return;
    }
    // if(age < 20){
    //     alert("Please Age Before 20 Year");
    //     return;
    // }

    if(Number.length <10 || Number.length >10){
        alert("Mobile No. Must be 10 digits only ");
        return;
    }


    var display = document. getElementById("display");
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = "*";
    cell2.innerHTML = Name;
    cell3.innerHTML = Dob;
    cell4.innerHTML = Email;
    cell5.innerHTML = Number;
    cell6.innerHTML = "✅ Completed";
   
    row++;

    Clear();

}
