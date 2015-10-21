function StartGame(){
    var number = Math.floor((Math.random() * 100) + 1);
document.write("Guess the number!   ");
var count = (0);
var loop = (0);
while (loop == 0) {
    var guess = prompt("What do you guess? Choose a number from 1 to 100.");
    if (guess == null) {
        loop = (1);
        document.write("You canceled the game.")
    }
    else {
        if (guess == number) {
            count = (count+1)
        alert("Correct!");
        loop = (1);
        document.getElementById("result").innerHTML = "You were correct, the answer was ";
        document.getElementById("result").innerHTML = number;
        document.getElementById("result").innerHTML = "!<br>";
        document.getElementById("result").innerHTML = "You guessed ";
        document.getElementById("result").innerHTML = count;
        document.getElementById("result").innerHTML = " times!"
        }
    else {
        if (guess % 1 != 0) {
            alert("Invalid choice, you must choose a number from 1 to 100!");
        }
            else {
        if (guess > number && guess < 101) {
            count = (count+1)
            alert("Lower!");
        }
        else {
            if (guess < number && guess > 0) {
            count = (count+1)
                alert("Higher!");
            }
            else {
                if (guess > 100) {
                    alert("Invalid choice, you must choose a number from 1 to 100!")
                }
                else {
                    if (guess < 1) {
                        alert("Invalid choice, you must choose a number from 1 to 100!")
                    }
                    else {
                        alert("Invalid choice, you must choose a number from 1 to 100!")
                    }
                }
            }
        }
    }
            }
        }
    }
}
