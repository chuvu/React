/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
  Alert,
  BackHandler
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
      super(props);
      this.state = {
        movePlayerVal: new Animated.Value(Dimensions.get('window').width/2 - 32.22),
        playerSide: 'middle',
        points: 0,
        moveCounterVal: new Animated.Value(0),
        counterStartposX: -1000,
        counterSide: 'middle',
        moveCounter2Val: new Animated.Value(0),
        counter2StartposX: -1000,
        counter2Side: 'middle',
        moveCounter3Val: new Animated.Value(0),
        counter3StartposX: -1000,
        counter3Side: 'middle',
        winH: Dimensions.get('window').height,
        winW: Dimensions.get('window').width,
        gameOver: false,
        recursiveCounter: true,
        recursiveCounter2: true
      };
    }

render(){
    return(
      <ImageBackground source = {require ('./img/road.png')} style ={styles.container}>

        <View style={{flex:1, alignItems: 'center', marginTop: 6}}>
          <View style={styles.points}>
            <Text style={{fontSize:18, color: 'rgb(200,200,200)'}}> {this.state.points}</Text>
          </View>
        </View>

        <Animated.Image source = {require('./img/player.png')} style ={{
          height:120,
          width:64.44,
          zIndex: 1,
          position:'absolute',
          bottom:18,
          resizeMode: 'stretch',
          transform: [{translateX: this.state.movePlayerVal}]}}>
        </Animated.Image>

        <Counter counterImg = {require('./img/car.png')}
        counterStartposX = {this.state.counterStartposX}
        moveCounterVal = {this.state.moveCounterVal} />

        <Counter2 counter2Img = {require('./img/car2.png')}
        counter2StartposX = {this.state.counter2StartposX}
        moveCounter2Val = {this.state.moveCounter2Val} />

        <Counter3 counter3Img = {require('./img/car3.png')}
        counter3StartposX = {this.state.counter3StartposX}
        moveCounter3Val = {this.state.moveCounter3Val} />

        <View>
          <Text style = {styles.left} onPress ={() => this.movePlayer('left')}> {<Image source = {require('./img/l.png')} ></Image>} </Text>
          <Text style = {styles.right} onPress ={() => this.movePlayer('right')}> {<Image source = {require('./img/r.png')} ></Image>} </Text>
        </View>

      </ImageBackground>
    );
}

movePlayer(direction) {
    if (direction === 'right' && this.state.playerSide === 'middle' && this.state.gameOver === false){
      this.setState({playerSide: 'right'});
      Animated.spring(
        this.state.movePlayerVal,
        { toValue: this.state.winW - 54 - 64.44,
          tension: 48}
      ).start();
    }
    else if ((direction === 'right' && this.state.playerSide === 'left' && this.state.gameOver === false)
    || (direction === 'left' && this.state.playerSide === 'right' && this.state.gameOver === false)) {
      this.setState({playerSide: 'middle'});
      Animated.spring(
        this.state.movePlayerVal,
        { toValue: this.state.winW/2 - 32.2,
          tension: 48}
      ).start();
    }
    else if (direction === 'left' && this.state.playerSide === 'middle' && this.state.gameOver === false) {
      this.setState({playerSide: 'left'});
      Animated.spring(
        this.state.movePlayerVal,
        { toValue: 54,
          tension: 48}
      ).start();
    }
}

componentDidMount() {
    var game = setInterval( () => {
    if (this.state.gameOver === false) {
      clearInterval(game);
      this.main_process();
  }} , 900);
}

playCounter(){
    var checkInterval = setInterval( () => {
      if (this.state.moveCounterVal._value > this.state.winH - 276 && this.state.moveCounterVal._value < this.state.winH - 72
      && this.state.playerSide === this.state.counterSide && this.state.gameOver === false){
        clearInterval(checkInterval);
        this.setState({gameOver: true});
        this.gameOver();
        Animated.timing(this.state.moveCounterVal,{toValue: this.state.moveCounterVal._value}).stop();
      }} , 24);

    Animated.timing(
        this.state.moveCounterVal,
        { toValue: this.state.winH,
          duration: 1200}
      ).start(event => {
    if (event.finished && this.state.gameOver === false){
        clearInterval(checkInterval);
        this.setState({ points: this.state.points+=1});
        if (this.state.recursiveCounter === true){
            this.main_process();
            }
      }
    });
}

