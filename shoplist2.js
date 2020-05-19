// SELECTORS

var listInput = document.querySelector(".list-input");
var listButton = document.querySelector(".list-button");
var shopList = document.querySelector(".shop-list");

// EVENT LISTENERS

listButton.addEventListener("click", addItem);
shopList.addEventListener("click", deleteItem);

// FUNCTIONS

function addItem(event) {
    // prevent form from submitting
    event.preventDefault();
    // create addItem <DIV>
    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");
    // create Item <LI>
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    newListItem.innerText = listInput.value;
    listDiv.appendChild(newListItem);
    // --- ADD ITEMS TO LOCAL STORAGE ---
    SaveListLocally(listInput.value);
    // create checklist-BUTTON
    const checkListButton = document.createElement("button");
    checkListButton.innerHTML = '<i class="fas fa-check"></i>';
    checkListButton.classList.add("check-list-button");
    listDiv.appendChild(checkListButton);
    // create delete-BUTTON
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>' //'<i class="far fa-trash-alt"></i>' //'<i class="fas fa-trash"></i>';
    listDiv.appendChild(deleteButton);
    // append Item(s) to <LIST-CONTAINER>
    shopList.appendChild(listDiv);
    // clear List INPUT VALUE
    listInput.value = "";
}

function deleteItem(e) {
    // grab ITEM
    const item = e.target;
    // delete ITEM
    if (item.classList[0] === "delete-button") {
        var delItem = item.parentElement;
        delItem.remove();
    }
    // CHECK-MARK Item
    if (item.classList[0] === "check-list-button") {
        var checkItem = item.parentElement;
        checkItem.classList.toggle("completed");
    }
}

// STORE IN LOCAL STORAGE
function SaveListLocally(item) {
    let listItems;
    if (localStorage.getItem('listItems') === null) {
        listItems = [];
    }
    else {
        listItems = JSON.parse(localStorage.getItem('listItems'));
    }
    listItems.push(item);
    localStorage.setItem('listItems', JSON.stringify(listItems));
}
// create LOCAL_storage function ---> SaveListLocally

// CHECK if the argument already exists in local storage