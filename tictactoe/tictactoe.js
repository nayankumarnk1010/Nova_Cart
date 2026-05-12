let music = new Audio("Assets/music.mp3");
let gameoverSound = new Audio("Assets/gameover.mp3");
let ting = new Audio("Assets/ting.mp3");

let turn = "X";
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}
document.addEventListener("click", () => {
    music.play();
}, { once: true });

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
music.play();
    wins.forEach(e => {
        if (
            boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
            boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML &&
            boxtext[e[0]].innerHTML !== ""
        ) {
            document.querySelector(".info").innerHTML =
                boxtext[e[0]].innerHTML + " Won!";

            isgameover = true;
            gameoverSound.play();

            e.forEach(index => {
                document.getElementsByClassName("divbox")[index].style.backgroundColor ="green";
            });

            document.querySelector(".imgbox img").style.width = "200px";
        }
    });
};

let boxes = document.getElementsByClassName("divbox");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");

    element.addEventListener("click", () => {
        if (boxtext.innerHTML === "" && !isgameover) {
            boxtext.innerHTML = turn;
            ting.play();

            turn = changeTurn();
            checkWin();

            if (!isgameover) {
                document.querySelector(".info").innerHTML =
                    "Turn for: " + turn;
            }
        }
    });
});

document.querySelector(".reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");

    boxtexts.forEach(e => {
        e.innerHTML = "";
    });

    let boxes = document.querySelectorAll(".divbox");
    boxes.forEach(e => {
        e.style.backgroundColor = "";
    });
    music.pause();
    turn = "X";
    isgameover = false;
    document.querySelector(".info").innerHTML = "Turn for: X";
    document.querySelector(".imgbox img").style.width = "0px";
});