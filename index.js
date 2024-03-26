// Code your solutions in this file

function writeCards(namesArray, event) {
    // Initialize an empty array called "cards"
    let cards = [];
  
    // Use a for loop with a counter that starts at 0 and increments at the end of each loop
    for (let i = 0; i < namesArray.length; i++) {
      const name = namesArray[i];
     
      cards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
  
    return cards;
}
function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }

