// For example: if strArr contains ['a,b,c,d', 'a,b,c,c,-B,d'] the output should return true because those keypresses
// produce the same printable string. The array given will not be empty. The keypresses will only contain letters
// from the alphabet and backspaces.
//
// Examples
// Input: ['a', 'b', 'c', 'd'], ['a', 'b', '-c', 'd', '-B', 'a', '-A', 'd']
// Output: true
// Input: ['c', 'a', 'r', 'd'], ['c', 'a', '-B', 'r', 'd']
// Output: false

const EquivalentKeypresses = (strArr1, strArr2) => {
	let arr1 = Array.from(new Set(strArr1.map(char => char.toLowerCase().replace(/\-/g, ''))));
	let arr2 = Array.from(new Set(strArr2.map(char => char.toLowerCase().replace(/\-/g, ''))));

	return arr1.toString() === arr2.toString();
}

console.log(EquivalentKeypresses(['a', 'b', 'c', 'd'], ['a', 'b', '-c', 'd', '-B', 'a', '-A', 'd']));
console.log(EquivalentKeypresses(['c', 'a', 'r', 'd'], ['c', 'a', '-B', 'r', 'd']));