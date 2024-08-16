let inputFood = document.getElementById("food-input")
let foodCreate = document.getElementById("food-create")
let foodList = document.getElementById('food-list')
let dupilcate = document.getElementById("duplicate")
let duplicateEL = document.getElementById("duplicate");
let sectionEl = document.querySelector("section");
let resyncBt = document.getElementById("resync");
let noListEl = document.getElementById("no-list");
let shBtn= document.querySelector("#shBtn");
let foodCountEl = document.getElementById("food-count");
let localStorageItems = "foodItems";

// Local storage fetch data
document.addEventListener("DOMContentLoaded",()=>{
    let fetchedFoodItems = [...JSON.parse(localStorage.getItem(localStorageItems))];

    fetchedFoodItems.forEach((item)=>{
    let foodCreateBtn = document.createElement("li");
    const divLi = document.createElement("div");
    const divRemoveBtn = document.createElement("div");
    
     foodCreateBtn.append(divLi,divRemoveBtn);
     
     foodCreateBtn.className = "food-list-item";
     divLi.textContent = item.foodItem;
     
     divRemoveBtn.parentElement.setAttribute("onclick","removeItem(event)");
     divRemoveBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
     
     foodList.append(foodCreateBtn);
     foodCreateBtn.append(divLi);
     foodCreateBtn.append(divRemoveBtn);
    });
    refreshUI();
});
// // To create a list and remove the element using javascript using click a button 
 const handleInputFood = (()=>{
    
    // let creatLi = foodList.innerHTML += `<li class ='food-list-item'>${inputFood.value}</li> <i class='fa-solid fa-xmark'></i>`;
    let foodCreateBtn = document.createElement("li");
    const divLi = document.createElement("div");
    const divRemoveBtn = document.createElement("div");
    
     foodCreateBtn.append(divLi,divRemoveBtn);
     
     foodCreateBtn.className = "food-list-item";
     divLi.textContent = inputFood.value;
     
     divRemoveBtn.parentElement.setAttribute("onclick","removeItem(event)");
     divRemoveBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
     
     foodList.append(foodCreateBtn);
     foodCreateBtn.append(divLi);
     foodCreateBtn.append(divRemoveBtn);

    //  set local storage

    localStorage.setItem(localStorageItems, JSON.stringify([...JSON.parse(localStorage.getItem(localStorageItems)|| "[]"),{ foodItem: inputFood.value},]));
     refreshUI();
})
foodCreate.addEventListener("click",handleInputFood);

inputFood.addEventListener("keyup", (event)=>{
    if(event.key === 'Enter'){
        handleInputFood();
    }else if (event.key === 'KeyZ'){
            inputFood.value= "";
        }
    });


// const foodItems = foodList.getElementsByClassName('food-list-item')
// let allfood = [].map.call(foodItems,(food)=> food.textContent);
// // console.log(allfood);
shBtn.addEventListener("click",()=>{
    if (foodList.style.display === "none") {
        shBtn.innerText = "HideDiv";
        shBtn.style.backgroundColor = "gray";
        foodList.style.display = "Block";
    }
    else{
        shBtn.innerText = "ShowDiv";
        shBtn.style.backgroundColor = "royalblue";
        foodList.style.display = "none";
    }
});

// clone node (true) without element its create a top of parent element
resyncBt.addEventListener('click',()=>{
    duplicateEL.innerHTML="";
    const cloneDataLi = foodList.cloneNode(true);
    duplicateEL.append(cloneDataLi);
    // remove item in local storages
    // let fetchedFoodItems = [...JSON.parse(localStorage.getItem(localStorageItems))];

    // fetchedFoodItems.forEach((item)=>{
    //     if(item.foodItem === exitLI.innerText){
    //         fetchedFoodItems.splice(fetchedFoodItems.indexOf(item),1);
    //     }
    // });
    // localStorage.setItem(localStorageItems,JSON.stringify(fetchedFoodItems));
})

function removeItem(event){
    const exitLI =event.target.parentNode.parentNode;
    exitLI.remove();
    // remove item in local storages
    let fetchedFoodItems = [...JSON.parse(localStorage.getItem(localStorageItems))];

    fetchedFoodItems.forEach((item)=>{
        if(item.foodItem === exitLI.innerText){
            fetchedFoodItems.splice(fetchedFoodItems.indexOf(item),1);
        }
    });
    localStorage.setItem(localStorageItems,JSON.stringify(fetchedFoodItems));
    refreshUI();
}
// If no lists want display img
function refreshUI() {
    foodCountEl.innerText = `Your food count is ${foodList.children.length}`;
// If meethod to show img 
    // if(foodList.children.length >0){
    //     noListEl.hidden = true;
    // }else{
    //     noListEl.hidden = false;
    // }
// code better
    foodList.children.length >0 ? ((noListEl.hidden = true),(foodCountEl.hidden = false)):((noListEl.hidden = false),(foodCountEl.hidden= true));
}





