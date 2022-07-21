import { TestBuilder } from "./testBuilder";
import { howManyRepetition } from "./howManyRepetitions";
import { walkValidator } from "./walkValidator";

const testBuilder = new TestBuilder();

testBuilder
	.test(howManyRepetition)
	.with(["a","b","c"])
	.isEqualTo(0)
	.with(["a","b","cc"])
	.isEqualTo(1)
	.with(["ABC","deef","hi", "mnmn"])
	.isEqualTo(2)
	.with(["AABBCCDDDDD","123","xyz", "qwertt"])
	.isEqualTo(2)
	.with(["123a","1233","11", "tttttxxxxxzzzzz"])
	.isEqualTo(3)
	.run();

testBuilder
	.test(walkValidator)
	.with(["n","e","e","e","e","n","n","w","w","w","w","w","s","s","s","e"])
	.isEqualTo(false)
	.with(["n","n","n","e","e","e","e","e","s","s","w","w","w","w","w","s"])
	.isEqualTo(false)
	.with(["e","e","e","s","s","w","w","w","w","n","n","e"])
	.isEqualTo(false)
	.with(["s","s","e","e","n","n","n","e","e","e"])
	.isEqualTo(false)
	.with(["s","s","s","w","w","n","n","n","e","e"])
	.isEqualTo(true)
	.run();