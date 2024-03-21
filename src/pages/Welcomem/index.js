import { View, Text, StyleSheet , Image , TouchableOpacity} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
export default function Welcomem() {

  const navigation = useNavigation()
  return (
    <View style={Styles.container}>
        <View style={Styles.containerLogo}>
                < Animatable.Image
                  animation="flipInY"
                  source={require('../../assets/logo.png')}
                  style={{width: '100%'}}
                  resizeMode='contain'
                />
          </View>     
      
      <Animatable.View delay={600} animation='fadeInUp' style={Styles.containerForm}>
        <Text style={Styles.title}> Organize sua vida finaceira De maneira eficiete </Text>
        <Text style={Styles.text}>Faça já seu login</Text>


        <TouchableOpacity
          style={Styles.button}
          onPress={( )=> navigation.navigate('Signin')}
                    >
           <Text style={Styles.buttonText}>Acessar</Text>  
        </TouchableOpacity>        
                
        
      </Animatable.View>
    </View>
  )
}  


const Styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor: "#C10F7D"
  }, 
  containerLogo:{
    flex:2,
    backgroundColor: "#C10F7D",
    justifyContent:"center",
    alignItems:"center"
  },
  containerForm:{
    flex:1,
    backgroundColor: '#500B89',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: '5%'

  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: "white"
  },
  text:{
   color:"white"
  },
  button:{
    position: 'absolute',
    backgroundColor:"#C10F7D",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonText:{
    fontSize:18,
    color: "white",
    fontWeight: 'bold'
  }
  
})