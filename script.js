const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreElement = document.getElementById("score");
const jumpBtn = document.getElementById("jumpBtn");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");
const startTitle = document.getElementById("start-title");
const gameArea = document.getElementById("game"); 

let score = 0;
let isPlaying = false;
let gameLoop;

function startGame() {
    isPlaying = true;
    score = 0;
    scoreElement.innerHTML = "0";
    
   
    startScreen.classList.remove("d-flex");
    startScreen.classList.add("d-none");
    
    
    gameArea.classList.add("running");
    
    
    cactus.style.animation = "none";
    setTimeout(() => {
        cactus.style.animation = "cactusMove 1.5s infinite linear";
    }, 10);

    
    gameLoop = setInterval(checkCollision, 20);
}

function gameOver() {
    isPlaying = false;
    clearInterval(gameLoop);
    
    
    gameArea.classList.remove("running");
    cactus.style.animation = "none"; 
    
    
    startTitle.innerText = "Game Over! Skor: " + Math.floor(score / 10);
    startBtn.innerText = "Main Lagi";
    
    
    startScreen.classList.remove("d-none");
    startScreen.classList.add("d-flex");
}

function jump() {
    if (!isPlaying) return; 
    
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 500);
    }
}

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    
    if (cactusLeft > 50 && cactusLeft < 90 && dinoTop >= 130) {
        gameOver();
    } else {
        score++;
        scoreElement.innerHTML = Math.floor(score / 10);
    }
}


startBtn.addEventListener("click", startGame);


jumpBtn.addEventListener("click", jump);


document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault(); 
        if (!isPlaying) {
            startGame(); 
        } else {
            jump(); 
        }
    }
});