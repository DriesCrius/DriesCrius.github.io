let id = 0;
let users ={};
let selectedRow = 0;

function addUser() {
    let name = document.querySelector("#addName").value;
    let email = document.querySelector("#addEmail").value;
    let perm = document.querySelector("#addPerm").value;
    //console.log(name+" "+email+" "+perm);

    if (name && email) {
        addRow(name, email, perm);
        id++;
    } else alert("Name and Email are both required!")
    resetInput();
   
}

function resetInput() {
    document.getElementById("addName").value = "";
    document.getElementById("addEmail").value = " ";

}

function addRow(name, email, perm) {
    let table = document.getElementsByTagName("table")[0];
    let newRow = table.insertRow(1);
    newRow.setAttribute("id", [id])
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let buttons = document.querySelector("#buttons");
    let buttonsClone = buttons.cloneNode(true);



    cell0.innerHTML = name;
    cell1.innerHTML = email;
    cell2.innerHTML = perm;
    cell3.appendChild(buttonsClone);

}

function clearTable() {
    if (confirm('Are you sure to clear the table?')) {
        let table = document.getElementsByTagName("table")[0];
        while (id != 0) {
            table.deleteRow(id);
            id--;
        }
    }
   
}

function removeUser() {
    let table = document.querySelector('table');
    let selectedRow = 0;
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            selectedRow = table.rows[i];
            selectedRow.remove();
        }
    }
   
}
function editUser(){
    let table = document.querySelector('table');
   
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            selectedRow = this.rowIndex;
            document.getElementById('addName').value = this.cells[0].innerHTML;
            document.getElementById('addEmail').value = this.cells[1].innerHTML
            document.getElementById('addPerm').value = this.cells[2].innerHTML
        }
    }

}
function saveEdit(){
    let table = document.querySelector('table');
   
            let name = document.querySelector("#addName").value;
            let email = document.querySelector("#addEmail").value;
            let perm = document.querySelector("#addPerm").value;
            
            table.rows[selectedRow].cells[0].innerHTML=name;
            table.rows[selectedRow].cells[1].innerHTML=email;
            table.rows[selectedRow].cells[2].innerHTML=perm;
        
        }