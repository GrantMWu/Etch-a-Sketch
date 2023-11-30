sketchContainer = document.querySelector("#sketch-container")

createGrid(20)

let grids = document.querySelectorAll('.grid-block');

grids.forEach(function(node) {
    node.addEventListener('mouseover', () => node.style.backgroundColor = 'gray');
});

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
}
