import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from  'react-native-animatable'
export default function SignIn() {
  return (
    <View style={styles.container}>
 <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
   <Text style={styles.message}>BEM VINDOS</Text>
 </Animatable.View>
 <Animatable.View  animation='fadeInUp' style={styles.containerForm}>
    <Text style={styles.title}>email</Text>
    <TextInput
     placeholder='digite seu email'
     style={styles.input}
    />
     <Text style={styles.title}>SENHA</Text>
    <TextInput
     placeholder='digite uma sehal'
     style={styles.input}
    />
    <TouchableOpacity style={styles.button}>
     <Text  style={styles.buttonText} >acesee</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister}>
     <Text  style={styles.registerText
    
    } >naoo tem uma conta cadraste</Text>
    </TouchableOpacity>

 </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: 'pink'
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
    backgroundColor:'blue',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 28,
    marginTop: 28,

  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: 'green',
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
    color: 'gray'
  }
})