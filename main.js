const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");
console.log(window.getComputedStyle(root).getPropertyValue("--split"))
const split = parseFloat(window.getComputedStyle(root).getPropertyValue("--split"));
const border = parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("border-width"));
console.log(border);
console.log(split);

function createBoxes (nRowsColumns) {
    for (let i = 0; i<nRowsColumns ; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        
        for (let n = 0; n< nRowsColumns; n++) {
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            
            const computedHeight = (parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("height")) - (nRowsColumns-1)*split -2*border)/nRowsColumns
            console.log(computedHeight);
            newBox.style.height = `${computedHeight}px`;
            newBox.style.width = `${computedHeight}px`
            newRow.appendChild(newBox);
        }
    
        gridContainer.appendChild(newRow);
    }
}

createBoxes(10)