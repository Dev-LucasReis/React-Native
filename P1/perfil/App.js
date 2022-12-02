import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>{'\n'}</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          App Meu Perfil
        </Text>

        <Image
          source={require('./assets/lucas.png')}
          style={{ width: 300, height: 300 }}
        />

        <Text>{'\n'}</Text>
        <Text>Nome: Lucas dos santos reis</Text>
        <Text>Idade: 24 anos</Text>
        <Text>Formação: Ensino Medio </Text>
        <Text>Experiencia: Eventos</Text>
        <Text>Projetos: Sistemas para Web com PHP/LARAVEL</Text>
      </View>
    );
  }
}

export default App;
