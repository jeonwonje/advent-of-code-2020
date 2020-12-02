const fs = require('fs')

let input = fs.readFileSync('file.txt', 'utf8').split(/\r?\n/);
let numberInput, charInput, password, freq;
let a = 0, b = 0;

// Part 1
for (let i = 0; i < input.length; i++) {
	numberInput = input[i].split(' ')[0].split('-'); // Split each line into its constituent elements
	// Now, numberInput is an array containing 2 elements, the min/max char for each password
	charInput = input[i].split(' ')[1].slice(0,1).split('\n'); // Removes the colon in each line
	password = input[i].split(' ')[2].split('\n');
	freq = frequency(password[0], charInput[0]);
	if(freq >= parseInt(numberInput[0]) && freq <= parseInt(numberInput[1])){
		a++;
	}
}

console.log(a);

function frequency(string, word) {
	return string.split(word).length - 1;
}

// Part 2
for (let i = 0; i < input.length; i++) {
	numberInput = input[i].split(' ')[0].split('-'); // Split each line into its constituent elements
	// Now, numberInput is an array containing 2 elements, the min/max char for each password
	charInput = input[i].split(' ')[1].slice(0,1).split('\n'); // Removes the colon in each line
	password = input[i].split(' ')[2].split('\n');
	if (password[0].charAt(numberInput[0] - 1) === charInput[0] && password[0].charAt(numberInput[1] - 1) != charInput[0]) { // Checks for all valids
		b++; // If position 1 contains the number, position 2 doesnt
	} else if (password[0].charAt(numberInput[0] - 1) != charInput[0] && password[0].charAt(numberInput[1] - 1) === charInput[0]) {
		b++; // If position 2 contains the number, position 1 doesnt
	}

}

console.log(b)