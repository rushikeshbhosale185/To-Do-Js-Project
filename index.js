const taskList = [], itemList = [];     // taking two array for creating / deleting cart and Items
let my_id = 0, del_id = 0, markDone = 0, nexttid = 0;   // intially taking all the four parameters as 0

const addBox = () => {                                               // Add New Cart 
    document.getElementById("overlay").style.display = "block";
    document.getElementById("main").style.filter = "blur(10px)"
}

const closeBox = () => {                                            // Add list items
    document.getElementById("overlay").style.display = "none";
    document.getElementById("item-overlay").style.display = "none";
    document.getElementById("main").style.filter = "blur(00px)"
    document.getElementById("task").value = "";
    document.getElementById("item").value = "";
}

const addTask = () => {
    const taskName = document.getElementById("task").value;
    if (taskName != "") {
        const tempObj = {
            id: Date.now(),
            taskname: taskName
        }
        document.getElementById("default").style.display = "none"
        taskList.push(tempObj);
        console.log(taskList)
        addTaskonscreen();
    }
    closeBox();
}

function addTaskonscreen() {
    const element = document.createElement('div');
    element.setAttribute('class', 'child');
    const existingElement = document.getElementById('parent')
    existingElement.appendChild(element);

    const boxHead = document.createElement('h2');         //  Putting element.innerText = taskList[taskList.length-1].taskname;
    boxHead.setAttribute('class', 'head2')
    boxHead.setAttribute('onclick', 'redirectPage(this.id)')
    nexttid = Date.now();
    boxHead.setAttribute('id', nexttid);
    boxHead.innerText = taskList[taskList.length - 1].taskname
    element.appendChild(boxHead)

    const hr = document.createElement('hr');
    hr.style.margin = "10px 0px";
    element.appendChild(hr);

    const icons = document.createElement('div');
    icons.setAttribute('class', 'icons');
    element.appendChild(icons)

    const bin = document.createElement('div');
    bin.setAttribute('class', 'circle c1 material-icons');
    bin.setAttribute('onclick', 'del(this.id)')
    del_id = Date.now();
    bin.setAttribute('id', del_id)
    bin.innerText = "delete"
    icons.appendChild(bin)

    const plus = document.createElement('div');
    plus.setAttribute('class', 'circle c2 material-icons');
    plus.setAttribute('onclick', 'add(this.id)')
    my_id = Date.now();
    plus.setAttribute('id', my_id)
    plus.innerText = "add"
    icons.appendChild(plus)
}

function redirectPage(myid) {
    let newId = myid
    let head = document.getElementById(newId).innerText
    let mine = document.getElementById(newId).nextSibling.nextSibling.nextSibling
    let mychild = mine.firstChild.innerText
    console.log(head, mine, mychild)

    document.getElementById("nextHeader").style.display = "grid"
    document.getElementById("child").style.display = "block"
    document.getElementById("header").style.display = "none"
    document.getElementById("parent").style.justifyContent = "center"
    let classChild = document.getElementsByClassName("child")

    for (var i = 0; i < classChild.length; i++) {
        classChild[i].style.display = "none";
    }

    document.getElementById("mainHeader").innerText = head
    document.getElementById("child-head").innerText = head
    let par = document.getElementById("child")
    par.append(mine)
}

function addItemAfter() {
    document.getElementById("header").style.display = "grid"
    document.getElementById("nextHeader").style.display = "none"
    document.getElementById("parent").style.justifyContent = "space-between"
    document.getElementById("child").style.display = "none"
    addBox();
}

const add = (itemId) => {                                        //  Add items inside list
    document.getElementById("item-overlay").style.display = "block";
    document.getElementById("main").style.filter = "blur(10px)"
    let idList = itemId;
    document.getElementById("addover").onclick = function () { addItem(idList) };
}

const addItem = (itemId) => {
    let newId = itemId
    const itemName = document.getElementById("item").value;
    if (itemName != "") {
        const tempObj = {
            id: Date.now(),
            itenname: itemName
        }

        itemList.push(tempObj);
        console.log(itemList)
        function addItemonscreen() {
            let parentEle = document.getElementById(newId).parentElement
            console.log(parentEle)
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'list-items');
            parentEle.appendChild(newDiv)

            const para = document.createElement('p');
            para.setAttribute('class', 'para');
            para.innerText = itemName
            newDiv.appendChild(para)

            const anchorr = document.createElement('a');
            anchorr.setAttribute('class', 'childLink');
            markDone = Date.now()
            anchorr.setAttribute('id', markDone)
            anchorr.innerText = "Mark Done"
            anchorr.setAttribute('onclick', 'mark(this.id)')
            newDiv.appendChild(anchorr)

        }
        addItemonscreen()
    }
    closeBox();
}

const mark = (itemId) => {                                                                     //  Creating mark done Style
    let id = itemId
    let item = document.getElementById(id).style.display = "none"
    let pre = document.getElementById(id).previousSibling.style.textDecoration = "line-through"
    console.log(item, pre)
}

const del = (itemId) => {                                                                      // deleting item from the List
    let del_id = itemId;
    let parentEle = document.getElementById(del_id).parentElement;
    parentEle.style.display = "none";
    taskList.length = taskList.length - 1;
    if (taskList.length == 0) {
        document.getElementById("default").style.display = "block";
    }
}