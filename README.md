# rn-visible-view
为 React Native 提供条件渲染功能的组件


## 安装
`$ npm install rn-visible-view --save`

## Useage

|visible = true|visible = false | 
|:--:|:--:|
| ![不可见](https://github.com/React-IO/rn-visible-view/blob/master/screenshot/v.png?raw=true) | ![可见](https://github.com/React-IO/rn-visible-view/blob/master/screenshot/n.png?raw=true)|




### Example

```javascript
export default class demo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <VisibleView visible={true}>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </VisibleView>
      </View>
    );
  }
}
```




