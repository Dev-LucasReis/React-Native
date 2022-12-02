/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import API from './src/services/api';
import Filmes from './src/Filmes';

const App: () => React$Node = () => {
  const [filmes, setFilmes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalTitulo, setModalTitulo] = React.useState('');
  const [modalConteudo, setModalConteudo] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const response = await API.get('/r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    })();
  }, []);

  const mostrarSinopse = (titulo, conteudo) => {
    setModalTitulo(titulo);
    setModalConteudo(conteudo);
    setModalOpen(true);
  };

  if (loading) {
    return (
      <View style={styles.areaLoading}>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Filmes data={item} mostrarSinopse={mostrarSinopse} />
        )}
      />

      <Modal animationType="slide" visible={modalOpen}>
        <View style={styles.areaModal}>
          <Text style={styles.textoModalTitulo}>{modalTitulo}</Text>
          <Text style={styles.textoModalConteudo}>{modalConteudo}</Text>
          <Button title="Fechar" onPress={() => setModalOpen(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  areaLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  areaModal: {
    backgroundColor: 'black',
    flex: 1,
  },
  textoModalTitulo: {
    color: 'white',
    fontSize: 28,
    backgroundColor: '#292929',
    padding: 10,
  },
  textoModalConteudo: {
    fontSize: 18,
    color: 'white',
    padding: 10,
  },
});

export default App;
