const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");
console.log(window.getComputedStyle(root).getPropertyValue("--split"))
const split = parseFloat(window.getComputedStyle(root).getPropertyValue("--split"));
const border = parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("border-width"));
console.log(border);
console.log(split);

for (let i = 0; i<5 ; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    
    for (let n = 0; n< 5; n++) {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        
        const computedHeight = (parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("height")) - 4*split -2*border)/5
        console.log(computedHeight);
        newBox.style.height = `${computedHeight}px`;
        newBox.style.width = `${computedHeight}px`
        newRow.appendChild(newBox);
    }

    gridContainer.appendChild(newRow);

}