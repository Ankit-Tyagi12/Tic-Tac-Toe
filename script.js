let currentPlayer = 'X';
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function handleClick(row, col) {
  if (gameBoard[row][col] === '') {
    gameBoard[row][col] = currentPlayer;
    document.getElementById(`cell${row}${col}`).innerText = currentPlayer;
    if (checkWinner(row, col)) {
      alert(`${currentPlayer} wins!`);
      resetBoard();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner(row, col) {
  // Check row
  if (gameBoard[row][0] === currentPlayer && gameBoard[row][1] === currentPlayer && gameBoard[row][2] === currentPlayer) {
    return true;
  }
  // Check column
  if (gameBoard[0][col] === currentPlayer && gameBoard[1][col] === currentPlayer && gameBoard[2][col] === currentPlayer) {
    return true;
  }
  // Check diagonals
  if (row === col && gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) {
    return true;
  }
  if (row + col === 2 && gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gameBoard[row][col] === '') {
        return false;
      }
    }
  }
  return true;
}

function resetBoard() {
  gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      document.getElementById(`cell${row}${col}`).innerText = '';
    }
  }
}