var number = Math.floor((Math.random() * 100) + 1);
document.write("Guess the number!<br><br>");
var loop = (0);
while (loop == 0) {
    var guess = prompt("What do you guess?");
    if (guess > number) {
        alert("Lower!");
    }
    if (guess < number) {
        alert("Higher!");
    }
    if (guess == number) {
        alert("Correct!");
        loop = (1);
        }
    if (guess > 100) {
        alert("Invalid choice")
    }
    if (guess < 1) {
        alert("Invalid choice")
    }
}
document.write("You were correct, the answer was ");
document.write(number);
document.write("!");
