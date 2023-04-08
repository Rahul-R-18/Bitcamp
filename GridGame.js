// JavaScript source code

let gridSize = 4
let grid = [[],[],[],[]]
let player = null
let time = 60

class Node {
	data = 0;
	
	xPos = 0
	yPos = 0 

	//0-up 1-right 2-down 3-left
	directions = [null, null, null, null]
	
	constructor(d, x, y) {
			
		this.data = d
		this.xPos = x
		this.yPos = y
	}
}
	


class Path {
	type = 0;
		
	constructor(num) {
		if (num == 0) {
			this.type="mud";
		} else if (num == 1) {
			this.type="reg";
		} else {
			this.type = "ice";
		}
	}			
}

class Player {
	position = null

	constructor(defaultPos) {
		this.position = defaultPos
	}

	canMove(direction) {
		return (position.directions[direction] != null)
	}
}
/*
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

} */

function loadGrid() {
	
		
	//Initializing nodes
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize ; j++) {
			grid[i].push(new Node(Math.floor(Math.random() * 10)+1, i, j))
		}
	}

	//Initializing vertical paths
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize - 1; j++) {
			grid[j][i].directions[2] = new Path(Math.floor(Math.random() * 3)+1)
			grid[j + 1][i].directions[0] = grid[j][i].directions[2]
		}
	}
	
	for (let i=0; i < gridSize ; i++) {
	    for (let j=0; j < gridSize - 1; j++) {
	        console.log(grid[j][i].directions[2])
	        
	    }
	    console.log()
	}

	//Initializing horizontal paths
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize - 1; j++) {
			grid[j][i].directions[1] = new Path(Math.floor(Math.random() * 3)+1)
			grid[j][i].directions[3] = grid[j][i].directions[1]
		}
	}

	player = new Player(grid[0][0])
}
	
function main() {
	loadGrid();
}

main()	
