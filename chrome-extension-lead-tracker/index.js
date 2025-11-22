const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

inputBtn.addEventListener("click", (event) => {
    myLeads.push(inputEl.value);

    displayLeads();
    inputEl.value = "";
});

function displayLeads(){
    let listItems = [];

    for (let lead of myLeads){
        listItems += `<li><a target="_blank" href="${lead}">${lead}</a></li>`;
    };

    ulEl.innerHTML = listItems;
}