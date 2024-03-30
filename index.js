const box = document.querySelectorAll(".square");
let output = [];
let enabled = false;
const resetButton = document.querySelector("button");

if(output.length === 9){
    document.querySelector("h1").innerHTML("Game Over")
}

resetButton.addEventListener("click", function(){
    window.location.reload(true)
})

// Function to check if a player has won
function checkWin(player) {
    // Define all possible winning combinations
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

    // Iterate over each winning combination
    for (let combo of winCombos) {
        // Check if all squares in a winning combination contain the player's symbol
        if (combo.every(index => document.querySelectorAll(".square")[index].innerHTML === player)) {
            // If a winning combination is found, update the game status and disable further moves
            document.querySelector("h1").innerHTML = player + " Wins!";
            enabled = true;
            break;
        }
    }
}

// Function to check if the game is a draw
function draw() {
    // If no player has won and all squares are filled, it's a draw
    if (enabled === false && output.length === 9) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

// Add click event listeners to all squares
for (var i = 0; i < box.length; i++) {
    document.querySelectorAll(".square")[i].addEventListener("click", function () {
        // If the square is empty and it's X's turn, fill the square with X
        if (this.innerHTML === "" && output.length % 2 === 0) {
            this.innerHTML = "X";
            output.push("x");
            // Check if X has won
            checkWin("X");
        }
        // If the square is empty and it's O's turn, fill the square with O
        else if (this.innerHTML === "" && output.length % 2 !== 0) {
            this.innerHTML = "O";
            output.push("o");
            // Check if O has won
            checkWin("O");
        }

        // Check if the game is a draw
        draw();
    })
}

for(var i=0; i<box.length; i++){
    document.querySelectorAll(".square")[i].addEventListener("click", function(){
        if(this.innerHTML === ""&& output.length%2 === 0){
            this.innerHTML = "X"
            output.push("x");
        }else if(this.innerHTML === ""&& output.length%2 !== 0){
            this.innerHTML = "O";
            output.push("o");
        }
        draw()
    })
}

