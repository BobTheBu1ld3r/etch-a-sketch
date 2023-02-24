const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");
const gap = parseFloat(window.getComputedStyle(root).getPropertyValue("--gap"));
const border = parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("border-width"));
const padding = parseFloat(window.getComputedStyle(gridContainer).padding);


function createBoxes (nRowsColumns) {
    for (let i = 0; i<nRowsColumns ; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        
        for (let n = 0; n< nRowsColumns; n++) {
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            
            newBox.addEventListener("mouseover", addColor);

            const computedHeight = computeBoxSide(nRowsColumns);

            newBox.style.height = `${computedHeight}px`;
            newBox.style.width = `${computedHeight}px`;

            newRow.appendChild(newBox);
        }
    
        gridContainer.appendChild(newRow);
    }
}

function computeBoxSide (nRowsColumns) {
    const totalPadding = 2*padding;
    const totalGap = (nRowsColumns-1)*gap;
    const clientHeight = gridContainer.clientHeight;

    const availableSpace = clientHeight - totalGap - totalPadding;
    const boxSide = availableSpace/nRowsColumns;
    return boxSide;
}

function addColor(hoverEvent) {
    hoverEvent.target.classList.add("color");
}

let time1 = 0;

function update (time){
    let hue = parseFloat(window.getComputedStyle(root).getPropertyValue("--hue"));
    hue+= 0.8;
    root.style.setProperty("--hue", `${hue}deg`);
    time1 = time;
    window.requestAnimationFrame(update);

}

window.requestAnimationFrame(update);

createBoxes(100)