const fs = require('fs')

let input = fs.readFileSync('file.txt', 'utf8').split(/\r?\n/);
let f = 0, a = 0;
let temp = ''

// Part 1 and Part 2 combined
function traverse(xIncrement, yIncrement) {
	for (let i = 0; i < input.length; i+=yIncrement) {
		temp = input[i].repeat(i + 1);
		if (temp[f] == '#') {
			a++;
		}
		f+=xIncrement;
	}
	return a;
}

console.log(traverse(1,2)); // Just input your increment values here