playCounter2(){
    var checkInterval = setInterval( () => {
    if (this.state.moveCounter2Val._value > this.state.winH - 276 && this.state.moveCounter2Val._value < this.state.winH - 72
    && this.state.playerSide === this.state.counter2Side && this.state.gameOver === false){
        clearInterval(checkInterval);
        this.setState({gameOver: true});
        this.gameOver();
        Animated.timing(this.state.moveCounter2Val,{toValue: this.state.moveCounter2Val._value}).stop();
      }} , 24);

  Animated.timing(
      this.state.moveCounter2Val,
      { toValue: this.state.winH,
        duration: 1320}
      ).start(event => {
    if (event.finished && this.state.gameOver === false){
        clearInterval(checkInterval);
        this.setState({ points: this.state.points+=1});
        if (this.state.recursiveCounter2 === true){
            this.main_process();
            }
      }
    });
}

playCounter3(){
    var checkInterval = setInterval( () => {
    if (this.state.moveCounter3Val._value > this.state.winH - 276 && this.state.moveCounter3Val._value < this.state.winH - 72
    && this.state.playerSide === this.state.counter3Side && this.state.gameOver === false){
        clearInterval(checkInterval);
        this.setState({gameOver: true});
        this.gameOver();
        Animated.timing(this.state.moveCounter3Val,{toValue: this.state.moveCounter3Val._value}).stop();
      }} , 24);

  Animated.timing(
      this.state.moveCounter3Val,
      { toValue: this.state.winH,
        duration: 2160}
      ).start(event => {
    if (event.finished && this.state.gameOver === false){
        clearInterval(checkInterval);
        this.setState({ points: this.state.points+=1});
        this.main_process();
      }
    });
  }

gameOver() {
  Alert.alert("Game Over", `Your point is ${this.state.points}`,
  [{text: 'Restart', onPress: () => this.restart() },
  {text: 'Quit', onPress: () => BackHandler.exitApp()}],
  { cancelable: false }
  );
}

restart() {
    this.setState({
      movePlayerVal: new Animated.Value(Dimensions.get('window').width/2 - 32.22),
      playerSide: 'middle',
      points: 0,
      moveCounterVal: new Animated.Value(0),
      counterStartposX: -1000,
      counterSide: 'middle',
      moveCounter2Val: new Animated.Value(0),
      counter2StartposX: -1000,
      counter2Side: 'middle',
      moveCounter3Val: new Animated.Value(0),
      counter3StartposX: -1000,
      counter3Side: 'middle',
      winH: Dimensions.get('window').height,
      winW: Dimensions.get('window').width,
      gameOver: false,
      recursiveCounter: true,
      recursiveCounter2: true
    });
    this.componentDidMount();
}

