const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i<5 ; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    
    for (let n = 0; n< 5; n++) {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        newRow.appendChild(newBox);
    }

    gridContainer.appendChild(newRow);

}