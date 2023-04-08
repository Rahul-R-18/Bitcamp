// JavaScript source code

let gridSize = 4
let grid = [[],[],[],[]]
let player = null


class Node {
	var data = 0;
	
	xPos = 0
	yPos = 0 

	//0-up 1-right 2-down 3-left
	let directions = [null, null, null, null]
	
	constructor(data, x, y) {
			
		this.data = data;
		xPos = x
		yPos = y
	}
}
	


class Path {
	var type = 0;
		
	constructor(num) {
		if (num == 0) {
			type="mud";
		} else if (num == 1) {
			type="reg";
		} else {
			type = "ice";
		}
	}			
}

class Player {
	var position = null

	constructor(defaultPos) {
		position = defaultPos
	}

	function canMove(direction) {
		return (position.directions[direction] != null)
	}
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        if (player.canMove(0)) {
			player.position = grid[yPos + 1][xPos]
		}
    }
    else if (e.keyCode == '40') {
        if (player.canMove(2)) {
			player.position = grid[yPos - 1][xPos]
		}
    }
    else if (e.keyCode == '37') {
		if (player.canMove(3)) {
			player.position = grid[yPos][xPos - 1]
		}
    }
    else if (e.keyCode == '39') {
       if (player.canMove(1)) {
			player.position = grid[yPos][xPos + 1]
		}
    }

}

function loadGrid() {
	
		
	//Initializing nodes
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize ; j++) {
			grid[i].push(new Node(Math.floor(Math.random() * 10), i, j))
		}
	}

	//Initializing vertical paths
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize - 1; j++) {
			grid[j][i].directions[2] = new Path(Math.floor(Math.random() * 3))
			grid[j + 1][i].directions[0] = grid[j][i].directions[2]
		}
	}

	//Initializing horizontal paths
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize - 1; j++) {
			grid[j][i].directions[1] = new Path(Math.floor(Math.random() * 3))
			grid[j][i].directions[3] = grid[j][i].directions[1]
		}
	}

	player = new Player(grid[0][0])
}
	
function main() {
	loadGrid();
}
	





