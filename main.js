const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");
const gap = parseFloat(window.getComputedStyle(root).getPropertyValue("--gap"));
const border = parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("border-width"));
const padding = parseFloat(window.getComputedStyle(gridContainer).padding);

const nRowsColumns = 5;

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

function cycleColor(timeInterval) {
    let hue = parseFloat(window.getComputedStyle(root).getPropertyValue("--hue"));
    hue+= 0.05*timeInterval;
    root.style.setProperty("--hue", `${hue}deg`);
}


function deleteBoxes () {
    const children = Array.from(gridContainer.childNodes);
    children.forEach(e=>{
        gridContainer.removeChild(e);
    });
}

function resetBoxes () {
    deleteBoxes();
    createBoxes(nRowsColumns);
}

let time0 = 0;

function update (time){
    const timeInterval = time - time0;
    cycleColor(timeInterval);
    time0 = time;
    window.requestAnimationFrame(update);

}

window.requestAnimationFrame(update);

createBoxes(nRowsColumns);

const reset = document.querySelector("button.reset");
reset.addEventListener("click", resetBoxes);