/* 
 * Project: React Native Tutorial - Create an Image Gallery
 * YouTube: https://www.youtube.com/watch?v=QwhrAjp4X_Y
 *
 * Author : Fullstack Development - https://www.youtube.com/channel/UCNpIE11a9nLW_s2GUWmksqw
 *
 * Images : https://www.pexels.com/ 
 * 
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal
} from 'react-native';

import ImageElement from './app/components/ImageElement';

export default class App extends Component {

    state ={
        modalVisible: false,
        modalImage: require('./app/img/fruit-fast-action-studio-73000.jpeg'),
        images: [
            require('./app/img/fruit-fast-action-studio-73000.jpeg'),
            require('./app/img/pexels-photo-326183.jpeg'),
            require('./app/img/pexels-photo-414032.jpeg'),
            require('./app/img/pexels-photo-433205.jpeg'),
            require('./app/img/pexels-photo-534249.jpeg'),
            require('./app/img/ux-night-85911.jpeg'),
        ]
    }

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
       return this.state.modalIamge;
    }

    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                        onPress={() => { this.setModalVisible(true, key)}}> 
                        <View style={styles.imagewrap}>
                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>

        });

        return (
             <View style={styles.container}>

                 <Modal style={styles.modal} animationType={'fade'}
                        transparent={true} visible={this.state.modalVisible}
                        onRequestClose={() => {}}>

                        <View style={styles.modal}>
                            <Text style={styles.text}
                                onPress={() => {this.setModalVisible(false)}}>Close</Text>
                             <ImageElement imgsource={this.state.modalImage}></ImageElement>
                        </View>

                 </Modal>

                 {images}
             </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',
        // For iOS status bar, we need a marginTop of 20.
        marginTop: 20,
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3) - 12,
        width: (Dimensions.get('window').width/2) - 4,
        backgroundColor: '#fff',
    }, 
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: { 
       color: '#fff',
    }

});


/*
 * EOF: App.js
 */
