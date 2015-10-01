/*
ASSIGNMENT 3 PART 1

1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
*/

//var favoriteMovies = ["Crimson Tide", "The Matrix", "Lord of the Rings", "A Few Good Men", "Office Space"]
//console.log(favoriteMovies[1]);

/*
2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
*/

//var movies = [];
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//console.log(movies[0]);

/*
3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
*/

//var movies = [];
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//
//movies.splice(2,5);
//movies[2] = "Terminator 2";
//movies.push("Lord of the Rings", "A Few Good Men", "Office Space");
//window.console.log(movies.length);
//window.console.log(movies);

/*
4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
*/

//var movies = [];
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//delete movies[0];
//console.log(movies);

/*
5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
*/

//var movies = [];
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var i = 0; i < movies.length; i++) {
//    console.log(movies[i]);
//}

/*
6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
*/

//var movies = [];
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var index in movies) {
//    console.log(movies[index]);
//}

/*
7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
*/

//var movies = [];
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var index in movies) {
//    movies.sort();
//    console.log(movies[index]);
//}

/*
8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
*/

//var movies = [];                              //var movies from #7
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var index in movies) {
//    movies.sort();
//}                                             //end var movies from #7
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Speed 2"
//leastFavMovies[2] = "Transformers 2";
//
//
//console.log("Movies I like:\n\n");
//for (var index in movies) {
//    window.console.log(movies[index]);
//}
//console.log("\n\nMovies I regret watching:\n\n");
//for (var index in leastFavMovies) {
//    window.console.log(leastFavMovies[index]);
//}

/*
9. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
*/

//var movies = [];                               //var movies and leastFavMovies from #8
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var index in movies) {
//    movies.sort();
//}                                              
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Speed 2"
//leastFavMovies[2] = "Transformers 2";           //end var movies and leastFavMovies from #8
//
//movies = movies.concat(leastFavMovies);
//
//for (var index in movies) {
//    movies.sort();
//    movies.reverse();
//    window.console.log(movies[index]);
//}

/*
10. Return just the last item in the array and display it within the console window.
*/

//var movies = [];                               //var movies from #9
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var index in movies) {
//    movies.sort();
//}                                              
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Speed 2"
//leastFavMovies[2] = "Transformers 2";           
//
//movies = movies.concat(leastFavMovies);
//
//for (var index in movies) {
//    movies.sort();
//    movies.reverse();
//}                                               //end var movies from #9


//var movies = movies.pop();
//console.log(movies);

/*
11. Remove the previous method and this time return just the first item in the array and display it within the console window.
*/

//var movies = [];                               //var movies from #9
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var index in movies) {
//    movies.sort();
//}                                              
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Speed 2"
//leastFavMovies[2] = "Transformers 2";           
//
//movies = movies.concat(leastFavMovies);
//
//for (var index in movies) {
//    movies.sort();
//    movies.reverse();
//}                                               //end var movies from #9
//
//var movies = movies.shift();
//console.log(movies);

/*
12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
*/

//var movies = [];                                //var movies from #9
//movies[0] = "Crimson Tide";
//movies[1] = "The Matrix";
//movies[2] = "Lord of the Rings";
//movies[3] = "A Few Good Men";
//movies[4] = "Office Space";
//movies[5] = "Crouching Tiger Hidden Dragon";
//movies[6] = "Terminator 2";
//for (var index in movies) {
//    movies.sort();
//}                                              
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Speed 2"
//leastFavMovies[2] = "Transformers 2";           
//movies = movies.concat(leastFavMovies);         //end var movies from #9
//
//
//var movies1 = movies.slice(0,1);
//var movies2 = movies.slice(1,2);
//var movies3 = movies.slice(4,5);
//var moviesNew = movies1.concat(movies2);
//var moviesNew = moviesNew.concat(movies3);
//
//for (var index in moviesNew) {
//    console.log(index);
//}
//
//window.console.log(movies);

/*
13. Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
*/

//var employee1 = [];
//var employee2 = [];
//var employees = [];
//
//employee1["employeeid"] = 2200;
//employee1["name"] = "John";
//employee1["title"] = "Manager";
//employee1["isCurrent"] = true;
//
//employee2["employeeid"] = 2201;
//employee2["name"] = "Jane";
//employee2["title"] = "Associate";
//employee2["isCurrent"] = true;
//
//employees.push(employee1);
//employees.push(employee2);

//console.log(employees[1]["name"]);

/*
14. Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
*/

//for (var index in employees) {
//    console.log(employees[index]["name"]);
//}

/*
15. And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
*/

//var employee3 = [];
//employee3["employeeid"] = 2202;
//employee3["name"] = "Jennifer";
//employee3["title"] = "President";
//employee3["isCurrent"] = false;
//
//employees.push(employee3);
//
//for (var index in employees) {
//    if (employees[index]["isCurrent"] == true) {
//        window.console.log(employees[index]["name"]);
//    }
//}

/*
16. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:

movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
*/

//var movies = [["Lord of the Rings", 1], ["Terminator 2", 2], ["Crimson Tide", 3], ["The Matrix", 4], ["Office Space", 5]];
//
//for (var i = 0; i < movies.length; i++) {
//    var movieNames = movies[i].filter(function(item) {
//        return typeof item == "string";
//    });
//    window.console.log(movieNames.toString());
//}

/*
Practice with Functions (5 points)

1. Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
*/

//function displayMessage(name) {
//    window.console.log(name);
//}
//
//displayMessage("Bob");

//var displayMessage = function (testValue) {
//    window.console.log(testValue);
//};
//displayMessage("Cat");

/*
2. Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
*/

//function calculate(x,y) {
//    window.console.log(x % y);
//}
//calculate(5,2);

/*
3. Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY
*/

//var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
//var showEmployee = function (i) {
//    window.console.log("Employees:\n\n");
//    for (var index in i) {
//        window.console.log(i[index]);
//    }
//}
//showEmployee(employees);

/*
Assignment 3, Part 2
	
The Rock, Paper, Scissors Game (10 points)
*/

//var userChoice = window.prompt("Please choose paper, rock, or scissors.");
//var computerChoice = Math.random();
//
//if (computerChoice < 0.333) {
//    computerChoice = "paper";
//} else if (computerChoice < 0.667) {
//    computerChoice = "rock";
//} else if (computerChoice <= 1.000) {
//    computerChoice = "scissors";
//}
//
//if (userChoice !== "paper" && userChoice !== "rock" && userChoice !== "scissors") {
//    window.alert("Sorry, you did not enter a valid choice.");
//} else if (userChoice === "paper" && computerChoice === "rock") {
//    window.alert("You chose: " + userChoice + ".\nComputer chose: " + computerChoice + ".\n\n" + userChoice + " covers " + computerChoice + "! You win!");
//} else if (userChoice === "paper" && computerChoice === "scissors") {
//    window.alert("You chose: " + userChoice + ".\nComputer chose: " + computerChoice + ".\n\n" + computerChoice + " cuts " + userChoice + "! You lose!");
//} else if (userChoice === "rock" && computerChoice === "scissors") {
//    window.alert("You chose: " + userChoice + ".\nComputer chose: " + computerChoice + ".\n\n" + userChoice + " destroys " + computerChoice + "! You win!");
//} else if (userChoice === "rock" && computerChoice === "paper") {
//    window.alert("You chose: " + userChoice + ".\nComputer chose: " + computerChoice + ".\n\n" + computerChoice + " covers " + userChoice + "! You lose!");
//} else if (userChoice === "scissors" && computerChoice === "paper") {
//    window.alert("You chose: " + userChoice + ".\nComputer chose: " + computerChoice + ".\n\n" + userChoice + " cuts " + computerChoice + "! You win!");
//} else if (userChoice === "scissors" && computerChoice === "rock") {
//    window.alert("You chose: " + userChoice + ".\nComputer chose: " + computerChoice + ".\n\n" + computerChoice + " destroys " + userChoice + "! You lose!");
//} else {
//    window.alert("You chose: " + userChoice + ".\nComputer chose: " + computerChoice + ".\n\n" + "It's a tie!");
//}

/*
The Basic Calculator (10 points)
*/

//var numberOne = window.prompt("Enter a first number.");
//var numberTwo = window.prompt("Enter a second number.");
//var userChoice = window.prompt("Enter an operation to perform: add, subtract, mulitply, or divide.");
//
//function calculate(numberOne, numberTwo, userChoice) {
//    numberOne = (Math.abs(numberOne));
//    numberTwo = (Math.abs(numberTwo));
//    var check = Number.isInteger(numberOne);
//    var check2 = Number.isInteger(numberTwo);
//    if (check === false || check2 === false) {
//        window.alert("Sorry but you did not enter a valid number");
//        window.location.reload();
//    } else switch (userChoice) {
//    case "add":
//        window.alert(numberOne + " + " + numberTwo + " = " + (numberOne += numberTwo));
//        break;
//    case "subtract":
//        window.alert(numberOne + " - " + numberTwo + " = " + (numberOne -= numberTwo));
//        break;
//    case "multiply":
//        window.alert(numberOne + " * " + numberTwo + " = " + (numberOne *= numberTwo));
//        break;
//    case "divide":
//        window.alert(numberOne + " / " + numberTwo + " = " + (numberOne /= numberTwo));
//        break;
//    default:
//        window.alert("Sorry but you did not enter a valid operation.\n\nPlease enter add, subtract, mulitply, or divide only.");
//        window.location.reload();
//    }
//}
//calculate(numberOne, numberTwo, userChoice);

/*
Death by JavaScript (4 points each for 20 points total)

1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

Sample Data and Output
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
*/

//function order(str) {
//    str = window.prompt("Please enter a word: ");
//    var strOrder = str.split("");
//    strOrder.sort();
//    window.console.log(strOrder.join(""));
//}
//order();

/*
2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
*/

//function uppercase(str) {
//    str = window.prompt("Please enter a phrase.");
//    var strUpper = str.split(" ");
//    var output = [];
//    for (var i = 0; i < strUpper.length; i++) {
//        var firstLetter = strUpper[i].charAt(0).toUpperCase();
//        var remainder =  strUpper[i].slice(1);
//        output[i] = firstLetter + remainder;
//    }
//        window.console.log(output.join(" "));
//}
//uppercase();

/*
3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

Sample Data and Output
Example string: 'The quick brown fox' 
Expected Output: 5
*/

//function findVowel(str) {
//    str = window.prompt("Please enter a phrase.");
//    var vowelMatch = str.match(/[aeiou]/gi);
//    window.console.log(vowelMatch.length);
//}
//findVowel();

/*
4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
*/


/*
5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
*/

//function Longest_Country_Name(str) {
//    str = window.prompt("Please enter a list of countries.");
//    var countryList = str.split(" ");
//    var longest = 0;
//    var country;
//    for (var i = 0; i < countryList.length; i++) {
//        if (longest < countryList[i].length) {
//            longest = countryList[i].length;
//            country = countryList[i];
//        }
//    }
//    window.console.log(country);
//}
//Longest_Country_Name();