main_process() {
  var ran1 = Math.floor(Math.random()*10);
  if(ran1 < 3) {  /* Only one car with the probability of 0.3 */
  var ran2 = Math.floor(Math.random()*3);
      if (ran2===0){
          this.state.moveCounterVal.setValue(-108);
          var ran3 = Math.floor(Math.random()*3);
          if(ran3===0) {
            x = 24;
            this.setState({counterSide: 'left'});}
          else if(ran3===1) {
            x = this.state.winW/2 - 60;
            this.setState({counterSide: 'middle'});}
          else{
            x = this.state.winW - 24 - 120;
            this.setState({counterSide: 'right'});}
          this.setState({counterStartposX: x});
          this.setState({recursiveCounter: true});
          this.playCounter();
      }
      else if (ran2===1){
          this.state.moveCounter2Val.setValue(-108);
          var ran3 = Math.floor(Math.random()*3);
          if(ran3===0) {
            x = 50;
            this.setState({counter2Side: 'left'});}
          else if(ran3===1) {
            x = this.state.winW/2 - 34;
            this.setState({counter2Side: 'middle'});}
          else{
            x = this.state.winW - 50 - 68;
            this.setState({counter2Side: 'right'});}
          this.setState({counter2StartposX: x});
          this.setState({recursiveCounter2: true});
          this.playCounter2();
      }
      else {
          this.state.moveCounter3Val.setValue(-108);
          var ran3 = Math.floor(Math.random()*3);
          if(ran3===0) {
            x = 60;
            this.setState({counter3Side: 'left'});}
          else if(ran3===1) {
            x = this.state.winW/2 - 29;
            this.setState({counter3Side: 'middle'});}
          else{
            x = this.state.winW - 60 - 57.3;
            this.setState({counter3Side: 'right'});}
          this.setState({counter3StartposX: x});
          this.playCounter3();
        }
      }
  else if (ran1 >= 3 && ran1 < 9){  /* Two cars with the probability of 0.6 */
      var ran2 = Math.floor(Math.random()*3);
      if (ran2===0){
          this.state.moveCounterVal.setValue(-108);
          this.state.moveCounter2Val.setValue(-108);
          var ran3 = Math.floor(Math.random()*3);
          if(ran3===0) {
              x = 24;
              this.setState({counterSide: 'left'});
              var ran4 = Math.floor(Math.random()*2);
              if(ran4===0) {
                  y = this.state.winW/2 - 34;
                  this.setState({counter2Side: 'middle'});}
              else{
                  y = this.state.winW - 50 - 68;
                  this.setState({counter2Side: 'right'});}
            }
          else if(ran3===1) {
              x = this.state.winW/2 - 60;
              this.setState({counterSide: 'middle'});
              var ran4 = Math.floor(Math.random()*2);
              if(ran4===0) {
                  y = 50;
                  this.setState({counter2Side: 'left'});}
              else{
                  y = this.state.winW - 50 - 68;
                  this.setState({counter2Side: 'right'});}
            }
          else{
              x = this.state.winW - 24 - 120;
              this.setState({counterSide: 'right'});
              var ran4 = Math.floor(Math.random()*2);
              if(ran4===0) {
                  y = 50;
                  this.setState({counter2Side: 'left'});}
              else{
                  y = this.state.winW/2 - 34;
                  this.setState({counter2Side: 'middle'});}
            }
            this.setState({counterStartposX: x});
            this.setState({counter2StartposX: y});
            this.setState({recursiveCounter: false});
            this.setState({recursiveCounter2: true});
            this.playCounter();
            this.playCounter2();
            }
      else if (ran2===1){
          this.state.moveCounterVal.setValue(-108);
          this.state.moveCounter3Val.setValue(-108);
          var ran3 = Math.floor(Math.random()*3);
          if(ran3===0) {
              x = 24;
              this.setState({counterSide: 'left'});
              var ran4 = Math.floor(Math.random()*2);
              if(ran4===0) {
                  y = this.state.winW/2 - 29;
                  this.setState({counter3Side: 'middle'});}
              else{
                  y = this.state.winW - 60 - 57.3;
                  this.setState({counter3Side: 'right'});}
            }
          else if(ran3===1) {
              x = this.state.winW/2 - 60;
              this.setState({counterSide: 'middle'});
              var ran4 = Math.floor(Math.random()*2);
              if(ran4===0) {
                  y = 60;
                  this.setState({counter3Side: 'left'});}
              else{
                  y = this.state.winW - 60 - 57.3;
                  this.setState({counter3Side: 'right'});}
              }
          else{
              x = this.state.winW - 24 - 120;
              this.setState({counterSide: 'right'});
              var ran4 = Math.floor(Math.random()*2);
              if(ran4===0) {
                  y = 60;
                  this.setState({counter3Side: 'left'});}
              else{
                  y = this.state.winW/2 - 29;
                  this.setState({counter3Side: 'middle'});}
            }
            this.setState({counterStartposX: x});
            this.setState({counter3StartposX: y});
            this.setState({recursiveCounter: false});
            this.playCounter();
            this.playCounter3();
            }
      else{
            this.state.moveCounter2Val.setValue(-108);
            this.state.moveCounter3Val.setValue(-108);
            var ran3 = Math.floor(Math.random()*3);
            if(ran3===0) {
                x = 50;
                this.setState({counter2Side: 'left'});
                var ran4 = Math.floor(Math.random()*2);
                if(ran4===0) {
                    y = this.state.winW/2 - 29;
                    this.setState({counter3Side: 'middle'});}
                else{
                    y = this.state.winW - 60 - 57.3;
                    this.setState({counter3Side: 'right'});}
                }
            else if(ran3===1) {
                x = this.state.winW/2 - 34;
                this.setState({counter2Side: 'middle'});
                var ran4 = Math.floor(Math.random()*2);
                if(ran4===0) {
                    y = 60;
                    this.setState({counter3Side: 'left'});}
                else{
                    y = this.state.winW - 60 - 57.3;
                    this.setState({counter3Side: 'right'});}
                }
              else{
                  x = this.state.winW - 50 - 68;
                  this.setState({counter2Side: 'right'});
                  var ran4 = Math.floor(Math.random()*2);
                  if(ran4===0) {
                      y = 60;
                      this.setState({counter3Side: 'left'});}
                  else{
                      y = this.state.winW/2 - 29;
                      this.setState({counter3Side: 'middle'});}
                }
              this.setState({counter2StartposX: x});
              this.setState({counter3StartposX: y});
              this.setState({recursiveCounter2: false});
              this.playCounter2();
              this.playCounter3();
              }
    }
  else{ /* Three cars with the probability of 0.1 */
      var ran2 = Math.floor(Math.random()*2);
      this.state.moveCounterVal.setValue(-108);
      this.state.moveCounter2Val.setValue(-108);
      this.state.moveCounter3Val.setValue(-108);
      if (ran2===0){
          x = 24;
          this.setState({counterSide: 'left'});
          y = this.state.winW - 50 - 68;
          this.setState({counter2Side: 'right'});
          z = this.state.winW/2 - 29;
          this.setState({counter3Side: 'middle'});
        }
      else{
          x = this.state.winW - 24 - 120;
          this.setState({counterSide: 'right'});
          y = 50;
          this.setState({counter2Side: 'left'});
          z = this.state.winW/2 - 29;
          this.setState({counter3Side: 'middle'});
        }
          this.setState({counterStartposX: x});
          this.setState({counter2StartposX: y});
          this.setState({counter3StartposX: z});
          this.setState({recursiveCounter: false});
          this.setState({recursiveCounter2: false});
          this.playCounter();
          this.playCounter2();
          this.playCounter3();
    }
}
}

