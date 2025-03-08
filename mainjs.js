let sidebar = document.querySelector(".sidebar");
let dockButton = document.querySelector("#dockbtn");
let docker = document.querySelector("#docker");
let addbtn = document.querySelector("#addtask");
let inpbox = document.querySelector("#inputbox");
let inp = document.querySelector("#input");
let addtsk = document.querySelector("#add");
let addtask = document.querySelector("#taddtsk");
let tasklist = document.querySelector("#tasklist");
let inboxlist = document.querySelector("#inboxlist");
let cancel = document.querySelector("#cancel");
let inboxval = document.querySelector("#inboxval");
let inbox = document.querySelector("#inbox");
let todayval = document.querySelector("#todayval");
let today = document.querySelector("#today");
let calender = document.querySelector("#calender");
let tasks = [];

let backimgno = Math.floor(Math.random() * 6);
let urls = [
    "./assets/item1.png",
    "./assets/item2.png",
    "./assets/item3.png",
    "./assets/item4.png",
    "./assets/item5.png",
    "./assets/item6.png"
];
document.body.style.backgroundImage = `url('${urls[backimgno]}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

dockButton.addEventListener("click", function () {
    sidebar.classList.add("hidden");
    docker.style.visibility = "visible";
});

docker.addEventListener("click", function () {
    sidebar.classList.remove("hidden");
    docker.style.visibility = "hidden";
});

addbtn.addEventListener("click", function () {
    inpbox.style.display = "block";
    addtask.style.visibility = "hidden";
    document.body.style.backgroundImage = "";
});

addtask.addEventListener("click", function () {
    addtask.style.visibility = "hidden";
    inpbox.style.display = "block";
    document.body.style.backgroundImage = "";
});

let selectedDate = null;
calender.addEventListener("click", () => {
    let existingDateInput = document.querySelector("#dateInput");

    if (!existingDateInput) {
        let date = document.createElement("input");
        date.type = "date";
        date.id = "dateInput";
        date.style.marginLeft = "10px";
        date.style.padding = "5px";
        date.style.border = "1px solid gray";
        date.style.borderRadius = "5px";
        let today = new Date().toISOString().split("T")[0];
        date.min = today;
        calender.appendChild(date);

        date.addEventListener("change", function () {
            selectedDate = date.value.split("-").reverse().join("-");
        });
    }
});

function createTaskElement(taskText, linkedCheckbox) {
    let item = document.createElement("li");
    item.innerText = taskText;

    let check = document.createElement("input");
    check.type = "checkbox";
    item.prepend(check);

    check.addEventListener("change", function () {
        if (linkedCheckbox) {
            linkedCheckbox.checked = check.checked;
        }
        item.style.color = check.checked ? "gray" : "black";
    });

    return { item, check };
}

addtsk.addEventListener("click", function () {
    if (inp.value.trim() === "") return;

    let taskText = inp.value;
    tasks.push(taskText);

    let todayTask = createTaskElement(taskText, null);
    let inboxTask = createTaskElement(taskText, todayTask.check);

    let dateSpan = null;
    if (selectedDate) {
        dateSpan = document.createElement("span");
        dateSpan.innerText = ` (${selectedDate})`;
        dateSpan.style.color = "black";
        dateSpan.style.fontSize = "15px";
        dateSpan.style.marginLeft = "10px";

        todayTask.item.appendChild(dateSpan);
        inboxTask.item.appendChild(dateSpan.cloneNode(true));
    }

    todayTask.check.addEventListener("change", function () {
        inboxTask.check.checked = todayTask.check.checked;
        inboxTask.item.style.color = todayTask.check.checked ? "gray" : "black";
        if (dateSpan) dateSpan.style.color = todayTask.check.checked ? "gray" : "black";
    });

    inboxTask.check.addEventListener("change", function () {
        todayTask.check.checked = inboxTask.check.checked;
        todayTask.item.style.color = inboxTask.check.checked ? "gray" : "black";
        if (dateSpan) dateSpan.style.color = inboxTask.check.checked ? "gray" : "black";
    });

    tasklist.appendChild(todayTask.item);
    inboxlist.appendChild(inboxTask.item);

    let dateInput = document.querySelector("#dateInput");
    if (dateInput) {
        calender.removeChild(dateInput);
    }

    addtask.style.visibility = "visible";
    inp.value = "";
    selectedDate = null;
});

inbox.addEventListener("click", function () {
    tasklist.style.display = "none";
    todayval.style.display = "none";
    addtask.style.display = "none";
    inboxval.style.display = "block";
    inboxlist.style.display = "block";
    document.body.style.backgroundImage = "url('./assets/inboximg.jpeg')";
    document.body.style.backgroundRepeat = "no-repeat";
});

today.addEventListener("click", function () {
    inboxval.style.display = "none";
    inboxlist.style.display = "none";
    tasklist.style.display = "block";
    todayval.style.display = "block";
    addtask.style.display = "block";
    document.body.style.backgroundImage = "url('./assets/todayimg.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
});

cancel.addEventListener("click", function () {
    inpbox.style.display = "none";
    addtask.style.visibility = "visible";
});
