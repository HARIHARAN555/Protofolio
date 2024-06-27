// Javascript for to-dolist

selectedRow = null

function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}


function readFormData(){
    var formData = {};
    formData["name"]=document.getElementById("name").value;
    formData["email"]=document.getElementById("email").value;
    formData["mobile"]=document.getElementById("mobile").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
       cell1.innerHTML= data.name;
    cell2 = newRow.insertCell(1);
       cell2.innerHTML= data.email;
    cell3 = newRow.insertCell(2);
       cell3.innerHTML= data.mobile;
    cell4 = newRow.insertCell(3);
       cell4.innerHTML= '<button onclick= "onEdit(this)">Edit</button> <button onclick = "onDelete(this)">Delete</button>'
}

// edit & Delete
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.name;
    selectedRow.cells[1].innerHTML=formData.email;
    selectedRow.cells[2].innerHTML=formData.mobile;
}

function onDelete(td){
    if(confirm('Do you want to delete this record.. ?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }

}
function resetForm(){
    document.getElementById("name").value= '';
    document.getElementById("email").value= '';
    document.getElementById("mobile").value= '';
    selectedRow = null;
}


// end-of to-dolist

/*
var price = 100
var product = "iphone"
var tax = 10
console.log(product)
var total = price+tax
console.log(total)

// fuctions
function iphone(){
    console.log("Iphone cost 12300")
}
iphone()
function samsung(){
    console.log("Samsung cost 12300")
}
samsung()
function add(){
    
    var c=price+tax
    console.log(c)
}
add()

var factor="Vijay"
var fplayer="Virat"
var fmovie="vikram"

function favourite(){
    console.log("Favourite actor:"+factor)
    console.log("Favourite player:"+fplayer)
    console.log("Favourite movie:"+fmovie)
}
favourite()
// parameter
function area(l,b){
    var a=l*b
    console.log("The area is:"+a)
}
var length=10
var breadth=20
area(10,20)

// return type

function add(a,b){
    return a+b
}
var c=add(10,20)
console.log(c)

// Conditional statement
var homework= true

if (homework){
    console.log("Great job")
}
else{
    console.log("Finish your homework before playing")
}
var Cookies= false

if (Cookies){
    console.log("Would you like cookies..?")
}
else{
    console.log("Its time to bake more cookies")
}

var season = "summer"

if (season == "spring"){
    console.log("Enjoy the blooming flowers")
}
if (season == "summer"){
    console.log("Have fun in the summer")
}
if (season == "autumn"){
    console.log("Admire the colorful leaves")
}

// Else if

var number = "2"

if (number== 2){
    console.log("The number is even")
}
else if(number== 3){
    console.log("The number in odd")
}
// for loop
for (var i=1;i<=10;i+= 3){
    console.log("1*2:"+i)
}
// for (let count=10;count>=1;count--){
//     console.log(count)
// }

for (var i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}  */
