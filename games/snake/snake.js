// Creating the canvas in DOM
gamearea = document.getElementById("game-area");
canvas = document.createElement("canvas");
gamearea.appendChild(canvas);

canvas.style.width = "100%";
canvas.style.height = "100%";

var ctx = canvas.getContext("2d");




// Game variables
const boardWidth = 24;
const boardHeight = 20;

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
					case "body":
						return "#00ff00";
					default:
						return backgroundColor;
				}
			}
		};
	}
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

	board[2][2].type = "head";
	board[2][3].type = "body";
	board[2][4].type = "body";
	board[2][5].type = "body";
	board[2][6].type = "body";

	for (x = 0; x < boardWidth; x++){
		for (y = 0; y < boardHeight; y++){
			ctx.fillStyle = board[x][y].getColor();
			ctx.fillRect(x*tileWidth, y*tileWidth, tileWidth, tileHeight);
		}
	}
}

drawBoard();