// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var calcPrefix = function (digits) {
    return Number(cardNumber.slice(0,digits));
  };

  //Test for American Express
  if (cardNumber.length === 15 && (calcPrefix(2) === 34 || calcPrefix(2) === 37)) {
  	return 'American Express';
  }

  //Test for China UnionPay
  if (cardNumber.length >= 16 || cardNumber.length <= 19) {
    if ((calcPrefix(3) >= 624 && calcPrefix(3) <= 626) || (calcPrefix(4) >= 6282 && calcPrefix(4) <= 6288) || (calcPrefix(6) >= 622126 && calcPrefix(6) <= 622925)) {
      return 'China UnionPay';
    }
  }

  //Test for Diner's Club
  if (cardNumber.length === 14 && (calcPrefix(2) === 38 || calcPrefix(2) === 39)) {
  	return 'Diner\'s Club';
  }

  //Test for Discover
  if (cardNumber.length === 16 || cardNumber.length === 19) {
    if (calcPrefix(2) === 65 || calcPrefix(4) === 6011 || (calcPrefix(3) >= 644 && calcPrefix(3) <= 649)) {
      return 'Discover';
    }
  }

  //Test for Maestro
  if (cardNumber.length >= 12 && cardNumber.length <= 19) {
    if (calcPrefix(4) === 5018 || calcPrefix(4) === 5020 || calcPrefix(4) === 5038 || calcPrefix(4) === 6304) {
      return 'Maestro';
    }
  }  

  //Test for MasterCard
  if (cardNumber.length === 16 && (calcPrefix(2) >= 51 && calcPrefix(2) <= 55)) {
  	return 'MasterCard';
  }  

  //Test for Swift
  //This section of code will execute before Visa, so Swift will "win" in case of a conflict
  if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
    if (calcPrefix(4) === 4903 || calcPrefix(4) === 4905 || calcPrefix(4) === 4911 || calcPrefix(4) === 4936 || calcPrefix(6) === 564182 || calcPrefix(6) === 633110 || calcPrefix(4) === 6333 || calcPrefix(4) === 6759) {
      return 'Switch';
    }
  } 

  //Test for Visa
  if (calcPrefix(1) === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }  
}


