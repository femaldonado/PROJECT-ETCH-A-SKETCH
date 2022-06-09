const containerDiv = document.querySelector("#container");

function makeRows(rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    console.log(containerDiv);
    console.log(rows);
    console.log(columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.innerTenxt = (i + 1);
        containerDiv.appendChild(square).className = "grid-item";


    }
}

makeRows(16, 16);








/*const containerDiv = document.querySelector("#container");
let gridCount = 0;

while (gridCount < 32) {
    const gridDivs = document.createElement("div");
    gridDivs.classList.add("content");
    gridDivs.textContent = "HELLO!";
    containerDiv.appendChild(gridDivs);
    gridCount++;
    console.log(gridCount);
}*/
