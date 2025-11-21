const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

inputBtn.addEventListener("click", (event) => {
    myLeads.push(inputEl.value);

    displayLead();
    inputEl.value = "";
});

function displayLead(){
    let lead = `<li>${inputEl.value}</li>`;
    ulEl.innerHTML += lead;
}
