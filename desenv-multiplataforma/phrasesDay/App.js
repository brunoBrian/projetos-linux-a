import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,Image, Alert} from 'react-native';

export default class App extends Component {
  randomPhrase() {
    let random = Math.random() * 10;
    random = Math.floor(random);

    let frases = [
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'Imagine uma nova história para sua vida e acredite nela.',
      'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
      'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
      'Não existe um caminho para a felicidade. A felicidade é o caminho.',
      'Não espere por uma crise para descobrir o que é importante em sua vida.',
      'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.',
      'A alegria de fazer o bem é a única felicidade verdadeira.',
      'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
      'É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso.'
    ];

    Alert.alert('A frase do dia é:', frases[random]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topo}>Topo</Text>
        <View style={styles.conteudo}>
          <Image style={styles.image} source={require('./imgs/logo.png')} />
          <TouchableOpacity style={styles.button} onPress={this.randomPhrase}>
            <Text style={styles.buttonText}>Nova frase</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.rodape}>Frases do dia</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  topo: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  conteudo: {
    flex: 9,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    backgroundColor: 'brown',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    borderColor: '#538530',
    borderWidth: 2,
    marginHorizontal: 20
  },
  buttonText: {
    color: '#fff',
    backgroundColor: '#538530',
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
