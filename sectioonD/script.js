
var selectedRow = null;

function onFormSubmit(){
    event.preventDefault(); //This is to prevent returning of the html data in the url after submitting
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRcord(formData);
    }
    else{
        updateRecord(formData);  //This is to update the table when there are new changes.


    }
    resetForm();  //This is to rese t the form after submission


}

//Function to retrieve the data
function readFormData(){
    var formData = {};
    formData["bucketCode"] = document.getElementById("bucketCode").value;
    formData["name"] = document.getElementById("name").value;
    formData["bucketPrice"] = document.getElementById("bucketPrice").value;

    return formData;
 
}

//The insert record function to insert the data
function insertNewRcord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0]; //This enables us to access the table body
    var newRow = table.insertRow(table.lenght); // Every time we add a new item the table length increaases by one.
    //Create variable for each element in my form.
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.bucketCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.name;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.bucketPrice;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`
  
    
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('bucketCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('bucketPrice').value = selectedRow.cells[2].innerHTML;
}


//Updateding record each ater clicking edit
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.bucketCode;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.bucketPrice;

}

//On the delete button
function onDelete(td){
    if(confirm ('Do you want to delete this item?')){
        row.td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);

    }
    //Calling the return function here also.
    resetForm();
}

//Reseting the form after deleting

function resetForm(){
    document.getElementById("bucketCode").value = '';
    document.getElementById("name").value = '';
    document.getElementById("bucketPrice").value = '';


}