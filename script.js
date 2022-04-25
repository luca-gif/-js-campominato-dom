const main = document.querySelector("main");
const BOMBS_NUM = 16;

document.getElementById("play").addEventListener("click", play);

/* Inizializza il gioco */

function play() {
    reset();
    const level = document.getElementById("level").value;
    const levels = [100, 81, 49];
    numLevels = levels[level];
    const bombs = bombGenerator(numLevels);
    generateGrid(numLevels);

    console.log(bombs);
}

/* Moltiplica le celle */

function generateGrid(valoreLivello) {
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 1; i <= valoreLivello; i++) {
        //const cell = generateCell(i, valoreLivello);
        grid.append(generateCell(i, valoreLivello));
    }
    main.append(grid);
}

/* Creo una cella */

function generateCell(numCella, valoreLivello) {
    const cell = document.createElement("div");
    cell.className = "cell square" + valoreLivello;
    cell.innerHTML = `<span> ${numCella}</span>`;

    cell.addEventListener("click", handleClickCell);

    return cell;
}

function bombGenerator(valoreLivello) {
    const arrayBombs = [];
    while (arrayBombs.length < BOMBS_NUM) {
        const bomb = getRandomNumber(1, valoreLivello);
        if (!arrayBombs.includes(bomb)) {
            arrayBombs.push(bomb);
        }
    }

    return arrayBombs;
}

/* Aggiunge il colore al click */

function handleClickCell() {
    this.classList.toggle("clicked");
}

/* Genera il reset */

function reset() {
    main.innerHTML = "";
}

/* Genera un numero random */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}