import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n1: 0, n2: 0, resultado: 0, resultadoText: '' };
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let mult = this.state.n1 * this.state.n2;
    let c = this.state;
    c.resultado = mult;
    this.setState(c);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <Text style={{ fontSize: 28, color: 'orange', textAlign: 'center' }}>
            Multiplicação de 2 números
          </Text>
          <TextInput
          style={styles.input}
            placeholder="Digite o primeiro numero: "
            keyboardType="numeric"
            onChangeText={(n1) => {
              this.setState({ n1 });
            }}
          />
          <TextInput
          style={styles.input}
            autoCapitalize="none"
            placeholder="Digite o segundo numero:"
            keyboardType="numeric"
            onChangeText={(n2) => {
              this.setState({ n2 });
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttontext}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 20 }]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}
