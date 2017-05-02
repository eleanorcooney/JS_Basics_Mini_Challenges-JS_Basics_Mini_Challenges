
// Problem 1

var n = 4;
var m = 5; {
  console.log(n + m);
} 

var s = (4,3,2);
var t = (1,2,3); {
  console.log(s + t);
} 


// Problem 2

var bands = ["Depeche Mode", "Whitest Boy Alive", "Ratatat", "Miike Snow"]; {
  console.log(bands[3]);
  console.log(bands[1]);
}


// Problem 3

var n = 11;

if (n <= 100) {
  console.log(n + " is less than 100");
} else {
  console.log(n + " is greater than 100");
}


// Problem 4

function nickName(someName) {
  return("Welcome " + someName);
}
console.log(nickName("Tobinbaby"));


// Problem 5

function openDooralert(doorNumber) {
  if (doorNumber === 1) {
     return ("You've entered door #1! Your prize is a juicer");
  } else if (doorNumber === 2) {
    return ("You've entered door #2! Your prize is a recliner");
  } else if (doorNumber === 3) {
    return "You've entered door #3! Your prize is trip to the Poconos!)";
  } else {
    return "Please select a door";
  }
}

console.log(openDooralert(2));
console.log(openDooralert(3));
console.log(openDooralert("prize"));

