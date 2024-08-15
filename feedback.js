let fomEl= document.forms.feedback;
let formBtn = document.querySelector(".fsubmit");
let nameEl = fomEl.elements.fullname;

//it reflect the value what you modified get from form data and give output
// const handleSubmit = (event)=> {
//     event.preventDefault();

//    const formData = new FormData(fomEl); 
//     let jasonData = JSON.stringify(Object.fromEntries(formData));
//     // console.log('Jasondata',jasonData);

// // XML request
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://reqres.in/api/user/2", true);
//     xhr.onload = function(){
//         const obj = JSON.parse(xhr.responseText);
//         document.getElementById("response").innerText = obj.data.name;
//     };
//     xhr.send();
// };
// fomEl.addEventListener("submit", handleSubmit);
// fomEl.addEventListener("formdata", handleFormData);

const nameGreeting = document.getElementById("namegreetings");

nameEl.addEventListener("input", (event)=>{
    nameGreeting.innerText = `Hello ${event.target.value}, `;
});

const inputRadioEl = document.querySelector("#inputcatogries");
const terms1El = document.getElementById("terms1");

inputRadioEl.addEventListener("change", (event)=>{
    event.preventDefault();
    if(event.target.value === "contribution"){
        setTimeout(() => {
            alert("Thank you for contribution")
        }, 1000);
    }
});
terms1El.addEventListener("change", (event)=>{
    event.preventDefault();
    if(event.target.value === "termss"){
        setTimeout(() => {
            alert("You accept the conditions")
        }, 1000);
    }
});

console.log(nameEl.value);