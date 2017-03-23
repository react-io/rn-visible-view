/**
 * Created by simon on 2017/3/15.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Divider extends Component {
  static propTypes = {
    height: React.PropTypes.number,
    color: React.PropTypes.string
  }

  render() {
    const height = this.props.height
    const color = this.props.color

    const customDivider = {}
    _.assign(customDivider,
      height ? { height: height } : {},
      color ? { backgroundColor: color } : {}
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
