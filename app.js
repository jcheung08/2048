var arr = document.getElementsByClassName("element");

function moveRight() {
    var validMove = false;
    var temp = false;
    var k;
    var score = document.getElementById("score");
    for (var i = 14; i > 0; i = i - 4) {
        temp = false;
        for (var j = i; j >= i-2; j--){
            if (arr[j].innerHTML !== ""){
                k = j;
                while (k < (i+1) && (parseInt(arr[k+1].innerHTML) === parseInt(arr[k].innerHTML) || arr[k+1].innerHTML === "")) {
                    if (parseInt(arr[k+1].innerHTML) === parseInt(arr[k].innerHTML) && temp === false) {
                        arr[k+1].innerHTML = parseInt(arr[k+1].innerHTML) + parseInt(arr[k].innerHTML);
                        score.innerHTML = parseInt(arr[k+1].innerHTML) + parseInt(score.innerHTML);
                        arr[k].innerHTML = "";
                        validMove = true;
                        temp = true;
                    } else if (parseInt(arr[k+1].innerHTML) === parseInt(arr[k].innerHTML) && temp === true) {
                        temp = false;
                    } else if (arr[k+1].innerHTML === "") {
                      arr[k+1].innerHTML = parseInt(arr[k].innerHTML);
                      arr[k].innerHTML = "";
                      validMove = true;
                    }
                    k++;
                }
            }
        }
    }
    if (validMove) {
      generateRandomBlock();
    }
}

function moveLeft(){
    var validMove = false;
    var temp = false;
    var k;
    var score = document.getElementById("score");
    for(var i = 13; i > 0; i-=4){
        temp = false;
        for (var j = i; j <= i+2; j++){
            if (arr[j].innerHTML !== "") {
                k = j;
                while (k > (i - (i%4)) && (parseInt(arr[k-1].innerHTML) === parseInt(arr[k].innerHTML)
                || arr[k-1].innerHTML === "")) {
                    if (parseInt(arr[k-1].innerHTML) === parseInt(arr[k].innerHTML) && temp === false ){
                        arr[k-1].innerHTML = parseInt(arr[k-1].innerHTML) + parseInt(arr[k].innerHTML);
                        arr[k].innerHTML = "";
                        validMove = true;
                        temp = true;
                        score.innerHTML = parseInt(arr[k-1].innerHTML)+parseInt(score.innerHTML);
                    } else if (parseInt(arr[k-1].innerHTML) === parseInt(arr[k].innerHTML) && temp === true){
                      temp = false;
                    } else if (arr[k-1].innerHTML === ""){
                      arr[k-1].innerHTML = parseInt(arr[k].innerHTML);
                      arr[k].innerHTML = "";
                      validMove = true;
                    }
                    k--;
                }
            }
        }
    }
    if (validMove) {
      generateRandomBlock();
    }
}

function moveDown() {
    var validMove = false;
    var temp = false;
    var k;
    var score = document.getElementById("score");
    for(var i = 11; i>7; i--){
        temp = false;
        for (var j = i; j >= 0; j=j-4){
            if (arr[j].innerHTML !== ""){
                k = j;
                while (k<12 && (parseInt(arr[k+4].innerHTML) === parseInt(arr[k].innerHTML)
                || arr[k+4].innerHTML === "")){
                    if (parseInt(arr[k+4].innerHTML) === parseInt(arr[k].innerHTML) && temp === false){
                        arr[k+4].innerHTML = parseInt(arr[k+4].innerHTML) + parseInt(arr[k].innerHTML);
                        arr[k].innerHTML = "";
                        validMove = true;
                        temp = true;
                        score.innerHTML = parseInt(arr[k+4].innerHTML) + parseInt(score.innerHTML);
                    } else if (parseInt(arr[k+4].innerHTML) === parseInt(arr[k].innerHTML) && temp === true ){
                      temp === false;
                    } else if (arr[k+4].innerHTML === ""){
                        arr[k+4].innerHTML = parseInt(arr[k].innerHTML);
                        arr[k].innerHTML= "";
                        validMove = true;
                    }
                    k = k + 4;
                }
            }
        }
    }
    if (validMove) {
      generateRandomBlock();
    }
}

