/*
 * A basic library for creating a tarot deck and doing various things to it like shuffling or
 * pulling cards in certain orders or quanitites to be placed in spreads. Eventually I would
 * also like to incorporate some sort of wiki-like functionality or allow the cards pulled in
 * spreads to be hovered over and linked to their relevant passages in A.E. Waite's Illustrated
 * Key of the Tarot.
 */

class DECK {
  constructor() {
    this._deck = [];

    this.suitTrump = "";

    this.majorArcana = [
      { Place: "0", Trump: "Fool", Value: 15 },
      { Place: "I", Trump: "Magician", Value: 16 },
      { Place: "II", Trump: "HighPriestess", Value: 17 },
      { Place: "III", Trump: "Empress", Value: 18 },
      { Place: "IV", Trump: "Emperor", Value: 19 },
      { Place: "V", Trump: "Heirophant", Value: 20 },
      { Place: "VI", Trump: "Lovers", Value: 21 },
      { Place: "VII", Trump: "Chariot", Value: 22 },
      { Place: "VIII", Trump: "Strength", Value: 23 },
      { Place: "IX", Trump: "Hermit", Value: 24 },
      { Place: "X", Trump: "WheelOfFortune", Value: 25 },
      { Place: "XI", Trump: "Justice", Value: 26 },
      { Place: "XII", Trump: "HangedMan", Value: 27 },
      { Place: "XIII", Trump: "Death", Value: 28 },
      { Place: "XIV", Trump: "Temperance", Value: 29 },
      { Place: "XV", Trump: "Devil", Value: 30 },
      { Place: "XVI", Trump: "Tower", Value: 31 },
      { Place: "XVII", Trump: "Star", Value: 32 },
      { Place: "XVIII", Trump: "Moon", Value: 33 },
      { Place: "XIX", Trump: "Sun", Value: 34 },
      { Place: "XX", Trump: "Judgement", Value: 35 },
      { Place: "XXI", Trump: "World", Value: 36 },
    ];

    this.minorPlaces = [
      "Ace",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "Page",
      "Knight",
      "Queen",
      "King",
    ];

    this.suits = ["Cups", "Swords", "Wands", "Pentacles"];
  }
  //Method for building a deck from the card arrays.
  getDeck() {
    for (let i = 0; i < this.majorArcana.length; i++) {
      this._deck.push(this.majorArcana[i]);
    }
    for (let i = 0; i < this.suits.length; i++) {
      for (let x = 0; x < this.minorPlaces.length; x++) {
        let minorArcana = {
          Place: this.minorPlaces[x],
          Suit: this.suits[i],
        };
        this._deck.push(minorArcana);
      }
    }
    //Let's assign a value to the minor arcana so that we can compare them again the Major Arcana.
    for (let i = 22; i < this._deck.length; i++) {
      switch (this._deck[i].Place) {
        case "Ace":
          this._deck[i].Value = 1;
          break;
        case "II":
          this._deck[i].Value = 2;
          break;
        case "III":
          this._deck[i].Value = 3;
          break;
        case "IV":
          this._deck[i].Value = 4;
          break;
        case "V":
          this._deck[i].Value = 5;
          break;
        case "VI":
          this._deck[i].Value = 6;
          break;
        case "VII":
          this._deck[i].Value = 7;
          break;
        case "VIII":
          this._deck[i].Value = 8;
          break;
        case "IX":
          this._deck[i].Value = 9;
          break;
        case "X":
          this._deck[i].Value = 10;
          break;
        case "Page":
          this._deck[i].Value = 11;
          break;
        case "Knight":
          this._deck[i].Value = 12;
          break;
        case "Queen":
          this._deck[i].Value = 13;
          break;
        case "King":
          this._deck[i].Value = 14;
          break;
      }
    }
    return this._deck;
  }
  //Method for shuffling the cards.
  shuffle() {
    for (let i = 0; i < Math.floor(Math.random() * 10000); i++) {
      let one = Math.floor(Math.random() * this._deck.length);
      let two = Math.floor(Math.random() * this._deck.length);
      let three = this._deck[one];
      this._deck[one] = this._deck[two];
      this._deck[two] = three;
    }
    return this._deck;
  }
  //Method to split the deck in half.
  splitDeck() {
    let half = Math.ceil(this._deck.length) / 2;
    return (
      (this.firstHalf = this._deck.slice(0, half)),
      (this.secondHalf = this._deck.slice(half, this._deck.length))
    );
  }
  //Method for pulling the right keypair when interpolating the object properties elsewhere.
  suitTrumpM(i) {
    if (this._deck[i].Value >= 1 && this._deck[i].Value <= 14) {
      this.suitTrump = this._deck[i].Suit;
    } else {
      this.suitTrump = this._deck[i].Trump;
    }
  }
}