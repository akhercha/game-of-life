/**
 * Class representing a grid.
 * 
 * A grid is represented by a double array of Cells objects, and a turn field
 * which represents the advancement stage of the game of life.
 * 
 * @author	aihe
 * @version	0.1
 */
class Grid
{
	/**
	 * Creates a Grid instance.
	 */
	constructor()
	{
		this.grid = new Array(GRID_HEIGHT);
		this.step = 0;
		for (let j = 0; j < GRID_HEIGHT; j++)
		{
			this.grid[j] = new Array(GRID_WIDTH);
			for (let i = 0; i < GRID_WIDTH; i++)
			{
				this.grid[j][i] = new Cell(i * CELL_LENGTH, j * CELL_LENGTH);
			}
		}
	}

	/**
	 * Returns the cell's (x;y) neighbors.
	 * @param		{number} x 
	 * @param		{number} y
	 * @returns		{number} neighbors
	 */
	get_neighbors(x, y)
	{
		let			neighbors;

		neighbors = 0;
		if (x > 0)
		{
			if (y > 0)
			{
				neighbors = this.grid[y - 1][x - 1].is_alive ? neighbors + 1
					: neighbors;
			}
			neighbors = this.grid[y][x - 1].is_alive ? neighbors + 1
				: neighbors;
			if (y < GRID_HEIGHT - 1)
			{
				neighbors = this.grid[y + 1][x - 1].is_alive ? neighbors + 1
					: neighbors;
			}
		}
		if (x < GRID_WIDTH - 1)
		{
			if (y > 0)
			{
				neighbors = this.grid[y - 1][x + 1].is_alive ? neighbors + 1
					: neighbors;
			}
			neighbors = this.grid[y][x + 1].is_alive ? neighbors + 1
				: neighbors;
			if (y < GRID_HEIGHT - 1)
			{
				neighbors = this.grid[y + 1][x + 1].is_alive ? neighbors + 1
					: neighbors;
			}
		}
		if (y > 0)
		{
			neighbors = this.grid[y - 1][x].is_alive ? neighbors + 1
				: neighbors;
		}
		if (y < GRID_HEIGHT - 1)
		{
			neighbors = this.grid[y + 1][x].is_alive ? neighbors + 1
			: neighbors;
		}
		return (neighbors);
	}

	/**
	 * Determines the next cell generation from the number of neighbors.
	 */
	next_state()
	{
		let			changes;

		changes = 0;
		for (let j = 0; j < GRID_HEIGHT; j++)
		{
			for (let i = 0; i < GRID_WIDTH; i++)
			{
				changes += this.grid[j][i].next_state(this.get_neighbors(i, j));
			}
		}
		if (changes > 0)
		{
			this.step++;
			this.next_state();
		}
	}

	/**
	 * Displays the grid on the Canvas.
	 */
	display()
	{
		for (let j = 0; j < GRID_HEIGHT; j++)
		{
			for (let i = 0; i < GRID_WIDTH; i++)
			{
				this.grid[j][i].display();
			}
		}
	}

	/**
	 * Modifies the cell at the mouse position.
	 * @param		{number} mouse_x 
	 * @param		{number} mouse_y 
	 */
	toggle_cell(mouse_x, mouse_y)
	{
		let			x;
		let			y;

		if ((typeof(mouse_x) === "number") && (typeof(mouse_y) === "number"))
		{
			x = Math.floor(mouse_x / 10);
			y = Math.floor(mouse_y / 10);
			if ((x >= 0 && x < GRID_WIDTH) && (y >= 0 && y < GRID_HEIGHT))
			{
				this.grid[y][x].is_alive = !(this.grid[y][x].is_alive);
			}
		}
	}	
}
