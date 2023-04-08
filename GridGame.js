// JavaScript source code


	
function loadGrid() {
	let gridSize = 5
	let grid = [[],[],[],[],[]]
		
	//Initializing nodes
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize ; j++) {
			grid[i].push(new Node(Math.floor(Math.random() * 10)))
		}
	}

	//Initializing vertical paths
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize - 1; j++) {
			grid[j][i].down = new Path(Math.floor(Math.random() * 3))
			grid[j + 1][i].up = grid[j][i].down
		}
	}

	//Initializing horizontal paths
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize - 1; j++) {
			grid[i][j].right = new Path(Math.floor(Math.random() * 3))
			grid[i][j + 1].left = grid[i][j].right
		}
	}
}
	
function main(String[] args) {
	loadGrid();
}
	
class Player {
	var position = null

	constructor(defaultPos) {
		position = defaultPos
	}

	function move() {

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

class Node {
	var data;
		
	var up = null
	var down = null
	var left = null
	var right = null
		
	
	constructor(data) {
			
		this.data = data;
		if (colCount==4) {
			colCount=0;
			rowCount++;
		}
		this.row=rowCount;
		this.col=colCount;
			
	}
}


