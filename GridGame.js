// JavaScript source code

let gridSize = 4
let grid = [[],[],[],[]]
let player = null
let dict = {"mud":2,"ice":0,"reg":1}
let color_dict = {"mud":"brown","ice":"lightblue","reg":"grey"}
let countDownDate = new Date()
countDownDate.setSeconds(countDownDate.getSeconds() + 60)

let xPosition = 0;
let yPosition = 0;

const grayBorders = document.querySelectorAll('.border.layer1, .border.layer2, .border.layer3, .border.layer4');

let x = setInterval(function () {
    now = new Date()
    if (countDownDate.getSeconds() - now.getSeconds() <= 0) {
        clearInterval(x)
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
	elementName = ""
		
	constructor(num, name) {
		if (num === 0) {
			this.type="ice";
		} else if (num === 1) {
			this.type="reg";
		} else {
			this.type = "mud";
		}

		this.elementName = name
	}			
}

class Player {
	position = null
	

	constructor(defaultPos) {
		this.position = defaultPos
	}

	canMove(direction) {
		console.log(this.position)
		console.log(direction)
		return (this.position.directions[direction] !== null)
	}
}

window.addEventListener("keydown", checkKey);

function checkKey(event) {
	const speed = 315
	switch (event.key) {
		case "ArrowUp":
			
			if (player.canMove(0)) {

				countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[0])]);
				countDownDate.setSeconds(countDownDate.getSeconds()+ player.position.data)
				player.position = grid[player.position.yPos - 1][player.position.xPos]
				yPosition -= speed;
				dummy_pos = "up"
			}
			break;
		case "ArrowDown":
			if (player.canMove(2)) {

				countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[2])]);
				countDownDate.setSeconds(countDownDate.getSeconds()+player.position.data)
				player.position = grid[player.position.yPos + 1][player.position.xPos]
				yPosition += speed;
				dummy_pos = "down"
			}
			
			break;
		case "ArrowLeft":
			if (player.canMove(3)) {
				countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[1])]);
				countDownDate.setSeconds(countDownDate.getSeconds()+ player.position.data)
				player.position = grid[player.position.yPos][player.position.xPos - 1]
				xPosition -= speed;
				dummy_pos = "left"
			}
			
			break;
		case "ArrowRight":
			if (player.canMove(1)) {
				countDownDate.setSeconds(countDownDate.getSeconds() - dict[(player.position.directions[3])]);
				countDownDate.setSeconds(countDownDate.getSeconds()+player.position.data)
				player.position = grid[player.position.yPos][player.position.xPos + 1]
				xPosition += speed;
				dummy_pos = "right"
			 }
			
			break;
		default:
			break;
	}
	sprite.style.top = yPosition + "px";
	sprite.style.left = xPosition + "px";

} 

function loadGrid() {
	
		
	//Initializing nodes
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize ; j++) {
			grid[i].push(new Node(Math.floor(Math.random() * 10) + 1, j, i))
		}
	}
	
	counter = 0
	layerCounter = 1
	//Initializing vertical paths
	for (let i = 0; i < gridSize - 1; i++) {
		for (let j = 0; j < gridSize ; j++) {
			grid[i][j].directions[2] = new Path(Math.floor(Math.random() * 3), 
				(".sideborder.sidelayer" + layerCounter + ".rec1" + counter))
			counter += 1
			console.log(grid[i][j].directions[2].elementName)

			grid[i + 1][j].directions[0] = grid[i][j].directions[2]

			document.querySelector(grid[i][j].directions[2].elementName).style.backgroundColor = 
				color_dict[grid[i][j].directions[2].type]
		}

		layerCounter += 1
	}
	
	for (let i=0; i < gridSize ; i++) {
	    for (let j=0; j < gridSize ; j++) {
	        console.log(grid[j][i].xPos + " " + grid[j][i].yPos)
	        
	    }
	    console.log()
	}

	counter = 0
	layerCounter = 1

	//Initializing horizontal paths
	for (let i = 0; i < gridSize ; i++) {
		for (let j = 0; j < gridSize - 1; j++) {
			grid[i][j].directions[1] = new Path(Math.floor(Math.random() * 3), 
				(".border.layer"+ layerCounter + ".rec0" + counter))
			counter += 1
			console.log(grid[i][j].directions[1].elementName)

			grid[i][j + 1].directions[3] = grid[i][j].directions[1]

			document.querySelector(grid[i][j].directions[1].elementName).style.backgroundColor = 
				color_dict[grid[i][j].directions[1].type]
		}

		layerCounter += 1
	}

	player = new Player(grid[0][0])

	console.log(grid)
}

console.log(document.querySelector(".border.layer4.rec09").style)
loadGrid()
