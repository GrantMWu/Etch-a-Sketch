sketchContainer = document.querySelector("#sketch-container")

createGrid(16);

document.querySelector('#grid-change').addEventListener('click', changeGrid);

function createGrid(num) {
    for (row = 0; row < num; row++) {
        const newRow = document.createElement("div");
        newRow.classList.add('row');
        sketchContainer.appendChild(newRow);
        for (column = 0; column < num; column ++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-block');
            newRow.appendChild(newDiv);
        }
    }
    let grids = document.querySelectorAll('.grid-block');
    
    grids.forEach(function(grid) {
        grid.addEventListener('mousedown', () => grid.style.backgroundColor = 'gray')
    });
}

function changeGrid () {
    let num = 0;
    while(true) {
        num = prompt('Enter a number between 2 and 100 to change to a nxn grid');
        if (num < 2 || num > 100) {
          alert('Invalid entry');
        } else {
            createGrid(num)
            break;
        }
    }
}
