var val = document.getElementById('screen');

addValue = function(input) {
	val.value += input;

	if(input === 'c') {
		val.value = '';
	}
};

backspace = function() {
	var number = val.value;
	var newNumber = number.substring(0, number.length - 1);
	val.value = newNumber;
};

answer = function() {
	var expression = eval(val.value);
	val.value = expression;
};