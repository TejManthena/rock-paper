function playerChoice(playerSelection) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerSelection = choices[Math.floor(Math.random() * choices.length)];

    var result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        result = "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }

    document.getElementById('result').innerHTML = result;

    document.querySelector('.player-choice').textContent = "Your choice: " + playerSelection;
    document.querySelector('.computer-choice').textContent = "Computer's choice: " + computerSelection;

    document.querySelector('.player-choice').classList.add('fade-in');
    document.querySelector('.computer-choice').classList.add('fade-in');
}