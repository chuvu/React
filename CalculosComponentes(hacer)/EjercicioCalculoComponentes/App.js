import React, { Component } from 'react';
import CheckboxFormX from 'react-native-checkbox-form';
import NumericInput from 'react-native-numeric-input';
import {    
  StyleSheet,
  Text,
  View,
  Slider,
  TextInput,
  Picker,
  Alert,
  Button
} from 'react-native';

import { RadioGroup } from 'react-native-btr';

const mockData = [
    {
        label: 'label1',
        value: 'one'
    },
    {
        label: 'label2',
        value: 'two'
    },
    {
        label: 'label3',
        value: 'three'
    },
];

export default class App extends Component {
  constructor(props) {
   super(props)
   this.state = { age: 18 }
   this.state = {
      number   : 0,
     
    }

 this.state={
       PickerSelectedVal : ''
     }

    this.state = {
 
      radioButtons: [
        {
          label: 'Apple',
          value: 'Apple',
          checked: true,
          color: '#F44336',
          disabled: false,
          flexDirection: 'row',
          size: 11
 
        },
 
        {
          label: 'Mango',
          value: 'Mango',
          checked: false,
          color: '#FF8F00',
          disabled: false,
          flexDirection: 'row',
          size: 11
 
        },
 
        {
          label: 'Banana',
          value: 'Banana',
          checked: false,
          color: '#1B5E20',
          disabled: false,
          flexDirection: 'row',
          size: 11
 
        }
 
      ]
 
    }
  } 
  getVal(val){
  console.warn(val);
  }   

   _onSelect = ( item ) => {
      console.log(item);
    };  
    getSelectedPickerValue=()=>{
      Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
    }
  render() {    
     let selectedItem = this.state.radioButtons.find(e => e.checked == true);
    selectedItem = selectedItem ? selectedItem.value : this.state.radioButtons[0].value;

    return (

    
      <View style={styles.container}>
       <TextInput style={styles.inputs}
              placeholder="Enter a Number"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(number) => this.setState({number})}/>

      <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="India" value="India" />
           <Picker.Item label="USA" value="USA" />
           <Picker.Item label="China" value="China" />
           <Picker.Item label="Russia" value="Russia" />
           <Picker.Item label="United Kingdom" value="United Kingdom" />
           <Picker.Item label="France" value="France" />

         </Picker>
          <Button title="Get Selected Picker Value" onPress={ this.getSelectedPickerValue } />

         
             <NumericInput 
            value={this.state.value} 
            onChange={value => this.setState({value})} 
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
        
      <RadioGroup
          color='#0277BD'
          labelStyle={{ fontSize: 14, }}
          radioButtons={this.state.radioButtons}
          onPress={radioButtons => this.setState({ radioButtons })}
          style={{ paddingTop: 20 }}
        />
 
        <View style={styles.selectedItemView}>
 
          <Text style={styles.selectedText}>Selected Item: {selectedItem}</Text>
 
        </View>

         <CheckboxFormX
                  style={{ width: 350 - 30 }}
                  dataSource={mockData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={16}
                  formHorizontal={true}
                  labelHorizontal={false}
                  onChecked={(item) => this._onSelect(item)}
              />
 
        <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={18}
         maximumValue={71}
         value={this.state.age}
         onValueChange={val => this.setState({ age: val })}
         onSlidingComplete={ val => this.getVal(val)}
        />
        <Text style={styles.welcome}>
          {this.state.age}
        </Text>            
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
 
  selectedItemView:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 14,
        backgroundColor: '#263238',
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    selectedText:
    {
        fontSize: 17,
        color: '#fff'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
});


