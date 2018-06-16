/**
 * Class representing a cell.
 * 
 * It is represented by its x and y position and its "is_alive" state.
 * 
 * @author	aihe
 * @version	1.0
 */
class Cell
{
	/**
	 * Creates a cell instance if the given parameters are valid.
	 * The "is_alive" boolean field is by default on true.
	 * @param		{number} x 
	 * @param 		{number} y 
	 */
	constructor(x, y)
	{
		if (this.are_args_valid(x, y))
		{
			this.x = x;
			this.y = y;
		}
		else
		{
			this.x = 0;
			this.y = 0;
		}
		this.is_alive = true;
	}

	/**
	 * Check if the arguments x and y are valid.
	 * @param		{number} x
	 * @param		{number} y
	 * @returns		{boolean}
	 */
	are_args_valid(x, y)
	{
		return ((typeof(x) === "number") && (x >= 0 && x < CANVAS_WIDTH)
			&& (typeof(y) === "number") && (y >= 0 && y < CANVAS_HEIGHT));
	}

	/**
	 * Displays the cell on the canvas if it's alive.
	 */
	display()
	{
		if (this.is_alive)
		{
			fill(CELLS_COLOR);
			noStroke();
			rect(this.x, this.y, CELL_LENGTH, CELL_LENGTH);
		}
	}

	set x(x)
	{
		if ((typeof(x) === "number") && (x >= 0 && x < CANVAS_WIDTH))
		{
			return (this._x = x);
		}
	}

	set y(y)
	{
		if ((typeof(y) === "number") && (y >= 0 && y < CANVAS_HEIGHT))
		{
			return (this._y = y);
		}	
	}

	set is_alive(is_alive)
	{
		if (typeof(is_alive) === "boolean")
		{
			return (this._is_alive = is_alive);
		}
	}

	get x()
	{
		return (this._x);
	}

	get y()
	{
		return (this._y);
	}

	get is_alive()
	{
		return (this._is_alive);
	}
}
