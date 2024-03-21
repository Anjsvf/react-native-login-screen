import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from  'react-native-animatable'
export default function SignIn() {
  return (
    <View style={styles.container}>

        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>SEJA BEM VINDO (A)</Text>
        </Animatable.View>

 <Animatable.View  animation='fadeInUp' style={styles.containerForm}>
      <Text style={styles.title}> Seu Email</Text>
      <TextInput
      placeholder='Digite Seu email'
      style={styles.input}
      />
      <Text style={styles.title}>Sua Senha</Text>
      <TextInput
      placeholder='Digite sua senaha'
      style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
      <Text  style={styles.buttonText} >Acesse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRegister}>
         <Text  style={styles.registerText } >não tem uma conta? cadraste-se Agora</Text>
       </TouchableOpacity>
    
    </Animatable.View>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: '#E01291'
  }, 
  containerHeader:{
    marginTop:14,
    marginBottom: "8%",
    paddingStart: "5%"
  },
  message:{
    fontSize:28,
    fontWeight: 'bold',
    color: 'white'
  },
  containerForm:{
    backgroundColor:'#500B89',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 28,
    marginTop: 28,
    color: 'white'

  },
  input:{
    color: 'white',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    
    
  },
  button:{
    backgroundColor: '#C10F7D',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: 'center'
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText:{
    color: 'white'
  }
})