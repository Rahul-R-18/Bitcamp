// JavaScript source code

let gridSize = 5
let grid = [[],[],[],[],[]]



class Node {
	var data;
		
	var up = null
	var down = null
	var left = null
	var right = null
	//0-up 1-right 2-down 3-left
	let directions = [null, null, null, null]
	
	constructor(data) {
			
		this.data = data;
			
	}
}
	


class Path {
	var type;
		
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

	function move() {

	}
}

function loadGrid() {
	
		
	//Initializing nodes
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize ; j++) {
			grid[i].push(new Node(Math.floor(Math.random() * 10)))
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
}
	
function main(String[] args) {
	loadGrid();
}
	





