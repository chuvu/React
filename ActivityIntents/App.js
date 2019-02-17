import React, { Component } from 'react';
 
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

 
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

// Defined input buttons that will be displayed in the calculator.
// const inputButtons = [
//     [1, 2, 3, '/'],
//     [4, 5, 6, '*'],
//     [7, 8, 9, '-'],
//     [0, 'CE', '=', '+']
// ];
const inputButtons = [
  ['', 'CE', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '+/-', '.', '=']
]
 
class MainActivity extends Component {
 
static navigationOptions =
 {
    title: 'MainActivity',
 };
 
 FunctionToOpenSecondActivity = () =>
 {
    this.props.navigation.navigate('Second');
    
 }


 FunctionToOpenThirdActivity = () =>
 {
    this.props.navigation.navigate('Third');
    
 }
 
 render()
 {
    return(
       <View style = { styles.MainContainer }>
 
        
 
          <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Second Activity'/>
          <Button onPress = { this.FunctionToOpenThirdActivity } title = 'Click Here To Open Third Activity'/>
        
       </View>
    );
 }
}
 
class SecondActivity extends Component<Props> {
 
 static navigationOptions =
 {
    title: 'SecondActivity',
 };

  constructor(props){
        super(props);
        this.state ={ f1: 0,f2: 0,result: 0 };
    }

    onButtonPressed = function() { this.setState({ result:this.state.f1 })}
  _handleTextChange = f1=> { this.setState({ f1 }); 
  };
  _handleTextChange2 = f2 => { this.setState({ f2 }); 
  };
  plus = function() {
    var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x + y;
    this.setState({ result: calcu})
  }
  minus = function() {
    var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x - y;
    this.setState({ result: calcu})
  }
  
  devide = function(){
      var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x / y;
    this.setState({ result: calcu})
  }
  multi = function(){
     var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x * y;
    this.setState({ result: calcu})
  }
 
 render()
 {
    return(
       <View>
      
      <Text style={styles.paragraph}>Number1:</Text>
      <TextInput
        style={{ width: 200, height: 44, padding: 8 }}
         keyboardType ='numeric'
        onChangeText={(text) => this.setState({f1:parseInt(text)})}
      />
      <Text style={styles.paragraph}>Number2:</Text>
      <TextInput
        style={{ width: 200, height: 44, padding: 8 }}
         keyboardType ='numeric'
        onChangeText={(text) => this.setState({f2:parseInt(text)})}
      />
       <Text style={styles.paragraph}>Resultado:</Text>
      <Text style={{color: 'blue'}}>{this.state.result}</Text>

       <Button title='Add' onPress={this.plus.bind(this)}/>
        <Button title='Sustract' onPress={this.minus.bind(this)}/>
        <Button title='Divide' onPress={this.devide.bind(this)}/>
        <Button title='Multiply' onPress={this.multi.bind(this)}/>
      </View>
    );
 }
}




class ThirdActivity extends Component {
  constructor(props) {
      super(props);

// the three states the calculator goes in
      this.state = {
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null
      }
  }


// displayContainer= the display screen for the answer

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }

// For each row in `inputButtons`, create a row View and add create
//an InputButton for each input in the row.
_renderInputButtons() {
    let views = [];
    //for loop over the array of input buttons
    for (var r = 0; r < inputButtons.length; r ++) {
        let row = inputButtons[r];

        let inputRow = [];
        //for loop of each button and stuffing them in input
        for (var i = 0; i < row.length; i ++) {
            let input = row[i];
            //inputing each of the grabbed buttons and pushing them into
            //inputRow array which will by the view being displayed for the
            //calculator on the bottom side
            inputRow.push(
                <InputButton
                    value={input}
                    highlight={this.state.selectedSymbol === input}
                    onPress={this._onInputButtonPressed.bind(this, input)}
                    //apparently it is in good practice for each child in an arr
                    //to have a "key" prop or you will get a little warning but it will still work
                    key={r + "-" + i}/>
            );
        }
        // pushing all the buttons into the views
        views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
}

_onInputButtonPressed(input) {
    // switch loop to check the cases if number or string is being handled
    //aka if number or the input buttons
    switch (typeof input) {
        case 'number':
            return this._handleNumberInput(input)
        case 'string':
            return this._handleStringInput(input)
    }
}
_handleNumberInput(num) {
    // if input type is a number it will be added to the end of the existing
    //input value with each digit shifted to the left. Example:
    //if you put in "1" in the calculator if will be (0*10) BUT! if you add
    //a 3 after it will be (1*10)+3=13.


    // let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
        // inputValue: inputValue
        inputValue: this.state.isDecimal ? eval(this.state.currentInputValue + this.state.selectedSymbol + num) : this.state.inputValue * 10 + num,
        currentInputValue: this.state.isDecimal ? 0 : this.state.inputValue * 10 + num,
        connectValue: null,
        displayedValue: null,
        isDecimal: null
    })
}

_handleStringInput(str) {
  // switch statement to check which input is going to be used on the numbers
  switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
          this.setState({
              selectedSymbol: str,
              previousInputValue: this.state.inputValue,
              inputValue: 0
          });
          break;

          // equal sign so the logic can work
          case '=':
          let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

          if (!symbol) {
            return;
          }

          this.setState({
            previousInputValue: 0,
            inputValue: eval(previousInputValue + symbol + inputValue),
            selectedSymbol: null
          });
          break;

          case 'CE':
            // Clear Everything
          this.setState({
              inputValue: 0,
              connectValue: null,
              displayedValue: null
            });
          break;

          //turns the number to a decimal by dividing it by 100
          case '%':
          this.setState({
          inputValue: this.state.inputValue / 100
          });
          break;

          //the decimal sign for the calculator
          case ".":
          this.setState({
            isDecimal: true,
            selectedSymbol: str,
            previousInputvalue: this.state.inputValue
          });
          break;

          //converts number to negative
          //stack overflo']w stack overflow stack overflow
          case "+/-":
          this.setState({
            inputValue: -Math.abs(this.state.currentInputValue),
            currentInputValue: -Math.abs(this.state.currentInputValue)
          })
          break;

        }
      }

}
 
export default Project = StackNavigator(
{
 First: { screen: MainActivity },
 
 Second: { screen: SecondActivity },

 Third: { screen: ThirdActivity }
});
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
paragraph: {
  margin: 24,
  fontSize:18,
  fontWeight: 'bold',
  color:'#34495e',
},
}); 