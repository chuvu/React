import React, { Component } from 'react';
import { Text, Button, TextInput, List, FlatList, ListItem, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      flex:1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 45,
      fontWeight: 'bold',
      width: 400
    },
    activeTitle: {
      color: 'red',
      fontSize: 20
    },
  });

export default class Apuestas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apuestaActual: {
                numeroApostado:0,
                montoApostado:0.0,
                numeroSorteado:0,
                ganancia:0.0
            },
            historial: [],
            saldo:0.0,
            mostrarHistorial:false
         };
         this.hacerApuesta = this.hacerApuesta.bind(this);
         this.procesarInput = this.procesarInput.bind(this);
         this.mostrarHistorial = this.mostrarHistorial.bind(this);
         this.nuevaApuesta = this.nuevaApuesta.bind(this);
    }

    nuevaApuesta(mostrar) {
        this.setState({
            apuestaActual: {
                numeroApostado:0,
                montoApostado:0.0,
                numeroSorteado:0,
                ganancia:0.0
            },
            mostrarHistorial:false
        });
    }

    mostrarHistorial() {
        this.setState({mostrarHistorial:true});
    }

    procesarInput(name,value) {
        this.setState(prevState => ({
            apuestaActual: {
                ...prevState.apuestaActual,
                [name]: value
            }
        }))
        console.log("PROCESA INPUT");
        console.log(this.state);
      }
    
      hacerApuesta(){            
            let auxApuestaActual = JSON.parse(JSON.stringify(this.state.apuestaActual));
            let sorteado = Math.floor(Math.random() * 10) + 1;
            auxApuestaActual.sorteado = sorteado;
            let auxDiff = Math.abs(this.state.apuestaActual.numeroApostado -sorteado);
            switch(auxDiff){
                case 0:
                    auxApuestaActual.ganancia =  (this.state.apuestaActual.montoApostado *3)-this.state.apuestaActual.montoApostado;
                    break;
                case 1:
                    auxApuestaActual.ganancia =  (this.state.apuestaActual.montoApostado *1.5)-this.state.apuestaActual.montoApostado;
                    break;
                default:
                    auxApuestaActual.ganancia =  0-this.state.apuestaActual.montoApostado;
            };             
            this.setState(prevState => ({
                apuestaActual: auxApuestaActual,
                saldo: prevState.saldo+auxApuestaActual.ganancia,
                historial: [...prevState.historial, auxApuestaActual]
            }),()=>console.log(this.state));
            
        }
      
  
    render() {
    let resultadoApuesta;
    if(this.state.apuestaActual.ganancia>0){
        resultadoApuesta= <Text style={{color:"#0000FF"}} >
            Aposto ${this.state.apuestaActual.montoApostado} 
            al {this.state.apuestaActual.numeroApostado} 
            salio sorteado el {this.state.apuestaActual.sorteado} 
            y gano {this.state.apuestaActual.ganancia} 
        </Text>        
    }else{
        resultadoApuesta=<Text style={{color:"#FF0000"}} >
            Aposto ${this.state.apuestaActual.montoApostado} 
            al {this.state.apuestaActual.numeroApostado} 
            salio sorteado el {this.state.apuestaActual.sorteado} 
            y perdio!!!
        </Text>        
    }
    let contenido= <View>
                    <View>
                        <Text style={styles.title}>Ingrese un monto y un numero del 1 al 10!</Text>
                        <Text style={{backgroundColor:"#E2E2E2"}}>Si lo acierta gana 3x</Text>
                        <Text style={styles.activeTitle}>Si el numero es una unidad mayor o menor, gana 1.5x</Text>
                        <Text style={styles.title}>Numero Apostado</Text>
                        <TextInput onChangeText={(text) => this.procesarInput('numeroApostado',text)}></TextInput>
                        <Text style={styles.title}>Dinero</Text>
                        <TextInput onChangeText={(text) => this.procesarInput('montoApostado',text)}></TextInput>            
                    </View>
                    <Button title="Apostar!" color="#FF0000" onPress={ () => this.hacerApuesta() }/>            
                    <Button onPress={() => this.nuevaApuesta()} title="Nueva" color="#00FF00" />                 
                    <Button onPress={() => this.mostrarHistorial()} title="Historial" />
                    <Text>{resultadoApuesta}</Text>
                    <Text>Saldo:{this.state.saldo}</Text>
                </View>;   
        if(this.state.mostrarHistorial){
            contenido = <View>
                            <FlatList   data={this.state.historial} 
                                        renderItem={({item}) => 
                                        <Text>Aposto ${item.montoApostado} 
                                                al {item.numeroApostado} 
                                                salio sorteado el {item.sorteado} 
                                                y gano {item.ganancia}</Text>} />
                            <Button onPress={() => this.nuevaApuesta()} title="Nueva" color="#00FF00" />
                        </View>;
        }
    return (
      <View style={styles.container}>
        {contenido}      
      </View>
    );
  }
}