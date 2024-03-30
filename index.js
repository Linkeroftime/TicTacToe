const box = document.querySelectorAll(".square");
let output = [];
let gameOver = false; // This will track if the game is over
const resetButton = document.querySelector("button");
const statusHeader = document.querySelector("h1"); // Cache the status element

// Function to check if a player has won
function checkWin(player) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winCombos) {
        if (combo.every(index => box[index].innerHTML === player)) {
            statusHeader.innerHTML = player + " Wins!";
            gameOver = true;
            return; // Exit the function once a win is detected
        }
    }
}

// Function to check if the game is a draw
function draw() {
    if (!gameOver && output.length === 9) {
        statusHeader.innerHTML = "Draw!";
        gameOver = true;
    }
}

resetButton.addEventListener("click", function(){
    window.location.reload(true);
})

// Add click event listeners to all squares
box.forEach(square => {
    square.addEventListener("click", function () {
        if (this.innerHTML === "" && !gameOver) {
            const player = output.length % 2 === 0 ? "X" : "O";
            this.innerHTML = player;
            output.push(player);
            checkWin(player);
            draw();
        }
    });
});
