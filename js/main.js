// prompt : user first name

var n1 = prompt("Welcome, Please Enter your First Name");
// prompt : user last name
var n2 = prompt("Last Name");
// prompt : age (years)
var ay= prompt("Your Current Age", "years");
// alert : Welcome, list user full name (p1 + " " + p2)
alert("Welcome, "+ n1 + " " + n2 + ", you're not too old ..." + "\nLets see how old you are in months and days")
// write to doc : users age in months, or age in days

document.write ("You are "+ ay*12 + " months or\n", ay*365 + " days old");
