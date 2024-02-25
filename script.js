class Player {
    constructor(color) {
        this.color = color;
        this.positions = Array(4).fill(0);
    }

    movePiece(pieceIndex, newPosition) {
        if (pieceIndex >= 0 && pieceIndex < this.positions.length) {
            this.positions[pieceIndex] = newPosition;
        } else {
            console.error("Invalid piece index.");
        }
    }

    display() {
        console.log(`${this.color}: ${this.positions.join(", ")}`);
    }
}

class Ludo {
    constructor() {
        this.players = [];
    }

    addPlayer(color) {
        if (this.players.length <= 4) {
            const newPlayer = new Player(color);
            this.players.push(newPlayer);
            return newPlayer;
        } else {
            console.error("Maximum number of players reached.");
            return null;
        }
    }

    display() {
        this.players.forEach(player => player.display());
        console.log("")
    }
}

function switchChance() {
    ludoGame.players.shift()
    ludoGame.players.push(currentPlayer)
    currentPlayer = ludoGame.players[0]
    return currentPlayer
}

function DiceRoll() {
    if (discFree) {
    roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText=roll
    currentRoll = roll
    discFree = false
    cdisk = document.getElementsByClassName(currentPlayer.color[0].toLowerCase())
    for (let i = 0; i < cdisk.length; i++) {
        cdisk[i].classList.add("active");
        call = "DiscChoose("+(i+1)+")"
        cdisk[i].setAttribute("onclick",call)
      }
    }
}

function DiscChoose(n) {
    currentPlayer.movePiece(n-1,currentRoll);
    
    discFree = true
    cdisk = document.getElementsByClassName(currentPlayer.color[0].toLowerCase())
    for (let i = 0; i < cdisk.length; i++) {
        cdisk[i].classList.remove("active");
        cdisk[i].removeAttribute("onclick");
      }
    ludoGame.display();
    if(currentRoll!=6){
        switchChance()
    }
}

const ludoGame = new Ludo();
const player1 = ludoGame.addPlayer("Red");
const player2 = ludoGame.addPlayer("Green");
const player3 = ludoGame.addPlayer("Yellow");
const player4 = ludoGame.addPlayer("Blue");
var currentPlayer = ludoGame.players[0]
var currentRoll = 0
var discFree = true

ludoGame.display();