export class Counter extends Component<Props> {
  render() {
    return (
      <Animated.Image source = {this.props.counterImg} style ={{
        height:120,
        width:120,
        zIndex: 1,
        position:'absolute',
        resizeMode: 'stretch',
        left: this.props.counterStartposX,
        transform: [{translateY: this.props.moveCounterVal}]}}>
      </Animated.Image>
    );
  }
}

export class Counter2 extends Component<Props> {
  render() {
    return (
      <Animated.Image source = {this.props.counter2Img} style ={{
        height:120,
        width:68,
        zIndex: 1,
        position:'absolute',
        resizeMode: 'stretch',
        left: this.props.counter2StartposX,
        transform: [{translateY: this.props.moveCounter2Val}]}}>
      </Animated.Image>
    );
  }
}

export class Counter3 extends Component<Props> {
  render() {
    return (
      <Animated.Image source = {this.props.counter3Img} style ={{
        height:120,
        width:57.3,
        zIndex: 1,
        position:'absolute',
        resizeMode: 'stretch',
        left: this.props.counter3StartposX,
        transform: [{translateY: this.props.moveCounter3Val}]}}>
      </Animated.Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  points: {
    width: 72,
    height: 48,
    backgroundColor:'rgb(18,12,12)',
    alignItems:'center',
    justifyContent: 'center'
  },
  left: {
    flexDirection: 'row',
    position: 'absolute',
    bottom:1,
    left:1,
    zIndex:3,
    paddingTop: 12,
    paddingRight: 9
  },
  right: {
    flexDirection: 'row',
    position: 'absolute',
    bottom:1,
    right:1,
    zIndex:3,
    paddingTop: 12,
    paddingLeft: 9
  }
});
