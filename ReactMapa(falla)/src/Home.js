import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,FlatList,Image,
  View
} from 'react-native';

export default class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	flatData:[
	  	{key:"1",nome:'Bonieky',titulo:'Festas ',idade:40,foto:"http://192.168.3.5/carteiraEstudantil/admin/assets/images/alunos/7f4afecb96e6530026e27a8d9b208167.jpg"},
	  	{key:"1",nome:'Bonieky',titulo:'Bebidas ',idade:40,foto:"http://192.168.3.5/carteiraEstudantil/admin/assets/images/alunos/7f4afecb96e6530026e27a8d9b208167.jpg"},
	  	{key:"1",nome:'Bonieky',titulo:'Transportes ',idade:40,foto:"http://192.168.3.5/carteiraEstudantil/admin/assets/images/alunos/7f4afecb96e6530026e27a8d9b208167.jpg"},
	  	{key:"1",nome:'Bonieky',titulo:'Telefenos ',idade:40,foto:"http://192.168.3.5/carteiraEstudantil/admin/assets/images/alunos/7f4afecb96e6530026e27a8d9b208167.jpg"},
	  	{key:"1",nome:'Bonieky',titulo:'Internet ',idade:40,foto:"http://192.168.3.5/carteiraEstudantil/admin/assets/images/alunos/7f4afecb96e6530026e27a8d9b208167.jpg"},
	  	{key:"1",nome:'Bonieky',titulo:'Eventos',idade:40,foto:"http://192.168.3.5/carteiraEstudantil/admin/assets/images/alunos/7f4afecb96e6530026e27a8d9b208167.jpg"}
	  	]
	  };
	}

	flatRender(item){
		return(
			  <View style={styles.flat}>
			 
			  	<Text style={styles.titulo} >{item.titulo}</Text>
				<Text style={styles.flatItem}>{item.nome}</Text>
			</View>
			);
	}

  render() {
    return (
      <View style={styles.container}>
       <FlatList data={this.state.flatData}  renderItem={({item})=>this.flatRender(item)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  flat:{
  	width:null,
  	backgroundColor: '#bbb',
  	height:100,
  	borderColor:'#ccc',
  	margin:4,
  	marginBottom:4,
 
  },
  titulo:{
  	flex:1,
  	justifyContent:'center',
	 fontSize:22,
	 fontWeight:'bold'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img:{
	width:160,
	height:160,
	marginLeft:20
  },
  txt: {
    fontSize:40,
    fontWeight:'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  flatItem:{
  		width:null,
  		fontSize:18,
  		height:40,
  		margin:10
  }
});
