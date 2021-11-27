console.log("Hi, I am ");

console.log("Tusti ");

console.log("Gupta ");

var full_name = "Tusti ".concat("Gupta ");
console.log(full_name);

var full_sentence = "Hi, I am ".concat(full_name);
console.log(full_sentence);

var full_name_length = full_name.length;
console.log("Number of letters in full name = ".concat(full_name_length - 2));

var full_sentence_length = full_sentence.length;
console.log("Number of letters in full sentence = ".concat(full_sentence_length - 3));

var full_name_length_square_root = Math.round(Math.sqrt(full_name_length - 2));
console.log("Square Root of letters in full name = ".concat(full_name_length_square_root));

var full_sentence_length_square_root = Math.round(Math.sqrt(full_sentence_length - 3));
console.log("Square Root of letters in full sentence = ".concat(full_sentence_length_square_root));

var full_name_length_power = Math.round(Math.pow(full_name_length - 2,2));
console.log("Squared value of number of letters in full name = ".concat(full_name_length_power));

var full_sentence_length_power = Math.round(Math.pow(full_sentence_length - 3,2));
console.log("Squared value of number of letters in full sentence = ".concat(full_sentence_length_power));