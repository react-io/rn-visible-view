/**
 * Created by simon on 2017/3/15.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

export default class VisibleView extends Component {

  static propTypes = {
    visible: React.PropTypes.bool
  }

  render() {
    const comp = this.props.visible
      ? <View>{this.props.children}</View>
      : null

    return comp
  }
}
