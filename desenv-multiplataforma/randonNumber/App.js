import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      number: 0,
      random: 0
    }
  }

  onPress = () => {
    this.setState({
      number: this.state.number+1
    })
  }

  onPressRandom = () => {
    let randonNumber = Math.random();
    randonNumber = Math.floor(randonNumber * 10);

    this.setState({
      random: randonNumber
    })
  }

  render() {
    const { number, random } = this.state;
    return (

      <View style={styles.container}>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressRandom}
          >
            <Text> Número Randômico </Text>
          </TouchableOpacity>
          <Text style={styles.countText}> {random} </Text>
        </View>
        <View style={styles.containerButton}>
          <Text style={styles.countText}> {number} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Text> Acumulando 1 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f53',
    padding: 10,
    flexDirection:'row'
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  countContainer: {
    alignItems: 'flex-end',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});
