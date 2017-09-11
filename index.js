/**
 * Created by simon on 2017/3/22.
 */
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';

export default class VisibleView extends Component {

  static propTypes = {
    visible: PropTypes.bool,
  }

  static getDefaultProps() {
    return {
      visible: true,
    }
  }

  render() {
    return this.props.visible ? this.props.children : null
  }
}
