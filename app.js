
let board = ['','','','','','','','','']
let currentPlayer = 'X';
let gameActive = true;
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const newGameButton = document.getElementById('newGame');
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];




function initGame() {
    cells.forEach((cell, index) => {
        cell.addEventListener('click',()=> handleCellClick(index));
    });
    newGameButton.addEventListener('click', resetGame);
}

function handleCellClick (index) {
    // If cell is already filled or game is not active, do nothing
    if (board[index] !== '' || !gameActive) {
        return;
    }
    // Make the move
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    cells[index].disabled = true;
    

    //   Check for Win or Draw
    checkResult();
}

