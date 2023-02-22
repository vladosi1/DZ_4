let num1 = prompt("Введите число");
let operator = prompt("Введите оператор '+' '-' '*' '/' ");
let num2 = prompt("Введите число");
let result;

if (operator == '+') {
	result = Number(num1) + Number(num2);
} else if (operator == '-') {
	result = num1 - num2;
} else if (operator == '*') {
	result = num1 * num2;
} else {
	result = num1 / num2;
}

alert(result);

