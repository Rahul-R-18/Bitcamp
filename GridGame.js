// JavaScript source code

let gridSize = 4
let grid = [[],[],[],[]]
let player = null
let dict = {"mud":3,"ice":1,"reg":2}
let countDownDate = new Date()
countDownDate.setSeconds(countDownDate.getSeconds() + 60)

let x = setInterval(function () {
    now = new Date()
    console.log(countDownDate.getSeconds() - now.getSeconds())
    if (countDownDate.getSeconds() - now.getSeconds() <= 0) {
        clearInterval(x)
        clearInterval(y)
    }
}, 1000)

class Node {
	data = 0
	
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
	position = new Node(5,0,0)

	constructor(defaultPos) {
		this.position = defaultPos
	}

	canMove(direction) {
		return (position.directions[direction] != null)
	}
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        if (player.canMove(0)) {
            countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[0])]);
            player.position = grid[yPos + 1][xPos]
            setTimeout(() => {  console.log("Moving Up"); }, 200);
            countDownDate.setSeconds(countDownDate.getSeconds()+player.position.data)
		}
    }
    else if (e.keyCode == '40') {
        if (player.canMove(2)) {
            countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[2])]);
            player.position = grid[yPos - 1][xPos]
            setTimeout(() => {  console.log("Moving Down"); }, 200);
            countDownDate.setSeconds(countDownDate.getSeconds()+player.position.data)
		}
    }
    else if (e.keyCode == '37') {
		if (player.canMove(3)) {
		    countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[1])]);
		    player.position = grid[yPos][xPos - 1]
		    setTimeout(() => {  console.log("Moving Left"); }, 200);
		    countDownDate.setSeconds(countDownDate.getSeconds()+player.position.data)
		}
    }
    else if (e.keyCode == '39') {
       if (player.canMove(1)) {
           countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[3])]);
           player.position = grid[yPos][xPos + 1]
           setTimeout(() => {  console.log("Moving Right"); }, 200);
           countDownDate.setSeconds(countDownDate.getSeconds()+player.position.data)
		}
    }

} 

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
	
loadGrid()

