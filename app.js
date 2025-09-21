
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

function checkResult() {
    let roundWon = false;
    // Check all winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }  
    }


    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;

        // Disable all cells
        cells.forEach(cell => {
            cell.disabled = true;
        });
        return;
    }
    // Chek for draw
    if (!board.includes('')) {
        statusDisplay.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }


    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

// Reset the game
function resetGame() {
    board = ['','','','','','','','',''];
    currentPlayer = 'X';
    gameActive= true;
    statusDisplay.textContent = 'X goes first';
    cells.forEach(cell =>{
        cell.textContent = '';
        cell.disabled = false;
    });
}

initGame();
