import React from 'react'
import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

export default props => (
  <TouchableHighlight
    style={[
      styles.button,
      (props.dark ? styles.buttonDark : styles.buttonLight),
      props.style
    ]}
    onPress={props.onPress}
    underlayColor="rgba(255, 255, 255, 0.5)"
  >
    <Text
      style={[
        styles.buttonText,
        (props.dark ? styles.buttonTextDark : styles.buttonTextLight)
      ]}
    >
      {props.children}
    </Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    width: 120,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center'
  },

  buttonDark: {
    backgroundColor: '#0C5984',
  },

  buttonLight: {
    backgroundColor: '#F5F5F5'
  },

  buttonText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttonTextDark: {
    color: '#F5F5F5'
  },

  buttonTextLight: {
    color: '#0C5984'
  }
})
