/**
 * Created by @musta in 09/12/18
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class TopGameSection extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  render() {
    return (
      <View>
        <Text>Hello From Top Section</Text>
      </View>
    );
  }
}

TopGameSection.propTypes = {};

export default TopGameSection;