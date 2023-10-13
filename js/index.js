//Make our deck.
const deck = new DECK();
deck.getDeck(); //Call this so you can always draw cards from an unshuffled deck.

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const explanation = document.getElementById('explanation');
const alert = (message, type) => {
const wrapper = document.createElement('div');
wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
].join('');

alertPlaceholder.append(wrapper);
}

/* ASK BUTTON */
//Clear the user entry, but store the question as a value. This will be used later.
document.getElementById("askBtn").addEventListener("click", () => {
let question = document.getElementById("question");
document.getElementById("asked").innerHTML = `<p>${question.value}</p>`; //Save for later...
question.value = "";
});

/* SHUFFLE BUTTON */
//Call the shuffle method when the "Shuffle" button is pressed.
document.getElementById("shufBtn").addEventListener("click", () => {
document.getElementById("cardBack").classList.add("shuffle"); // Add an animation so the deck "shuffles".
deck._deck = []; //Empty this variable.
deck.getDeck(); //Re-assemble the deck.
deck.shuffle(); //Then shuffle it.
setTimeout(() => {
    document.getElementById("cardBack").classList.remove("shuffle");
}, 1001); //Remove the animation class so it can be re-applied when the button is clicked again.
console.log(deck._deck);
});

/* SIGNIFACTOR BUTTON */
//Pull the Signifactor when that button is clicked.
document.getElementById("sigBtn").addEventListener("click", () => {
//Trumps do not have a "Suit" keypair and vice versa. Determine which to use.
deck.suitTrumpM(0);
//Call the IMG and dump it into the span based on the top card of the deck.
document.getElementById("pos0").innerHTML =
    '<img src="cards/' +
    deck._deck[0].Place +
    "-" +
    deck.suitTrump +
    '.jpg" class="signifactor img-fluid">';
console.log("Signifactor", deck._deck[0]);
explanation.innerHTML = `<p><h2><a href="cards.html#${deck._deck[0].Place}-${deck.suitTrump}">${deck._deck[0].Place} - ${deck.suitTrump}</h2></a><br>
    </p>`;
});

/* COVER CARD BUTTON */
//Pull the Cover Card.
document.getElementById("coverBtn").addEventListener("click", () => {
if (document.getElementById('pos0').innerHTML === '') {
    alert('You need to pull a Signifactor first!','danger');
} else {
    //Trumps do not have a "Suit" keypair and vice versa. Determine which to use.
    deck.suitTrumpM(1);
    //Call the IMG and dump it into the span based on the top card of the deck.
    document.getElementById("pos0").innerHTML +=
    '<img src="cards/' +
    deck._deck[1].Place +
    "-" +
    deck.suitTrump +
    '.jpg" class="covers img-fluid">';
    console.log("Cover", deck._deck[1]);
    explanation.innerHTML += `<p><a href="cards.html#${deck._deck[1].Place}-${deck.suitTrump}">${deck._deck[1].Place} - ${deck.suitTrump}</a></p>`;
}
});

/* CROSS CARD BUTTON */
//Pull the Cross Card.
document.getElementById("crossBtn").addEventListener("click", () => {
if (document.getElementById('pos0').innerHTML === '') {
    alert('You need to pull a Signifactor first!','danger');
} else {
    //Trumps do not have a "Suit" keypair and vice versa. Determine which to use.
    deck.suitTrumpM(2);
    //Call the IMG and dump it into the span based on the top card of the deck.
    document.getElementById("pos0").innerHTML +=
    '<img src="cards/' +
    deck._deck[2].Place +
    "-" +
    deck.suitTrump +
    '.jpg" class="cross img-fluid">';
    console.log("Cross", deck._deck[2]);
    explanation.innerHTML += `<p><a href="cards.html#${deck._deck[2].Place}-${deck.suitTrump}">${deck._deck[2].Place} - ${deck.suitTrump}</a></p>`;
}
});

/* LAY SPREAD BUTTON */
//Pull the rest of the cards needed for the Spread using a for loop and dump them into the table. We don't do them one at a time because they are just pulled in order, no fancy CSS.
document.getElementById("laySpread").addEventListener("click", () => {
if (document.getElementById('pos0').innerHTML === ''){
    alert('You need to pull a Signifactor first!','danger');
} else { //Do the same thing as the others, but do it in a for loop to pull the other cards needed.
    for (i = 3; i < 11; i++) {
    deck.suitTrumpM(i);
    let position = "pos" + i.toString();
    document.getElementById(position).innerHTML =
        '<img src="cards/' +
        deck._deck[i].Place +
        "-" +
        deck.suitTrump +
        '.jpg" class="img-fluid">';
    console.log(position, deck._deck[i]);
    explanation.innerHTML += `<p><a href="cards.html#${deck._deck[i].Place}-${deck.suitTrump}">${deck._deck[i].Place} - ${deck.suitTrump}</a></p>`;
    }
}
});

/* CLEAR BUTTON */
//Clear everything!
document.getElementById("clear").addEventListener("click", () => {
for (i = 0; i < 11; i++) {
    let position = "pos" + i.toString();
    document.getElementById(position).innerHTML = "";
}
explanation.innerHTML = "";
});