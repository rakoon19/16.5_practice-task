let original = [1, 2, 3];

let [...copyofOriginal] = original;
// let copyofOriginal = original;


copyofOriginal[0] = 99;

console.log(original);
console.log(copyofOriginal);
