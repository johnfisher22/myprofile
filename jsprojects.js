
//Clear Screen
function clearScreen(){document.getElementById("stage").innerHTML = " ";}


//Choose your drink
function chooseDrink()
{ 
let response;
let favDrink = prompt("What's your favorite drink?").toLowerCase();
switch(favDrink) 
{
  case "coke":
    response = "Excellent choice! We have Coca-Cola";
    alert(response);
	    break;

  case "pepsi":
    response = "OOpps! We don't have Pepsi";
    alert(response);
    break;

  case "sprite":
    response = "Really? We don't have Sprite now";
    	alert(response);
    break;

  default:
    response = "Please check these drinks out!";
    alert(response);
}
vendingMachine();
}


//Function definition for purchasing from vending machine items
function vendingMachine() 
{
	
	let pick = prompt("Here are the drinks we got!\n" + "Enter 1. for Diet Coke\n" + "2. for Regular  Code\n" +
		"3. for Bottled Water\n" + "0. to exit");
	
	let itemQuantity = 0;
	let payment = 0;
	let balance = 0;
	let price = 0;

	do {																

	if (pick == 1 || pick == 2) 
		{
			
				itemQuantity = Number(prompt("How many cokes do you want ? "));
		
				if(Number.isNaN(itemQuantity)){return document.getElementById("stage").innerHTML = "Error has occurred!";}

						price = itemQuantity * 2;
						alert("Total price = $ " + price );

						payment = Number(prompt("Please enter payment amount"));
						if(Number.isNaN(payment)){return document.getElementById("stage").innerHTML = "Error has occurred!";} 
		
						alert("You entered: $" + payment);

				if (payment < price) 
					{								
					alert("Please complete your payment");
				
					balance = price - payment;

					alert("Your remaining payment is: $" + balance );
					vendingMachine();
					break;
						}	
				else if (payment > price) 
						{
						balance = payment - price;
						alert("Your balance is: $" + balance + ".  Thank you!");
						break;
						}
				else if(payment == price) 
						{ 
							alert("Thank you for your petronage");
							} 
				else 
						
						{
						alert("All payments must start from 1$");
						vendingMachine();
						break;
							}
					}
					

else if (pick == 3)
		{
			itemQuantity = Number(prompt("How many bottled water do you want ? "));
			if(Number.isNaN(itemQuantity)){return document.getElementById("stage").innerHTML = "Error has occurred!";}

			     price = itemQuantity * 2.50;
		 		alert("Total price = $ " + price);       

				payment = prompt("Enter payment amount");
				alert("You entered: $" + payment);

				if (payment < price) 
				{
				alert("Please complete your payment");

				balance = price - payment;

				alert("Your remaining payment is: $" + balance );
				vendingMachine();
				}

				else if (payment > price) 
				{

				balance = payment - price;
				alert("Please collect your balance : $" + balance + " Thank you!");
				break;
				}
				else
				{
					alert("All payments must start from 1$");
					vendingMachine();
					break;
					}
			}


else
		{

		document.getElementById("stage").innerHTML = "Error has occurred!";
		break;

		}

	} while (pick != 0);

	document.getElementById("stage").innerHTML = "You have closed this app!";

	
}




//Function definition for viewing accounts menu
function showAccountsMenu() 
{

	alert("1. Check balance\n"+ "2. Deposit\n" +
				"3. Withdraw\n" + "4. Exit");
					
}


 //Function definition for account transactions
 function accountTransactions() 
 {
	let option, balance;
	balance = Number(0);

	do {
		showAccountsMenu();

		let input = parseInt(prompt("Please select an option, 0 to 4"));
	
			option = input;
		
	switch (option) 
			{

		case 1:
			alert("Your balance is:  $" + balance );
			break;

		case 2:
			alert("Enter deposit amount: ");
			let depositAmount  = Number(prompt("Enter a deposit amount"));
			if(Number.isNaN(depositAmount))
			{return document.getElementById("stage").innerHTML = "Error has occurred!";}

			balance += depositAmount;
			break;

		case 3:
				alert("Enter the amount you want withdraw: ");
				let withdrawAmount = prompt("Enter amount you want to withdraw?");
				if(Number.isNaN(withdrawAmount))
				{return document.getElementById("stage").innerHTML = "Error has occurred!";}
						
		
				if (withdrawAmount <= balance)
					{
						balance -= withdrawAmount;
				
					}

				else 
					{
					alert("You don't have enough money in your account");
					}
					break;

		default:
				alert("Invalid entry. Quiting ?");
			}

	} 
	while (option != 4);
	document.getElementById("stage").innerHTML = "You have closed this app!";

}




