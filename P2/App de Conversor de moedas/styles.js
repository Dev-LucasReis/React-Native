import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#142e59',
  },

  input:{
    color: 'white',
    width: 250,
    height: 30,
    justifyContent: 'center',
    fontSize: 20,
    paddingLeft: 5,
    backgroundColor: '#136cd4',
    margin: 10,
  },
  
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    margin: 10,
    fontWeight: '100',
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '100'
  },

  botao: {
    width: 250,
    height: 40,
    margin: 10,
    backgroundColor: '#136cd4',
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: '700',
    color: 'white'
  }
});

export {styles}
 