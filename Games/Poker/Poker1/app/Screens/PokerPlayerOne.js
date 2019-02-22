import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import PokerScreen from './PokerScreen'
export default class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            masterDeck: null
        }

    }


    render() {
        

    return (
      <View style={{flex: 1}}>
            
      </View>
    )
  }
}
//source={(`./app/CardImages/img/${x.Value}_of_${x.Suit}.png`

/*

this.callback_pokerInfo = this.callback_pokerInfo.bind(this);
this.callback_singleCard = this.callback_singleCard.bind(this);

callback_pokerInfo = (masterDeck) => {
    //       console.log('mind' + JSON.stringify(masterDeck))
           this.setState({masterDeck: masterDeck})
       }
       callback_singleCard = (card) => {
                                           //alert(card.Value + card.Suit)
       }

       <PokerCardScreen
            answer={10}
            callback_pokerInfo = {this.callback_pokerInfo}
            callback_singleCard = {this.callback_singleCard}
        />

        */