//Function definition for viewing calculator menu
function calculatorMenu() {

	alert("Select operation\n" + "1. Addition \n" + "2. Subtraction \n" +
		"3. Multiplication \n" + "4. Division \n" + "5. Exponent \n" +
		"6. Squaroot \n" +	"7. to exit ");

}


//Function definition for using calculator
function useCalculator() {

	let selection;

	do {
		let num1 = Number(prompt("Enter first number"));		
		let num2 = Number(prompt("Enter second number"));
				
		if(Number.isNaN(num1) || Number.isNaN(num2)){
			document.getElementById("stage").innerHTML = "Error has occurred!";
			break;
		}

		calculatorMenu ();

		let number = Number(prompt("Select math operation"));

		selection = (number);

		switch (selection) {												//Switch statements decision flow for the calculator

		case 1:  alert("Anser is :  " + (num1 + num2) );
						break;

		case 2:  alert("Anser is :  " + (num1 - num2));
				break;

		case 3:  alert("Anser is :  " + (num1 * num2));
				break;

		case 4:  alert("Anser is :  " + (num1 / num2));
				break;

		case 5:  alert("Anser is :  " + Math.pow(num1, num2) );
				break;

		case 6:  alert("Squar root of num1 = " + Math.sqrt(num1) + " : Squar root of num2 = " + Math.sqrt(num2) );
				break;

		default:
				document.getElementById("stage").innerHTML = "Error has occurred!";
				break;
				}
				
} 
while (selection != 7 );
	alert("You are exiting this option!\n" + "Press enter");

}


//Function definition for playing even and odd number game
function isOddOrEvenNumber() {

	let number = Number(prompt("Enter a number"));

	if(Number.isNaN(number) || number <=0){
		document.getElementById("stage").innerHTML = "Error has occurred!";
		
	}

	else if (number % 2 == 0) {
		alert("This is even number");

	}

else{ 
	alert("This is odd number");

}

}


//Function definition for temperature conversion
function tempConversion() {

	let fahrenheit = Number(0);
	let celsius = Number(0);
	let option ;

	do {

		alert("Which temperature conversion do you want ?");
		let input = Number(prompt("1 to convert to Fahrenheit\n" + "2. to conver to Celsius\n" + "3. to exit\n"));
		option = input;

		if(Number.isNaN(option)){
			document.getElementById("stage").innerHTML = "Error has occurred!";
			break;
			}

	else if (option == 1) {	
													
			celsius = Number(prompt("Enter Celsius temperature"));
			
			if(Number.isNaN(celsius)){
				document.getElementById("stage").innerHTML = "Error has occurred!";
				break;
			}
			
				fahrenheit = (celsius * 9 / 5) + 32;
				alert("Fahrenheit temperature is : " + fahrenheit);
	
				}
				
	else if (option == 2) {
			fahrenheit = Number(prompt("Enter Fahrenheit temperature"));
			
				if(Number.isNaN(fahrenheit)){
				document.getElementById("stage").innerHTML = "Error has occurred!";
				break;
			}

			celsius = (fahrenheit - 32) *( 5 / 9);
			alert("Celsius temperature is : " + celsius);
		}

		else if (option == 3) {
			alert("You are exiting this program");
			break;
		}

		else {
		
			document.getElementById("stage").innerHTML = "Error has occurred!";

			}
	} 


	while (option != 3);
	alert("You exited this option!\n" + "Press enter or click ok");
}


//This function shows image
 function showImage(){

	const imageContainer = document.getElementById("stage");
	imageContainer.innerHTML = '<img src="rabbit.gif">';

 } 

