// Find the first recurring character in the given string!
//
// A variation of this problem: find the first NON-recurring character. This variation problem and many others
// are covered in my Udemy course, 11 Essential Coding Interview Questions:
//

const arr1 = ['A', 'B', 'C', 'A'];
const arr2 = ['B', 'C', 'A', 'B', 'A', 'A'];
const arr3 = ['A', 'B', 'C'];
const arr4 = ['A', 'B', 'C', 'C', 'C', 'D'];

const searchFRecurring = (arr) => {
	let counts = {};
	arr.map(item => counts[item] ? counts[item]++ : (counts[item] = 1));
	return Object.keys(counts).filter(item => { return counts[item] > 1; })[0];
}

console.log(searchFRecurring(arr1));
console.log(searchFRecurring(arr2));
console.log(searchFRecurring(arr3));
console.log(searchFRecurring(arr4));