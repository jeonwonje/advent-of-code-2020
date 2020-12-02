const fs = require('fs')

let input = fs.readFileSync('file.txt', 'utf8').split(/\r?\n/);

// Part 1
for (let a = 0; a < input.length; a++) {
	for (let b = 0; b < input.length; b++) {
		if (parseInt(input[a]) + parseInt(input[b]) === 2020) {
			console.log(input[a] * input[b])
		}
	}
}

// Part 2 
for (let a = 0; a < input.length; a++) {
	for (let b = 0; b < input.length; b++) {
		for (let c = 0; c < input.length; c++) {
			if (parseInt(input[a]) + parseInt(input[b]) + parseInt(input[c]) === 2020) {
				console.log(input[a] * input[b] * input[c])
			}
		}
	}
}
