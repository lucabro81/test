export class TestBuilder {

	private fnDict: Record<string, { fn: Function, params: Array<Array<any>>, isEqual: Array<any> }> = {};
	private currFnName: string = "";
	private namesArr: Array<string> = [];

	constructor() {}

	/**
	 *
	 * @param fn
	 */
	test(fn: Function): TestBuilder {
		this.currFnName = fn.name;
		this.namesArr.push(fn.name);
		this.fnDict[fn.name] = {
			fn,
			params: [],
			isEqual: []
		}
		return this;
	}

	/**
	 *
	 * @param args
	 */
	with(...args: any[]): TestBuilder {
		this.fnDict[this.currFnName].params.push(args);
		return this
	}

	/**
	 *
	 * @param toValue
	 */
	isEqualTo(toValue: any): TestBuilder {
		this.fnDict[this.currFnName].isEqual.push(toValue);
		return this;
	}

	/**
	 *
	 */
	run(): void {
		this.namesArr.find((fnName: string) => {
			const obj = this.fnDict[fnName];
			console.log("\nTest", fnName);
			const longestParamsString = Math.max(...obj.params.map((param: Array<any>) => param.join(",").length));
			return obj.params.find((param: Array<any>, index: number) => {
				const value = obj.fn(...param);
				const isPassed = value === obj.isEqual[index];
				const paramstring = param.join(",");
				console.log("\twith:",
					`${paramstring}${Array.from({length: longestParamsString-paramstring.length}, () => " ").join("")}`,
					"is equal to:", obj.isEqual[index],
					"Passed:", `${isPassed ? 'YES' : `NO (returned ${value})`}`);
				return !isPassed;
			})
		})

		this.namesArr = [];
		this.currFnName = "";
		this.fnDict = {};
	}
}

