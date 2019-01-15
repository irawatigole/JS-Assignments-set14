// A clerk works at a movie theater where each ticket costs $25. There is a line of people waiting to buy tickets, and each one has a single $100, $50, or $25 note. The clerk wants to sell a ticket to every person in the line. For each input, can she sell a ticket to everyone and give change if she starts with no money and has to go through the line in order? If so, your function should return "YES." If not, it should return "NO."

// Write a function called canSellTickets based on the above scenario. Note that for any person in line, the clerk does not know the values of all future bills. The clerk simply tries to make change using whatever she has at the time and favors getting rid of larger notes first.

// Examples:

// canSellTickets([]); // "YES"
// canSellTickets([25]); // "YES"
// canSellTickets([50]); // "NO"
// canSellTickets([100]); // "NO"
// canSellTickets([25, 50]); // "YES"
// canSellTickets([25, 100]); // "NO"
// canSellTickets([25, 25, 25, 25, 50, 100]); // "YES"
// canSellTickets([25, 25, 50, 100]); // "YES"
// canSellTickets([25, 25, 25, 100]); // "YES"
// canSellTickets([25, 50, 50, 25]); // "NO"
// canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 50, 100]); // "YES"
// canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 100, 100]); // "NO


function canSellTickets(peopleInLine) {
    var total25bill = 0;
    var total50bill = 0;
    var total100bill = 0;
    // if (peopleInLine.length == 0){
    //     return 'NO'
    // }
    for (var i = 0; i < peopleInLine.length; i++) {   
      if (peopleInLine[i] == 25) {
          total25bill += 1;
      } else if (peopleInLine[i] == 50) {
          if (total25bill >= 1) {
              total25bill -=1; //gives back 1 25$ bill 
              total50bill += 1;   
          } else {  
              return "NO";
          }
      } else if (peopleInLine[i] == 100) { 
          if (total50bill >= 1 && total25bill >= 1){
              total25bill -=1; //gives back 1 25$ bill 
              total50bill -=1; //gives back 1 50$ bill 
              total100bill += 1;
          } else if (total25bill >= 3) {
              total25bill -=3; //gives back 3 25$ bill 
            total100bill += 1;  
          }
          else { 
            return "NO";
          }           
      }
    }
     return "Yes";
  }
  console.log(canSellTickets([])); //No
  console.log(canSellTickets([25]));// Yes 
  console.log(canSellTickets([50]));// No
  console.log(canSellTickets([100]));// No
  console.log(canSellTickets([25, 50])); // Yes
  console.log(canSellTickets([25, 100]));//No
   console.log(canSellTickets([25, 25, 25, 25, 50, 100])); // Yes
   console.log(canSellTickets([25, 25, 50, 100])); // Yes
  console.log(canSellTickets([25, 25, 25, 100])); // Yes
  console.log(canSellTickets([25, 50, 50, 25])); //No
  console.log(canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 50, 100])); // Yes
console.log(canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 100, 100])); // No