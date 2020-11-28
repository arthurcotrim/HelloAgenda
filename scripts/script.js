const btn = document.querySelector('.btn');
const table = document.querySelector('.table');
const input = document.querySelector('.userInput');

btn.onclick = function () {
    let numberRows = table.rows.length
    let newRow = table.insertRow(numberRows)
    let inputText = input.value;

    if (input.value == '') {
        alert("You didn't put anything");
    }
    else {
        for (var i = 0; i < 1; i++) {
            var newCell = newRow.insertCell(0);
            var newCellDone = newRow.insertCell();
            var newCellRemoving = newRow.insertCell();

            newCell.innerHTML = inputText;
            newCellRemoving.innerHTML = '<a href="#" class="status-Remove" onclick=removeTask()>Remove</a>';
            newCellDone.innerHTML = '<a href="#" class="status-Done" onclick=doneTask()>Done</a>';
        }
    }
    input.value = '';
    input.focus();
}

function removeTask() {

}

function doneTask(){
    
}
