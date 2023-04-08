// JavaScript source code

let gridSize = 4
let grid = [[],[],[],[]]
let player = null
let time = 60
let today = new Date()

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
	position = (0,0)

	constructor(defaultPos) {
		this.position = defaultPos
	}

	canMove(direction) {
		return (position.directions[direction] != null)
	}
	move(direction) {
	    if (canMove)
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

let countDownDate = new Date(today.getDate()).getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);	
