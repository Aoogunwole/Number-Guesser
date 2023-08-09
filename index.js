const randomNumber =Math.ceil(Math.random() * 10);
let guessesLeft = 3;

const game = document.querySelector("#game");
const guessInput = document.querySelector("#guess-input");
const btn = document.querySelector("#guess-btn");
const message = document.querySelector('.message');


game.addEventListener("mousedown", function(e) {
    if (e.target.className == "play-again") {
        window.location.reload();
    }
    
})
btn.addEventListener("click", function() {
    
    let guess = guessInput.value;
    if(isNaN(guess) || guess < 1 || guess > 10) {
        setMessage("Add a correcr value", "red");
    }
    else if (guess == randomNumber) {
        gameOver(true, "Correct, You win");
        guessInput.disabled = true;
        btn.value = "Play Again";
        btn.className += "play-again";
    }
    else {
        guessesLeft--;
        if (guessesLeft == 0) {
            gameOver(false, "You lose. Game over",)
            guessInput.disabled = true;
            btn.value = "Play Again";
            btn.className += "play-again";
            
        }
        else {
            guessInput.value = "";
            setMessage(`Wrong!!!! ${guessesLeft} guesses left`, "red");
            
            

        }
    }
})

function gameOver(won, msg) {
    let color;
    won == true ? color="green" : color = "red"
    message.textContent = msg;
    

};



function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
    guessInput.style.borderColor = color;
}