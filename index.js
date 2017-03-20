/**
 * Created by simon on 2017/3/15.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BaseComponent from './BaseComponent'

export default class Divider extends BaseComponent {
  render() {
    const height = this.props.height
    const customDivider = {}
    _.assign(customDivider,
      height ? { height: height } : {}
    )

    return (
      <View style={StyleSheet.flatten([styles.divider, customDivider])}/>
    )
  }
}

const styles = {
  divider: {
    backgroundColor: '#D5D5D5',
    height: 0.5
  }
}
