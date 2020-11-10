// Display selectors
const p1Text = document.querySelector("#p1Display");
const p2Text = document.querySelector("#p2Display");

// Game number dropdown selector
const gameNumber = document.querySelector("#gameNumber");

// Score and winner variables
let gameWon = false;
let p1Score = 0;
let p2Score = 0;

// Function to update scores
function newScore (p1Value, p2Value) {
    p1Score = p1Value;
    p2Score = p2Value;
    // Change display
    p1Text.textContent = p1Value;
    p2Text.textContent = p2Value;
}

// Function to check for a winner
function checkWin () {
    if (p1Score >= Number(gameNumber.value)) {
        addStyle (p1Text, p2Text);
        gameWon = true;

    } else if (p2Score >= Number(gameNumber.value)) {
        addStyle (p2Text, p1Text);
        gameWon = true;
    }
}

// Function to change styling on a win
function addStyle (winner, loser) {
    // Turn p1Score green
    winner.classList.add('has-text-success');
    // Turn p2Score red
    loser.classList.add('has-text-danger');
    // Disable add buttons
    p1Button.disabled = true;
    p2Button.disabled = true;
}

// Function to remove styling on a reset
function removeStyle (winner, loser) {
    winner.classList.remove('has-text-success');
    loser.classList.remove('has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}

// Bottom button selectors
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

// Player 1 button function
p1Button.addEventListener('click', function () {
    p1Score++;
    newScore(p1Score, p2Score);
    checkWin();
})

// Player 2 button function
p2Button.addEventListener('click', function () {
    p2Score++;
    newScore(p1Score, p2Score);
    checkWin();
})

// Reset button function
reset.addEventListener('click', function (){
    if (gameWon && p1Score >= Number(gameNumber.value)) {
        removeStyle (p1Text, p2Text);
        gameWon = false;

    } else if (gameWon && p2Score >= Number(gameNumber.value)) {
        removeStyle (p2Text, p1Text);
        gameWon = false;
    }
    newScore(0, 0);
})
