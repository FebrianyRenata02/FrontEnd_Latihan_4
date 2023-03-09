const getResult = function () {
    let number = document.getElementById("inputNumber").value;
    let display = document.getElementById("display");
    console.log(number);

    if (number == 0) {
        display.innerHTML = "<div>" + "invalid Input" + "</div>";
    } else if (number % 3 == 0 && number % 5 == 0) {
        display.innerHTML = "<div>" + "FizzBuzz" + "</div>";
    } else if (number % 3 == 0) {
        display.innerHTML = "<div>" + "Fizz" + "</div>";
    } else if (number % 5 == 0) {
        display.innerHTML = "<div>" + "Buzz" + "</div>";
    } else {
        display.innerHTML = "<div>" + number + "</div>";
    }
}