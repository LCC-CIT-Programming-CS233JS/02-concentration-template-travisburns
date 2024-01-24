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
            let index = 0;
            for (let value = 0; value < values.length; value++){
                for (let suit = 0; suit < suits.length; suit ++) {
                    this.images[index] = "card" + values[value] + suits[suit] + ".jpg";
                    index++;
                }
            }
        }
        //do this yourself underneath the comment

         handleClick(index) {
            var index = this.id;
            var cardImage = imagePath + images[index];
            this.style.backgroundImage = 'url(' + cardImage + ')';
            disableCard(index);
            if (firstPick == -1) {
                firstPick = index;
            }
            else {
                secondPick = index;
                disableAllCards();
                setTimeout(checkCards, 2000);
            }
        }


        // assigns the handleclick function to the onclick event for all cards
// on the page.  All cards have the name attribute set to card.
// It also sets the cursor (part of the style) to 'pointer'
enableAllCards() {
    var cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = handleClick;
        cards[i].style.cursor = 'pointer';
    }
}

// enables (see enable all) only the cards whose backgroundImage
// style property is not 'none'
 enableAllRemainingCards() {
    const cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].style.backgroundImage != 'none') {
            cards[i].onclick = this.handleClick.bind(this.i);
            cards[i].style.cursor = 'pointer';
        }
    }
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
}

// create a variable called concentration
// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the concentration variable to an instance of Concentration


let concentration;
window.onload = () => { concentration = new Concentration}

