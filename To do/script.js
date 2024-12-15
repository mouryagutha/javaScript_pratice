const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask()
{
    if(inputBox.value === ' ')
    {
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected 'classlist' to 'classList'
        saveData()
    } else if (e.target.tagName === "SPAN") { // Corrected 'tagname' to 'tagName'
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showList()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}

showList();