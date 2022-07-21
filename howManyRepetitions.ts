/**
 * return the number of items in the given array in which there's at least two chars repeated
 *
 * @param arr
 */
export const howManyRepetition = (arr: Array<string>): number => {

	// dictionary that count for every char the repetition for that char for every string in the array
	let strDict: Record<string, number>;

	return arr.reduce((acc: number, str: string) => {
		strDict = {};

		// every string needs to be converted into an array
		str.split("").find((char: string) => {
			if (!strDict[char]) {
				strDict[char] = 0;
			}
			// there're at least 2 repetition for that char?
			if (++strDict[char] === 2) {
				acc++; // if so take count for that item
				return true;
			}
			return false;
		});

		return acc;
	}, 0)
}