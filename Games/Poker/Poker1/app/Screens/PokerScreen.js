import React, { Component } from 'react'
import { Dimensions, Text, View, StyleSheet, Button, Image, List, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation';
//import CardImages from './app/CardImages'
//import cardDeck from './cards'
import Buttons  from '../Buttons/buttons'
const newCards = require('../CardImages/newcards');

//import cardDeck from './app/CardImages';
export default class PokerScreen extends Component {
    constructor(props){
        super(props);


        this.masterDeck = this.createDeck();
        this.state = {
            cardImages: newCards.getCards(),
            
            deckDisplay: true,
            nHeight: 0,
            nWidth: 0,
            twoCardsPlayerOne: null,
            twoCardsPlayerTwo: null,
            PlayerOneChips: 5000,
            PlayerTwoChips: 5000,
            gamePot: 0,
            twoRender: null,
            communityCards: null,
            gamePlaying: null,
            bettingRound: 0,
            dealerButton: 1,
            


        }
 }

    //componentDidMount = () => {
    //  this.shuffleDeck()
   // };
    
// Creates a deck filled with 52 cards using 2 nested for loops!!! it also lets the cardimg = the name of the card using a template literal (``)
  createDeck = () => {
        const suits = ['club','diamond','heart','spade'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

        let deck = [];
        let counter = 0;
        for (i = 0; i < values.length; i++){
            for(j = 0; j < suits.length; j++){
                let cardimg = `../CardImages/${values[i]}_of_${suits[j]}.png`

//console.log(cardimg)
                let card = {index: counter, Value: values[i], Suit: suits[j],
                    cardImage: null
                };
                deck.push(card);
                counter++;
            }
        }
        return deck;
    }

   shuffleDeck = () => {
     // unpacks this.state.masterdeck (the deck of 52 cards) into the variable newDeck
     // Shuffles said deck, 1000 times per click of the button (down below)
     // this then sets the state of masterDeck from the unshuffled deck, to the shuffled deck!
    var newDeck = [...this.masterDeck];

        for(var i = 0; i < 1000; i++){
            var location1 = Math.floor((Math.random() * newDeck.length));
            var location2 = Math.floor((Math.random() * newDeck.length));

            var card1obj = newDeck[location1];
            var card2obj = newDeck[location2];

            let card = newDeck[location1]
            newDeck[location1] = newDeck[location2];
            newDeck[location2] = card;

        }
        this.masterDeck = newDeck;


    }
// This is a function that takes in a number and returns a certain number of cards, if i wanted 2 cards, i would say returnNumber(2),
// in this case, as seen below we are putting in 4 cards and then slicing the first two to be player 1's cards, and slicing the second 2 to be the 2nd players cards.
    returnNumber = (num) => {
      let returnArray = [...this.masterDeck.slice(0, num)];
      this.setState({
          masterDeck: [...this.masterDeck.slice(num)]
      })
      return returnArray;
    }

    getTwoCards = (card) => {
     var playerCards = this.returnNumber(4);

     this.setState({
            twoCardsPlayerOne: playerCards.slice(0,2),
            twoCardsPlayerTwo: playerCards.slice(2,4)
        })
    }

    createCards = (card) => {
        return (
            <View key={card.index}>
                <TouchableHighlight onPress={() => this.setState({deckDisplay: true, twoRender: null})}>
                    <Image source={this.state.cardImages[card.index]} style={{margin: 4, height: 62, width: 46}} resizeMode='stretch'/>
                </TouchableHighlight>
            </View>


        )
     }




    getFinalCards = (num) => {
        if (this.state.communityCards) {
            this.setState({
                 communityCards: [...this.state.communityCards, ...this.returnNumber(num)]
           });
        }
        else {
            this.setState({
                communityCards: [...this.returnNumber(num)]
          });


        }
    }

    //Sets some style settings on first render - solution to images not appearing
    newSetLayout(nE) {

        if (this.state.nHeight == 0) {
            let nHeight = parseInt(nE.nativeEvent.layout.height);
            let nWidth = parseInt(nE.nativeEvent.layout.width);

            this.setState({nHeight: nHeight, nWidth: nWidth})
        }
    }
    /// THIS IS SIMPLY TO SHOW HOW TO ACCESS THE DATA OF PLAYERS CARDS! this.state.twoCardsPlayerOne[0].Value (the value of the first card from player one)
    startGame = (playone, playtwo) => {
        this.shuffleDeck();
        this.getTwoCards();
        
       // console.log(playone + playtwo)
       // console.log((playone[0].Value) + ' ' + (playone[0].Suit) + ' ' + (playone[1].Value) + ' ' + (playone[1].Suit) )
       // console.log((playtwo[0].Value) + ' ' + (playtwo[0].Suit) + ' ' + (playtwo[1].Value) + ' ' + (playtwo[1].Suit) )
    }

    render() {
        //console.log(this.state.cardImages[Math.floor(Math.random()*52)])
//        console.log(this.state.masterDeck)
        return (

        <View  style={{flex: 1}}>
            <View style={{flex: 4, margin: 3, borderWidth: 1, flexDirection: 'row', borderColor: 'black', justifyContent: 'center', alignItems: 'center', flexGrow: 2.5}}>
            {(this.state.twoCardsPlayerOne) ?
                        this.state.twoCardsPlayerOne.map((card) => {
                          return  this.createCards(card)
                     })
                    : null
                    }
            </View>
            <View style={{flex: 5, borderWidth: 1, borderColor: 'green'}} />
            <View style={{flex: 5, borderWidth: 2, margin: 3}}>
                <View style={{flex: 9, borderWidth: 2, margin: 3, flexDirection: 'row', alignItems: 'flex-start',}}>
                    {(this.state.communityCards) ?
                        this.state.communityCards.map((card) => {
                          return  this.createCards(card)
                     })
                    : null
                    }
                </View>
                <View style={{flex: 3, borderwidth: 1, margin: 3}}>

                        {/* this view contains information about the pot, The one above contains the comunity cards!*/}
                </View>
            </View>
            <View style={{flex: 5, borderWidth: 1, borderColor: 'blue'}}>
            </View>
            <View style={{flex: 4, margin: 3, borderWidth: 1, borderColor: 'black', flexDirection: 'row', borderColor: 'black', justifyContent: 'center', alignItems: 'space-between', flexGrow: 2.5}}>
            <Text style={{justifyContent: 'flex-start'}}>{this.state.PlayerTwoChips}</Text>
            {(this.state.twoCardsPlayerTwo) ?
                        this.state.twoCardsPlayerTwo.map((card) => {
                          return  this.createCards(card)
                     })
                    : null
                    }
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
                <Button title={'test'} onPress={() => this.test()}> test </Button> <Button title={'Flop'} onPress={() => this.getFinalCards(3)}> flop </Button>
                <Button title={'Shuffle'} onPress={() => this.shuffleDeck()}> test </Button>  <Button title={'turn'} onPress={() => this.getFinalCards(1)}> turn </Button>
                <Button title={'getTwoCards'} onPress={() => this.getTwoCards()}> get2cards </Button> <Button title={'river'} onPress={() => this.getFinalCards(1)}>river </Button>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
                <Button title={'StartGame'} onPress={() => this.startGame(this.state.twoCardsPlayerOne, this.state.twoCardsPlayerTwo)}> Start the Game </Button>
            </View>
        </View>
        )
    }
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*
<View key={card.index}>
    <TouchableHighlight onPress={() => this.props.callback_singleCard(card)}>
    <Image source={this.state.cardImages[card.index]} style={{margin: 4, height: 62, width: 46}} resizeMode='stretch'/>
    </TouchableHighlight>
</View>
                                */

/*                                    <TouchableHighlight onPress={() => this.state.newDeck[index]}>
                                        <Image source={this.state.cardImages[card.index]} style={{margin: 4, height: 62, width: 46}} resizeMode='stretch'/>
                                    </TouchableHighlight>

                                    */


/*

*/

/*
let output2 =
        <View style={{flex: 1, flexDirection: 'row', borderWidth: 2, justifyContent: 'center', alignItems: 'flex-end'}}>
                {    twoCardsPlayerTwo.map((card, index) => {
                    return(
                            <View key={card.index}>
                                 <TouchableHighlight onPress={() => this.setState(null)}>
                                    <Image source={this.state.cardImages[card.index]} style={{margin: 4, height: 62, width: 46}} resizeMode='stretch'/>
                                </TouchableHighlight>
                            </View>

                )
                    })
                }
        </View>


*/
