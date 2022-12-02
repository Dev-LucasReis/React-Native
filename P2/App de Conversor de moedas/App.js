import React, { Component } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import {styles} from './styles';

import api from './src/services/api';

export default class App extends Component {

  constructor(props) {

    super(props)

    this.state = { resultado: '', valor: '',  n1: '', n2: '', acharMoeda: '', mostrarResultado: '',

    }  
     this.mostrarResultado = this.mostrarResultado.bind(this);
  }

    async componentDidUpdate() {

    if (this.state.loading == true) {

      return null 
    }
    else {
      try {
        this.chamarApi()
        const response = await api.get(`/${this.state.acharMoeda}`)
        const moedas = this.state.acharMoeda
        this.converter(moedas, response)
        this.setState({ loading: true })
      }   
      catch(erro) {
        console.log(erro)
      }
    }
  }

  chamarApi() {
    const buscarCoin = (n1) => {
      this.setState({ acharMoeda: n1 })
    }

    let n1 = this.state.n1
    let n2 = this.state.n2

    if (n1 == 'Real' && n2 == 'Real')
      this.setState({resultado: 'R$' + Number(this.state.valor).toFixed(2)})

    else if (n1 == 'Real' && n2 == 'Dolar') {
      buscarCoin('BRL-USD')

    }
    else if (n1 == 'Real' && n2 == 'Euro') {
      buscarCoin('BRL-EUR')
    }

    else if (n1 == 'Dolar' && n2 == 'Real') {
      buscarCoin('USD-BRL')   

    }
    else if (n1 == 'Dolar' && n2 == 'Dolar')
      this.setState({resultado: '$' + Number(this.state.valor).toFixed(2)})

    else if (n1 == 'Dolar' && n2 == 'Euro') {
      buscarCoin('USD-EUR') 
    }

    else if (n1 == 'Euro' && n2 == 'Real') {
      buscarCoin('EUR-BRL') 
    }

    else if (n1 == 'Euro' && n2 == 'Dolar') {
      buscarCoin('EUR-USD')
      
    }
    else if (n1 == 'Euro' && n2 == 'Euro')
      this.setState({resultado: '€' + Number(this.state.valor).toFixed(2)})
  }

  converter(moedas, response) {
    if(moedas == 'BRL-USD') {
      this.setState({ resultado: '$' + (response.data.BRLUSD.low * Number(this.state.valor)).toFixed(2)})
    }
    else if(moedas == 'BRL-EUR') {
      this.setState({resultado: '€' + (response.data.BRLEUR.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'USD-BRL') {
      this.setState({ resultado: 'R$' + (response.data.USDBRL.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'USD-EUR') {
      this.setState({ resultado: '€' + (response.data.USDEUR.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'EUR-BRL') {
      this.setState({ resultado: 'R$' + (response.data.EURBRL.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'EUR-USD'){
      this.setState({resultado: '$' + (response.data.EURUSD.low * Number(this.state.valor)).toFixed(2)})
    }
  }

  mostrarResultado(){
    this.setState({mostrarRes: this.state.resultado})
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}> CONVERSOR DE MOEDAS</Text>
        <Text style={styles.subTitle}> Euro €, Dolar $, Real R$ </Text>

            <TextInput style={styles.input}
              keyboardType='numeric'
              onChangeText={ (n1) => { 
                this.setState({ valor : n1})
                this.setState({ loading: false }) 
              }}
              placeholder=" Informe o Valor: "/>

            <Picker style={styles.input}
              selectedValue={ this.state.n1 }
              onValueChange={(valor, itemIndex) => this.setState({ n1: valor})}>
              <Picker.Item key={0} label= "De:" />
              <Picker.Item key={1} value= "Real" label="Real" />
              <Picker.Item key={2} value= "Dolar" label="Dolar" />
              <Picker.Item key={3} value= "Euro" label="Euro" />
            </Picker>  
       
            <Picker style={styles.input}
              selectedValue={ this.state.n2 }
              onValueChange={(valor, itemIndex) => this.setState({n2: valor})}>
              <Picker.Item key={0} label="Para:" />
              <Picker.Item key={1} value= "Real" label="Real" />
              <Picker.Item key={2} value= "Dolar" label="Dolar" />
              <Picker.Item key={3} value= "Euro" label="Euro" />
            </Picker>

        <Pressable style={styles.botao}
          onPress={() => this.mostrarResultado()}>
          <Text style={styles.textoBotao}> CALCULAR </Text>
        </Pressable>
      
          <Text style={styles.texto}> 
            {this.state.resultado} 
          </Text> 
      </View>
    )
  }
}