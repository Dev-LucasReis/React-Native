import { styles } from './styles';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text
          style={{
            fontSize: 28,
            color: 'red',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}>
          Anuncios
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.box1}>
            <Image
              source={require('./assets/nike.jpeg')}
              style={{ width: 250, height: 200 }}
            />
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Tênis Nike Revolution 6 Next Nature Masculino - Vermelho+Branco
            </Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              A partir de R$ 249,99{' '}
            </Text>
          </View>
          <View style={styles.box2}>
            <Image
              source={require('./assets/download.jpeg')}
              style={{ width: 250, height: 200 }}
            />
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Bicicleta Caloi Vulcan
            </Text>
            <Text style={{ textAlign: 'center', color: 'white' }}>
              'Aro 29 com 21 Velocidades'
            </Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              de R$:1500 por R$:1190,90{' '}
            </Text>
          </View>
          <View style={styles.box3}>
            <Image
              source={require('./assets/relogio.jpeg')}
              style={{ width: 250, height: 200 }}
            />
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Relógio Smartwatch Redplace Inteligente - Preto
            </Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              R$ 199,90{' '}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;
