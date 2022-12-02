import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
    },

    utton:{
   backgroundColor:"#9ACD32",
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:"green",
  },
  resultado:{
    alignSelf:"center",
    color:"red",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },

  
  });
 
  export {styles};