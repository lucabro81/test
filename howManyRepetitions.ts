/**
 * return the number of items in the given array in which there's at least two chars repeated
 *
 * @param arr
 */
export const howManyRepetition = (arr: Array<string>): number =>
	arr.filter((str: string) => (new Set<string>(str)).size < str.length).length;