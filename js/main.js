let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");


num1 = Number(num1);
num2 = Number(num2);


alert("Пользователь ввёл число " + num1 + " а также число " + num2 + ". Давайте посмотрим на результат:\n\n" +
      num1 + "+" + num2 + "=" + (num1 + num2) + "\n" +
      num1 + "-" + num2 + "=" + (num1 - num2) + "\n" +
      num1 + "*" + num2 + "=" + (num1 * num2) + "\n" +
      num1 + "/" + num2 + "=" + (num1 / num2));
