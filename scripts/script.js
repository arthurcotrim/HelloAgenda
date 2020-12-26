// GET THE ELEMENTS 
const btn = document.querySelector('.btn');
const input = document.querySelector('.userInput');
const table = document.querySelector('.table');

////////////////////////////////////////

// ADD TASKS ON THE TABLE
let addTask = () => {
    let inputText = input.value; //GET INPUT'S VALUE

    if (inputText == '') {
        alert(`You didn't write anything`);
        input.focus();
    }
    else {
        let numberRows = table.rows.length // GET THE AMOUNT OF ROWS
        let newRow = table.insertRow(numberRows);
        // CREATE A ROW UNDER THE LAST ONE, THAT'S WHY WE PASS THE ARGUMENT 

        var newCell = newRow.insertCell(0); // CREATE A CELL IN INITIAL POSITION
        var newCellRemoving = newRow.insertCell(); // CREATE A CELL IN THE FOLLOWING POSITION

        newCell.innerHTML = inputText; // PUT THE CELL'S VALUE (USER PASSED TO US)
        newCellRemoving.innerHTML = '<a href="#" class="removeBtn status-Remove"  onclick="removeTask(this)">Remove</a>'; // PUT A LINK AND INVOLK A FUNCTION

        input.value = '';
        input.focus();
    }
}

// REMOVE TASKS
let removeTask = (newRow) => {
    var i = newRow.parentNode.parentNode.rowIndex;
    table.deleteRow(i); // GO TO TABLE AND DELETE AN ESPECIFI ROW 

    input.value = '';
    input.focus();
}

////////////////////////////////////////

// WHEN CLICK ON BUTTON CALL THE VARIABLE addTask 
btn.onclick = addTask;
