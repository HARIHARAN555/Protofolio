// Create a list using array and add messages
// function creatAlerts(message){
//     const main = document.getElementById("main");
// const div = document.createElement("div");
// const textNode = document.createTextNode(message);

// div.className = "alert";
// div.append(textNode);
// main.prepend(div);
// }
// creatAlerts('Added sussesfully');
// creatAlerts('Added done');

// const foodsList = document.getElementById("food-list")

// const fragments = document.createDocumentFragment();
// for(let i=0;i<=1000;i++){
//     const li = document.createElement("li")
//     li.textContent = `Foodlist: ${i}`;
//     li.className = "food-list-item";
//     fragments.append(li);
// }

// foodsList.append(fragments);

// // get array value and call the value from fragments
// const favroitefood = ["chciken","Mutton","Fish"];

// const favoritefoods = document.createDocumentFragment()

// favroitefood.forEach((food) => {
//     const elLi = document.createElement("li");
//     elLi.className = "food-list-item";
//     elLi.textContent = food;
//     favoritefoods.append(elLi);
// });
// foodList.append(favoritefoods);

// remove css using javascript
// foodCreate.style.cssText="color: red;";

// foodCreate.removeAttribute("style");


// To check the keyboard key function 
//   document.addEventListener('keyup', event=>{
//         console.log('keyUp', event);
//     });

// Table

// // Select the element of table with color no repeat

// let tabelEl = document.querySelector("table");
// let selectId;


// tabelEl.addEventListener("click", (event) =>{

//     let targetT = event.target;
//     let colsestEl = targetT.closest ("tr");
//     if(targetT.tagName === "TH") return ; // ignore th while add event listerner

//     if(selectId != undefined){
//         selectId.classList.remove("active");
//     } // remove the color in selectId

//     selectId = colsestEl; //get the value from colsetEl
//     console.log("clicked :", targetT.tagName);
//     alert(`Hai ${colsestEl.children[0].textContent}`)
//     colsestEl.classList.add("active");


// })



// document.addEventListener("click", (event) =>{
//     let id = event.target.dataset.toogleId;

//     if(!id)return;

//     let elID = document.getElementById(id);

//     elID.hidden = !elID.hidden;
// })

// let form = document.querySelector("#donate-form")

// form.addEventListener("submit", (event)=>{

//     event.preventDefault();
//     let donateEL = event.target.querySelector("input").value

//     alert(`Thank you fo valuable ${donateEL}`);
// })

// // mouse click event
// document.addEventListener("mouseup",(event) =>{
//     switch (event.which) {
//         case 1:
//             alert("leftclick")
//             break;
//         case 2:
//             alert("middleclick")
//             break;
//         case 3:
//             alert("rightclick")
//             break;
    
//         default:
//             alert("unknown"+ event.which + "is pressed")
//             break;
//     }
// });

// // Keyboard Events
// document.addEventListener("keyup",(event) =>{
//     switch (event.key) {
//         case "ArrowUp":
//             alert("Up arrow")
//             break;
//         case "ArrowDown":
//             alert("Down arrow")
//             break;
//         case "ArrowLeft":
//             alert("Left arrow")
//             break;
//         case "ArrowRight":
//             alert("rightarrow")
//             break;
    
//         default:
//             alert("unknown "+ event.key + " is pressed")
//             break;
//     }
// });