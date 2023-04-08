// JavaScript source code

public class Game {
	
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
		/*
		for(let i = 0;i<5;i++) {
				grid.add(new ArrayList<Node<Integer>>());
				for (int j=0;j<5;j++) {
					Integer integer = r.nextInt(15)+1;
					Node<Integer> x = new Node(integer);
					grid.get(i).add(x);
				}
		}
		for (int i=0;i<5;i++) {
			for (int j=0;j<5;j++) {
				System.out.println(grid.get(i).get(j).data);
				
			}
			System.out.println();
		}
		
		for (int i=0;i<4;i++) {
			paths.add(new ArrayList<Path>());
			for (int j=0;j<3;j++) {
				paths.get(i).add(new Path(grid.get(i).get(j),grid.get(i).get(j+1),r.nextInt(3)));
			}
		}
		
		for (int i=0;i<3;i++) {
			paths.add(new ArrayList<Path>());
			for (int j=0;j<4;j++) {
				paths.get(i).add(new Path(grid.get(i).get(j),grid.get(i+1).get(j),r.nextInt(3)));
			}
		}
		
		System.out.println("Horizontal\n");
		for (int i=0;i<4;i++) {
			for (int j=0;j<3;j++) {
				System.out.println(paths.get(i).get(j).type);
				
			}
			System.out.println();
		}
		
		System.out.println("Vertical\n");
		for (int i=0;i<3;i++) {
			for (int j=0;j<4;j++) {
				System.out.println(paths.get(i).get(j).type);
				
			}
			System.out.println();
		}
		*/
	}
	
	function main(String[] args) {
		loadGrid();
	}
	
	class Player {
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
}

