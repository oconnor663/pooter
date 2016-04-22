/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button';

class pooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.pooter}
          onPress={this.pooterClick.bind(this)}
        >
          Pooter!
        </Button>
        <Text style={styles.counter}>
          {this.state.num}
        </Text>
      </View>
    );
  }

  pooterClick(event) {
    console.log('Pressed!');
    this.setState({
      num: this.state.num + 1,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pooter: {
    fontSize: 80,
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
  },
  counter: {
    fontSize: 80,
  },
});

AppRegistry.registerComponent('pooter', () => pooter);
