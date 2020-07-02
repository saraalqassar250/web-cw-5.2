
let food = prompt('pick your favourite food') 
switch(food){
    case "1":
      console.log ("You've picked pizza!"
      );
      break;
    case "2":
      console.log ("You've picked burger!" );
      break;
    case "3":
      console.log ("you've picked french fries");
      break;
    default:
     console.log ("You've picked Candy.");
    }



     let numbe_one = parseInt(prompt('enter your first number'));
     let number_two= parseInt(prompt('enter your second number'))
     let operation= parseInt(prompt("Choose one of the operations"))

     
switch(operation) {
    case "+":
      console.log (number_one+ number_two) ;
      break;
    case "-":
        console.log(number_one-number_two);
      break;
    case "*":
     console.log(number_one*number_two);
      break;
      case"/":
      console.log(number_one/number_two);
    default:
      console.log("done")
}

let age= prompt("Enter your age.") 
switch(age) {
    case "age<6":
      console.log (school) ;
      break;
    case "age<=17":
        console.log(highschool);
      break;
      case"age<25":
      console.log(work);
    default:
      console.log("done")
}