function moveUp() {
    var validMove = false;
    var temp = false;
    var k;
    var score = document.getElementById("score");
    for(var i = 7; i > 3; i--){
        temp = false;
        for (var j = i; j < i + 9; j = j + 4){
            if (arr[j].innerHTML !== ""){
                k = j;
                while(k >= i && (parseInt(arr[k-4].innerHTML) === parseInt(arr[k].innerHTML)
                || arr[k-4].innerHTML === "")){
                    if (parseInt(arr[k-4].innerHTML) === parseInt(arr[k].innerHTML) && temp === false) {
                        arr[k-4].innerHTML = parseInt(arr[k-4].innerHTML) + parseInt(arr[k].innerHTML);
                        arr[k].innerHTML = "";
                        validMove = true;
                        temp = true;
                        score.innerHTML = parseInt(arr[k-4].innerHTML) + parseInt(score.innerHTML);
                    } else if (parseInt(arr[k-4].innerHTML) === parseInt(arr[k].innerHTML) && temp === true ){
                      temp === false;
                    } else if (arr[k-4].innerHTML === ""){
                        arr[k-4].innerHTML = parseInt(arr[k].innerHTML);
                        arr[k].innerHTML = "";
                        validMove = true;
                    }
                    k = k - 4;
                }
            }
        }
    }
    if (validMove) {
      generateRandomBlock();
    }
}

//90% chance a 2 will spawn, 10% chance a 4 will spawn
function generateRandomBlock(){
  checkForWin();
  var randomSpot = Math.floor(Math.random()*16);
  if (arr[randomSpot].innerHTML === "") {
    var randomNum = Math.floor(Math.random()*100);
    if (randomNum < 89) {
      arr[randomSpot].innerHTML = 2;
    } else {
      arr[randomSpot].innerHTML = 4;
    }

    var full = true;
    for (var i = 0; i < 16; i++) {
      if (arr[i].innerHTML === "") {
        full = false;
      }
    }
    if (full) {
      checkForLoss();
    }
  } else {
    generateRandomBlock();
  }
}

function checkForLoss() {
    var noMoves = true;

    if (arr[0].innerHTML === arr[1].innerHTML || arr[0].innerHTML === arr[4].innerHTML ||
        arr[1].innerHTML === arr[2].innerHTML || arr[1].innerHTML === arr[5].innerHTML ||
        arr[2].innerHTML === arr[3].innerHTML || arr[2].innerHTML === arr[6].innerHTML ||
        arr[3].innerHTML === arr[7].innerHTML || arr[4].innerHTML === arr[5].innerHTML ||
        arr[4].innerHTML === arr[8].innerHTML || arr[5].innerHTML === arr[6].innerHTML ||
        arr[5].innerHTML === arr[9].innerHTML || arr[6].innerHTML === arr[7].innerHTML ||
        arr[6].innerHTML === arr[10].innerHTML || arr[7].innerHTML === arr[11].innerHTML ||
        arr[8].innerHTML === arr[9].innerHTML || arr[8].innerHTML === arr[12].innerHTML ||
        arr[9].innerHTML === arr[10].innerHTML || arr[9].innerHTML === arr[13].innerHTML ||
        arr[10].innerHTML === arr[11].innerHTML || arr[10].innerHTML === arr[14].innerHTML ||
        arr[11].innerHTML === arr[15].innerHTML || arr[12].innerHTML === arr[13].innerHTML ||
        arr[13].innerHTML === arr[14].innerHTML || arr[14].innerHTML === arr[15].innerHTML) {

          noMoves = false;

    }

    if (noMoves) {
      alert("You Lose");
      reset();
    }
}

function checkForWin() {
  for (var i = 0; i < 16; i++) {
    if (parseInt(arr[i].innerHTML) === 2048) {
      alert("You Win!");
      reset();
    }
  }
}

function init(){
    var splash = document.getElementById("splash");
    splash.style.display = "block";
    var arr = document.getElementsByClassName("element");
    for (var i = 0; i < 16; i++){
        arr[i].innerHTML = "";
    }
    var control = document.getElementById("control");
    control.style.display = "block";
    var score = document.getElementById("score");
    score.innerHTML = 0;
}

function pause() {
    var pause = document.getElementById("pause");
    pause.style.display = "block";
    var control = document.getElementById("control");
    control.style.display = "none";
}

function reset() {
    var pause = document.getElementById("pause");
    pause.style.display = "none";
    init();
}

function start(){
  var splash = document.getElementById("splash");
  var game = document.getElementById("game");
  splash.style.display = "none";
  game.style.display = "block";
  generateRandomBlock();
  generateRandomBlock();
}

function resume() {
    var pause = document.getElementById("pause");
    pause.style.display = "none";
    var control = document.getElementById("control");
    control.style.display = "block";
}

document.addEventListener('keyup', control);
function control(e) {
    if (e.keyCode === 39) {
        moveRight();
    } else if (e.keyCode === 37) {
        moveLeft();
    } else if (e.keyCode === 38) {
        moveUp();
    } else if (e.keyCode === 40) {
        moveDown();
    }
}
