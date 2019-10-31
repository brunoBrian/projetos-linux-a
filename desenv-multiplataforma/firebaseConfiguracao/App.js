import firebase from 'firebase';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {

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

  cadastrarUsuario() {
    let email = 'brunobrian.sousa@gmail.com';
    let senha = '123456';

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      erro => {
        let errorMessage = '';

        if(erro.code === 'auth/weak-password')
          errorMessage = 'A senha precisa ter no mínimo 6 caracteres';

        alert(errorMessage);
      }
    );
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
    
    usuario.onAuthStateChanged(
      usuarioAtual => {
        if(usuarioAtual) {
          alert('Usuario Logado');
        } else {
          alert('Usuario não Logado');
        }
      }
    );
    
    
    // const usuarioAtual = usuario.currentUser;

    // if(usuarioAtual) {
    //   alert('Usuario Logado');
    // } else {
    //   alert('Usuario não Logado');
    // }
  }

  logoutUser() {
    const usuario = firebase.auth();

    usuario.signOut().then(function() {
      alert('Usuario Deslogado com Sucesso');
    }).catch(function(error) {
      alert('Aconteceu um erro. Usuario não foi Deslogado');
    });
  }

  loginUser() {
    let email = 'brunobrian.sousa@gmail.com';
    let senha = '123456';

    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(
      email,
      senha
    ).catch(
      error => {
        alert(error.message);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button 
          onPress={ () => { this.cadastrarUsuario() } }
          title='Cadastrar Usuario'
          color='#841584'
          accessibilityLabel='Cadastrar Usuario' 
        />

        <Text>Verifica</Text>
        <Button 
          onPress={ () => { this.verificarUsuarioLogado() } }
          title='Verifica Usuario Logado'
          color='#841584'
          accessibilityLabel='Verifica Usuario Logado' 
        />

        <Text>Logout</Text>
        <Button 
          onPress={ () => { this.logoutUser() } }
          title='Logout'
          color='#841584'
          accessibilityLabel='Logout' 
        />

        <Text>Login</Text>
        <Button 
          onPress={ () => { this.loginUser() } }
          title='Login'
          color='#841584'
          accessibilityLabel='Login' 
        />
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
