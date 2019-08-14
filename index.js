//### Problem 1:
//Put the start of your program in a main function. Ask the user to enter a number to print.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.

function printer(number) {
    console.log(number)
}


let number = prompt("Enter a number.");

switch (number) {

    case "1":
        printer("1");
        break;

    case "2":
        printer("2");
        break;

    case "3":
        printer("3");
        break;

    case "4":
        printer("4");
        break;

    case "5":
        printer("5");
        break;
}


//### Problem 2:
//Put the start of your program in a main function. Ask the user to enter a 3 digit binary number.
//Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.

function twoPrinter(input) {
    console.log(input)
}
let input;

while(input!=='q') {
    input = prompt("Enter a number 1-5. Enter 'q' to quit.);

    switch (input) {

        case "q":
            break;
        case "1":
            twoPrinter('1');
            break;

        case "2":
            twoPrinter('10');
            break;

        case "3":
            twoPrinter('11');
            break;

        case "4":
            twoPrinter('100');
            break;

        case "5":
            twoPrinter('101');
            break;


    }
}

//  ### Problem 3:
//Put the start of your program in a main function. Create an attendance array.
// Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose. Repeat this five times.

//<strong>Challenge</strong>: Do the above program until the user enter's 'q'.
// Also, print and add to the array via a function call to the appropriate teacher/student/parent function.
