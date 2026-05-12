let secretNumber = Math.trunc(Math.random()*100 + 1);
console.log(secretNumber);
let score = 10;
let highscore = 0;

document.getElementById("btn_check").addEventListener("click",()=>{
    const guessNo = Number(document.getElementById("guess").value);
    if(!guessNo){
        document.querySelector(".msg").textContent = "Enter a numeric value";
    }
    if(score ==0){
        document.querySelector(".msg").textContent ="You lost the game ._."
    }else{
        if(guessNo === secretNumber){
            document.querySelector(".msg").textContent = "Correct Guess!!";
            document.querySelector(".display").textContent = secretNumber;
            document.querySelector("body").style.backgroundColor = "green";
            document.querySelector(".score").textContent = score;
            if(score > high_score){
                document.querySelector(".high").textContent = score;
            }
        }else if(guessNo < secretNumber){
            document.querySelector(".msg").textContent = "Too Low!";
            score = score - 1;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".msg").textContent = "Too High!"
            score = score - 1;
            document.querySelector(".score").textContent = score;
        }
    }

})
document.getElementById("again").addEventListener("click",()=>{
    secretNumber = Math.trunc(Math.random()*100 + 1);  
    score = 10;
    document.querySelector(".msg").textContent = "Starting The Game!!";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("guess").value ="";
    document.querySelector(".display").textContent = "?";
})