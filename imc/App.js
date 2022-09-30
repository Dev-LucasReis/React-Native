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
    this.state = { altura: 0, peso: 0, resultado: 0, resultadoText: '' };
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);

    let c = this.state;

    c.resultado = imc;

    if (c.resultado < 16) {
      c.resultadoText = 'Muito abaixo do peso';
    } else if (c.resultado < 17) {
      c.resultadoText = 'Moderadamente abaixo do peso';
    } else if (c.resultado < 18.5) {
      c.resultadoText = 'Abaixo do peso';
    } else if (c.resultado < 25) {
      c.resultadoText = 'Peso Normal';
    } else if (c.resultado < 30) {
      c.resultadoText = 'Sobrepeso';
    } else if (c.resultado < 35) {
      c.resultadoText = 'Obesidade deGrau 1.';
    } else if (c.resultado < 40) {
      c.resultadoText = 'Obesidade deGrau 2.';
    } else {
      c.resultadoText = 'Obesidade Mórbida';
    }

    this.setState(c);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <Text> {'\n'}</Text>
          <Text style={{ fontSize: 28, color: 'black', textAlign: 'center' }}>
            IMC
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua altura: "
            keyboardType="numeric"
            onChangeText={(altura) => {
              this.setState({ altura });
            }}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Digite o seu peso:"
            keyboardType="numeric"
            onChangeText={(peso) => {
              this.setState({ peso });
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttontext}>Verificar</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 20 }]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}
