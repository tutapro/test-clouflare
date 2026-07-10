const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

const ROWS = 20;
const COLS = 20;
const WIN_CONDITION = 5;

let currentPlayer = 'X';
let gameActive = true;
let boardState = []; // 2D array to keep track of the board

// Initialize board
function initGame() {
    boardElement.innerHTML = '';
    boardElement.style.setProperty('--cols', COLS);
    boardElement.style.setProperty('--rows', ROWS);
    boardState = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    currentPlayer = 'X';
    gameActive = true;
    updateStatus();

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
    }
}

function handleCellClick(e) {
    if (!gameActive) return;

    const cell = e.target;
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);

    if (boardState[r][c] !== null) return; // Cell already occupied

    // Update state and UI
    boardState[r][c] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    if (checkWin(r, c)) {
        statusElement.textContent = `Người chơi ${currentPlayer} đã thắng!`;
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        statusElement.textContent = 'Hòa!';
        gameActive = false;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
}

function updateStatus() {
    if (gameActive) {
        statusElement.textContent = `Lượt của người chơi: ${currentPlayer}`;
    }
}

function checkWin(row, col) {
    const player = boardState[row][col];

    // Directions: Horizontal, Vertical, Diagonal1, Diagonal2
    const directions = [
        [0, 1],  // Right
        [1, 0],  // Down
        [1, 1],  // Down-Right
        [1, -1]  // Down-Left
    ];

    for (let [dr, dc] of directions) {
        let count = 1; // Count includes the piece just placed

        // Check in positive direction
        count += countDirection(row, col, dr, dc, player);
        // Check in negative direction
        count += countDirection(row, col, -dr, -dc, player);

        if (count >= WIN_CONDITION) {
            return true;
        }
    }
    return false;
}

function countDirection(row, col, dr, dc, player) {
    let count = 0;
    let r = row + dr;
    let c = col + dc;

    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && boardState[r][c] === player) {
        count++;
        r += dr;
        c += dc;
    }
    return count;
}

function checkDraw() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (boardState[r][c] === null) {
                return false;
            }
        }
    }
    return true;
}

resetBtn.addEventListener('click', initGame);

// Start the game initially
initGame();
