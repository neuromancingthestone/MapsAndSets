/* // To create an empty Set:
new Set();

//You can also pass in an iterable (like an array):
const bannedHashTags = new Set([ 'nofilter', 'justsaying', 'winning', 'yolo' ]);

// To add to a Set:
bannedHashTags.add('bestlife').add('selfie');

function filterHashTags(tags) {
	const bannedHashTags = [ 'nofilter', 'justsaying', 'winning', 'yolo' ];
	return tags.filter((tag) => !bannedHashTags.has(tag));
}

const susansTags = [ 'happymonday', 'yolo', 'winning', 'sunset' ];
filterHashTags(susansTags); //[ 'happymonday', 'sunset' ];

//Removing duplicates using a Set:
const ages = [ 45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45 ];
[ ...new Set(ages) ]; //create a new Set and then spread it back into an Array

// Iterating Sets:
for (let tag of bannedHashTags) {
	console.log('STOP USING:', tag);
}
// bannedHashTags.forEach((tag) => console.log('STOP USING:', tag));
 */

new Set([1,1,2,2,3,4]);
// Returns a set with no duplicates {1,2,3,4}

[...new Set("referee")].join("");
// Returns set array as a string that has no duplicates, so 'ref'

let arr = ['joe','andy','mary'];
let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// Returns a Map that has two entries in it
// an array of [1,2,3] as key, and true as value
// an array of [1,2,3] as key, and false as value

const hasDuplicate = arr => new Set(arr).size !== arr.length;

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

/* function isVowel(char){
	return "aeiou".includes(char);
}
 */
function vowelCount(str) {
	let vMap = new Map();
	for(let ch of str) {		
		let lowerCh = ch.toLowerCase();
		if("aeiou".includes(lowerCh)) {
			if(vMap.has(lowerCh))	vMap.set(lowerCh, vMap.get(lowerCh) + 1);			
			else 					vMap.set(lowerCh, 1);
		}
	}
	return vMap;
}