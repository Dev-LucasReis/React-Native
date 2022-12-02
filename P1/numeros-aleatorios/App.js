import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from './styles';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      numero: 0,
    };
  }

  numeroAleatorio = () => {
    let n = Math.floor(Math.random() * 10);
    this.setState({ numero: n });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text
          style={{
            fontSize: 28,
            color: 'black',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}>
          Jogo do número aleatório
        </Text>

        <Text>{'\n'}</Text>
        <Text style={{ fontSize: 20, color: 'red', textAlign: 'center' }}>
          Pense em um N° de 0 a 10
        </Text>

        <Text style={styles.headerText}>{this.state.numero}</Text>

        <TouchableOpacity style={styles.button} onPress={this.numeroAleatorio}>
          <Text style={styles.buttontext}>Verificar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
