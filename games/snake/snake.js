canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");




// Game variables
const boardWidth = 24;
const boardHeight = 20;

const frames = 2;

const tileWidth = canvas.width / boardWidth;
const tileHeight = canvas.height / boardHeight;

const backgroundColor = "#aaaaaa";

// Game state
var board = []
for (x = 0; x < boardWidth; x++) {
	board.push(new Array());
	for (y = 0; y < boardHeight; y++) {
		// Type: empty, food, head, body
		// Heading: north, east, south, west
		board[x][y] = {
			type: "empty",
			heading: "north",
			getColor: function() {
				switch(this.type){
					case "food":
						return "#ff0000";
					case "head":
						return "#00dd00";
					case "body":
						return "#00ff00";
					default:
						return backgroundColor;
				}
			}
		};
	}
}

var snake = {
	headLocation: [4, 6],
	bodyLength: 2,
	bodyPositions: [[3, 6], [2, 6]]
}

// Base game functions
function getHeadLocation() {
	for (x = 0; x < board.length(); x++) {
		for (y = 0; y < board[x].length(); y++) {
			if (board[x][y].type == "head"){
				return [x, y];
			}
		}
	}
	return [-1, -1];
}

function resetBoard() {
	// clear entire board
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBoard() {
	resetBoard();



	for (x = 0; x < boardWidth; x++){
		for (y = 0; y < boardHeight; y++){
			ctx.fillStyle = board[x][y].getColor();
			ctx.fillRect(x*tileWidth, y*tileWidth, tileWidth, tileHeight);
		}
	}
}


// Creates the starting body
board[2][2].type = "head";
board[2][3].type = "body";
board[2][4].type = "body";
board[2][5].type = "body";
board[3][5].type = "body";
board[4][5].type = "body";

drawBoard();

window.onkeypress = function(event) {
	console.log(event.keyCode);
	let headloc = getHeadLocation();
	switch (event.keyCode) {
		case 87: // W
		case 119: // w
			board[headloc[0]][headloc[1]].heading = "north";
			break;
		case 65: // A
		case 97: // a
			board[headloc[0]][headloc[1]].heading = "west";
			break;
		case 83: // S
		case 115: // s
			board[headloc[0]][headloc[1]].heading = "south";
			break;
		case 68: // D
		case 100: // d
			board[headloc[0]][headloc[1]].heading = "east";
			break;
	}
}

// Movement interval
window.setInterval(function(){
	let headloc = getHeadLocation()
	
}, 1000/frames);