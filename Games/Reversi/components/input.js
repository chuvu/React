import React, { Component } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

import componentStyle from './style/component'

class InputField extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: '',
  }

  render = () => {
    const { placeholder } = this.props
    return (
      <TextInput
       // underlineColorAndroid="rgba(255,255,255,46)"
        style={[componentStyle.inputField, componentStyle.shadow]}
        placeholder={placeholder}
        placeholderTextColor="#AAAAAA"
      />
    )
  }
}

export default InputField
