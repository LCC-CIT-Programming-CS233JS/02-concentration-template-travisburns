// Create a class called Concentration.

class Concentration
{

    constructor() {
        // the folder where your card images are stored
     this.imagePath = 'Cards/';
    // an array that stores the images for each card
    this.images = Array(20).fill(null);
    //the index of the first card picked by the user
    this.firstPick = -1;
    //the index of the second card picked by the user
    this.secondPick = -1;
    //statistics about this "round"
    this.matches = 0;
    this.tries = 0;

    this.showMatches = this.showMatches.bind(this);
    this.enableAllCards = this.enableAllCards.bind(this);
    this.enableAllRemainingCards = this.enableAllRemainingCards.bind(this);
    this.checkCards = this.checkCards.bind(this);
    this.disableAllCards = this.disableAllCards.bind(this);
    this.isMatch = this.isMatch.bind(this);     

    this.init();


    }
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables to replace the global variables
        -   Bind the class to each of the following methods
        -       
        -   All of the functionality of init will happen in the constructor ... call init.
    */
         init()
        {
            this.fillImages();
            //this.shuffleImages();
            this.showMatches();
            this.enableAllCards();
            this.showAllBacks();
        }

         fillImages() {
            const values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
            const suits = ['h', 's'];
            const index = 0;
            for (let value = 0; value < values.length; value++){
                for (let suit = 0; suit < suits.length; suit ++) {
                    this.images[index] = "card" + values[value] + suits[suit] + ".jpg";
                    this.index++;
                }
            }
        }
        //do this yourself underneath the comment

         handleClick(index) {
           
            const cardImage = this.imagePath + this.images[index];
            const card = document.getElementById(index);
            card.style.backgroundImage = 'url(' + cardImage + ')';
            this.disableCard(index);
            if (this.firstPick == -1) {
                this.firstPick = index;
            }
            else {
                this.secondPick = index;
                this.disableAllCards();
                setTimeout(this.checkCards, 2000);
            }
        }


        // assigns the handleclick function to the onclick event for all cards
// on the page.  All cards have the name attribute set to card.
// It also sets the cursor (part of the style) to 'pointer'
enableAllCards() {
    var cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = this.handleClick.bind(this, i);
        cards[i].style.cursor = 'pointer';
    }
}

// enables (see enable all) only the cards whose backgroundImage
// style property is not 'none'
 enableAllRemainingCards() {
    const cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].style.backgroundImage != 'none') {
            cards[i].onclick = this.handleClick.bind(this, i);
            cards[i].style.cursor = 'pointer';
        }
    }
}


// shows the number of matches and tries in the status element on the page
 showMatches() {
    const status = document.getElementById("status");
    if (this.matches < 10)
        status.innerHTML = 'Matches: ' + this.matches + " Tries: " + this.tries;
    else
        status.innerHTML = "Congratulations!  You found all 10 matches in " + this.tries + " tries!";   
}
    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
        
        THREE OF THE METHODS CHANGE A LITTLE
        -   handleClick will now have a parameter, index
            -   remove the declaration / assignment of the local var index
        -   enableAllCards (and enableAllRemainingCards) have to pass the index to handleClick
            -   the line of code that calls bind must now pass both this and an index
            -   before: cards[i].onclick = this.handleClick.bind(this);
            -   should be: cards[i].onclick = this.handleClick.bind(this, i);
    */


             checkCards() {
                // increment the number of tries
                tries++;
                if (this.isMatch() == true) {
                    this.matches++;
                    removeCard(this.firstPick);
                    removeCard(this.secondPick);
                    if (this.matches < 10) {
                        enableAllRemainingCards();
                    }
                }
                else {
                    this.showBack(this.firstPick);
                    this.showBack(this.secondPick);
                    this.enableAllRemainingCards();
                }
                this.showMatches();
                this.firstPick = -1;
                this.secondPick = -1;
            }        
            
            

       // disable all of the cards
 disableAllCards() {
    for (var i = 0; i < this.images.length; i++)
        this.disableCard(i);
}     

// determines if the images in firstPick and secondPick are a match
// 2 cards are a match if they have the same value
// cardvs.jpg is the pattern for card file names
 isMatch() {
    if (this.images[this.firstPick].substr(4, 1) == this.images[this.secondPick].substr(4, 1))
        return true;
    else
        return false;
}


// shows the back for all cards
// calls showBack in the body of a for loop
  showAllBacks() {
    const cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        this.showBack(i);
    }    
}

// shows the back of one card based on it's index
// each card has an id attribute set to it's index in the html page
// the backgroundImage (style) is set to the url of the image
// for a card back to "show the back"
    showBack(index) {
    const backImage = this.imagePath + 'black_back.jpg';
    const card = document.getElementById(index);
    card.style.backgroundImage = 'url(' + backImage + ')';
}

}

// create a variable called concentration
// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the concentration variable to an instance of Concentration


let concentration;
window.onload = () => { concentration = new Concentration}

