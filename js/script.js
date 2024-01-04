import { checkbox, switche, slider } from "./darkmode.js"

const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];


document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item");
    createItem(item);
})

function displayItems() {
    let items = "";

    itemsArray.forEach((item,i) => {
        items += ` <div class="item">
        <div class="input-controller">
            <label class="input-controller__checkbox">
            <input type="checkbox" class="input-controller__checkbox__check" data-index="${i}">
            <div class="input-controller__checkbox__checkmark"></div>
            <ul><li class="input-controller__li">${item}</li></ul>
            <div class="edit-controller">
                <i class="fa-solid fa-check deleteBtn"></i>
                <i class="fa-solid fa-pen-to-square editBtn"></i>
            </div>
        </div>
        <div class="update-controller">
            <button class="update-controller__saveBtn">Save</button>
            <button class="update-controller__cancelBtn">Delete</button>
        </div>
    </div>`

    });


    document.querySelector(".to-do-list").innerHTML = items;
    activateDeleteLitseners();
    activateSaveLitseners();
    activateCancelLitseners();
    activateCheckboxListeners();
}

function activateCheckboxListeners() {
    const taskCheckboxes = document.querySelectorAll(".input-controller__checkbox__check");
    
    function updateCheckboxStyle(checkbox, li) {

        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            alert('finished task');
        } else {
            li.style.textDecoration = "";
        }

     
    }
    
    taskCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {

            // déclaration constante li pour btn. On va chercher la classe li dans js.
            const li = checkbox.closest('.item').querySelector(".input-controller__li");
            updateCheckboxStyle(checkbox,li);

        });

    });

}

function activateDeleteLitseners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteBtn(i) });
    });
}

function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload();
}



function activateSaveLitseners() {
    const saveBtn = document.querySelectorAll(".update-controller__saveBtn");
    const inputs = document.querySelectorAll(".input-controller ul");

    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i);
        })
    })
}

function updateItem(text, i) {
    itemsArray[i] = text;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();

}

function activateCancelLitseners() {
    const cancelBtn = document.querySelectorAll(".update-controller__cancelBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller ul");
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true;
            deleteItem(i);
        })
    })
}

function createItem(item) {

    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function displayDate() {
    let date = new Date();
    date = date.toString().split(" ");
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3] + " " + date[4];
}

document.addEventListener('DOMContentLoaded', function () {

    displayDate();
    displayItems();


    const header = document.querySelector('header');


    header.append(switche);
    switche.append(checkbox);
    switche.append(slider);

});








