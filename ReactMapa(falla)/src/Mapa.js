import React, { Component } from 'react';

import {
  StyleSheet,
  View,Text,Button,TouchableOpacity
} from 'react-native';
import MapView,{Marker} from 'react-native-maps';

export default class Mapa extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	lat:-7.2379005,
	  	lng:-35.8858189,
	  	txt:'',
	  	markers:[
	  	{key:0,coords:{latitude:-7.2379005,longitude:-35.8858189},title:'Olá',description:'Uma descricao qualquer',pinColor:'#00ddff'},
	  	{key:1,coords:{latitude:-7.2389005,longitude:-35.8858189},title:'Olá',description:'Uma descricao qualquer',pinColor:'#00ddff'},
	  	{key:2,coords:{latitude:-7.2399005,longitude:-35.8858189},title:'Olá',description:'Uma descricao qualquer',pinColor:'#00ddff'}


	  	]
	  	};
	  	this.moverMapa=this.moverMapa.bind(this);
	  	this.moveMapa=this.moveMapa.bind(this);
	}

	moverMapa(lat,lng){
		let state=this.state;
		state.lat=lat;
		state.lng=lng;
		this.setState(state);
	}
	moveMapa(){
     this.map.animateToCoordinate({
     	latitude:-7.2109005,
     	longitude:-35.8858189
     },2000);
	}
  render() {
    return (
      <View style={styles.content} >
      	<MapView
      	ref={(map)=>{this.map = map}}
      	style={styles.mapa}
      	/*
      	mapType="hybrid"
      	scrollEnable={true} habilita o scroll, ou seja mecher no mapa
      	zoomEnable={true}  dar zoom no mapa
      	rotateEnable={true} rotacionar o mapa
			
			MARKER MANUAL

			<Marker 
      	coordinate={{latitude:this.state.lat,longitude:this.state.lng}}
      	title="Exemplo"
      	description="Uma descrição alguma"
      	pinColor={"#00ff00"}/>

      	*/
        onPress={(e)=>{
        	alert("Clicou em: "+e.nativeEvent.coordinate.latitude+" X "+e.nativeEvent.coordinate.longitude);
        }}
      	region={{
      		latitude:this.state.lat,
      		longitude:this.state.lng,
      		latitudeDelta:0.015,
      		longitudeDelta:0.0121
      	}}>
      	{this.state.markers.map((marker)=>{
      		return(
      			<Marker key={marker.key} title={marker.title} description={marker.description} coordinate={marker.coords} pinColor={marker.pinColor}/>
      			)
      	})}

      	
      	</MapView>
      	<Text>{this.state.lat} x {this.state.lng} </Text>
      	<View style={styles.but} >
      		<TouchableOpacity style={styles.button} onPress={()=>{this.moverMapa(-3.731862,-38.526670)}}>
      		<Text>Fortaleza</Text>
      		</TouchableOpacity>
      		<TouchableOpacity style={styles.button} onPress={()=>{this.moverMapa(-22.9068467,-43.1728965)}}>
      		<Text>Rio de Janeiro</Text>
      		</TouchableOpacity>
      		<TouchableOpacity style={styles.button} onPress={()=>{this.moverMapa(-23.554156,-46.623879)}}>
      		<Text>São Paulo</Text>
      		</TouchableOpacity>
      		<TouchableOpacity style={styles.button} onPress={this.moveMapa}>
      		<Text>Mover Mapa</Text>
      		</TouchableOpacity>
      		
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	content:{
		flex:1
	},
mapa:{
	width:'100%',
	height:500
},
but:{
	padding:30,
	flexDirection:'row',
	justifyContent:'space-between',
	alignItems:'center'

},
button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderColor:'#999',
    borderBottomColor:'#999'
  }
});

