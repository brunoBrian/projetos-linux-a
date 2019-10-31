import firebase from 'firebase';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pontuacao: 0
    }
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDjyKI2223-vrK2P97gSZM59oEo_Q-j5TA",
      authDomain: "configuracaofirebasereac-9653b.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-9653b.firebaseio.com",
      projectId: "configuracaofirebasereac-9653b",
      storageBucket: "configuracaofirebasereac-9653b.appspot.com",
      messagingSenderId: "759264574847"
    };

    firebase.initializeApp(config);
  }

  saveData() {
    const funcionarios = firebase.database().ref('funcionarios');

    funcionarios.push().set(
      {
        nome: 'Bruno',
        altura: '1,78',
        peso: '89'
      }
    );
  }

  listarDados() {
    const pontuacao = firebase.database().ref('pontuacao');

    pontuacao.on('value', snapshot => {
      let pontos = snapshot.val();
      this.setState({pontuacao: pontos});
    });
  }

  render() {
    const {pontuacao} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button 
          onPress={ () => { this.saveData() } }
          title='Salvar dados'
          color='#841584'
          accessibilityLabel='Salvar dados' 
        />
        <Button 
          onPress={ () => { this.listarDados() } }
          title='Listar dados'
          color='#841584'
          accessibilityLabel='Listar dados' 
        />
        <Text>{pontuacao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
