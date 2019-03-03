import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pdf from 'react-native-pdf';

// Simple screen containing an "Open PDF" button
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('Pdf')}
          title='Open PDF'
        />
      </View>
    );
  }
}

// Screen that shows the contents of a PDF
class PdfScreen extends Component {
  static navigationOptions = {
    title: 'PDF'
  };

  render() {
    const source = require('/libro/reacttutorial.pdf');

    return <Pdf
              source={source}
              style={styles.pdf}
            />;
  }
}

const PdfApp = StackNavigator({
  Home: { screen: HomeScreen },
  Pdf: { screen: PdfScreen }
});

export default class App extends Component<{}> {
  render() {
    return <PdfApp />;  
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width
    }
});