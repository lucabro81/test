type DirectionType = "n" | "e" | "s" | "w";

/**
 * return true if the path is shorter or equal then 10 minutes and if you are able to return to the start
 *
 * @param directions
 * @param maxTravelTime
 */
export const walkValidator = (directions: Array<DirectionType>, maxTravelTime = 10): boolean => {

	// too much time
	if (directions.length > maxTravelTime) {
		return false
	}

	// directions are two perpendicular axis and if for every route there's an opposite are needed only two values
	// to indicate whether you are approaching or moving away from the start
	const directionMap = {
		n: 1,
		e: 1,
		s: -1,
		w: -1
	}

	// if the reduce function return 0 we've returned to the start safe and sound
	return directions.reduce((acc: number, direction: DirectionType) => {
		acc += directionMap[direction];
		return acc;
	}, 0) === 0
}