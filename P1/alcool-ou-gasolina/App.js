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
    this.state = { alcool: 0, gasolina: 0, resultado: 0, resultadoText: '' };
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let calc = this.state.alcool / this.state.gasolina;

    let c = this.state;

    c.resultado = calc;

    if (c.resultado < 0.7) {
      c.resultadoText = 'o derivado da cana-de-açúcar é o melhor para abastecer';
    } else {
      c.resultadoText = 'Gasolina é melhor.';
    }

    this.setState(c);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <Text> {'\n'}</Text>
          <Text style={{ fontSize: 28, color: 'black', textAlign: 'center' }}>
            Alcool ou Gasolina
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Preço do Alcool: "
            keyboardType="numeric"
            onChangeText={(alcool) => {
              this.setState({ alcool });
            }}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Preço da gasolina:"
            keyboardType="numeric"
            onChangeText={(gasolina) => {
              this.setState({ gasolina });
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
