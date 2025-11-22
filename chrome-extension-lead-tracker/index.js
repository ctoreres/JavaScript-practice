const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    displayLeads();
} else {
    myLeads = [];
}

inputBtn.addEventListener("click", () => {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        const activeTabUrl = activeTab.url;   // get the current tab URL

        myLeads.push(activeTabUrl);

        localStorage.setItem("myLeads", JSON.stringify(myLeads));

        displayLeads();
        inputEl.value = "";
    });

});


saveBtn.addEventListener("click", () => {
    localStorage.setItem("current", window.location.href);

    const currentTab = localStorage.getItem("current");

    myLeads.push(currentTab);

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    displayLeads();

    console.log("Saved:", currentTab);
});


clearBtn.addEventListener("click", () => {
    localStorage.clear();
    myLeads = [];
    displayLeads();
});

function displayLeads(){
    let listItems = [];

    for (let lead of myLeads){
        listItems += `
                        <li>
                            <a target="_blank" href="${lead}">${lead}</a>
                        </li>`;
    };

    ulEl.innerHTML = listItems;
}