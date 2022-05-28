import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View,TextInput,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Svg from 'react-native-svg';
import { SvgUri } from 'react-native-svg';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';




export default function SignUp({navigation}) {
 
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2,setTextInputValue2] = React.useState('');
  const [textInputValue3,setTextInputValue3] = React.useState('');

  return (
    
    <>
        
    <View style={styles.container}>
    <View>
      <Image style={styles.logo} source={require('../icons/BrokerLogo.png')} />
    </View>
    <View>
    <TextInput
          style={styles.input}
          onChangeText={text3 => setTextInputValue3(text3)}
          value={textInputValue3}
          placeholder="User" />
          <Image style={styles.mailIC} source={require('../icons/user.png')} />
    </View>
    <View style={styles.sectionStyling}>
      
        <TextInput
          style={styles.input}
          onChangeText={text => setTextInputValue(text)}
          value={textInputValue}
          placeholder="email@email.com" />
          <Image style={styles.mailIC} source={require('../icons/mail.png')} />
      </View>
      <View>
        <TextInput
        secureTextEntry={true}
          style={styles.input1}
          value={textInputValue2}
          onChangeText={text2 => setTextInputValue2(text2)}
          
           />
           <Image style={styles.pswdIC} source={require('../icons/pswd.png')} />
      </View>
      <View>
        <TouchableOpacity  style={styles.boutton}  onPress={()=>{}}>
        
        <Text style={styles.logText}>Sign up</Text>
        </TouchableOpacity>

      </View>
      <View>
        <TouchableOpacity  style={styles.boutton}  onPress={()=>{}}>
        
        <Text style={styles.logText}><Image style={styles.googleIC} source={require('../icons/google.png')} />  Sign up with Google</Text>
        </TouchableOpacity>
      </View >
      <View style={styles.inscrSect}>
        <Text style={styles.inscrText1}>Vous avez un compte ?</Text>
        <Text style={styles.inscrText2}  onPress={()=>{}}> Se connecter!</Text>
      </View>
        
      </View></>


    
    )}
    const styles = StyleSheet.create({
      container: {
        flex:1,
        paddingVertical: 20,
        paddingBottom: 0,
        backgroundColor: '#1a1a1a',
        flexDirection: "column",
        justifyContent:'center',
        
      },
      sectionStyling: {
       
        justifyContent:'center',

      },
      mailIC: {
        marginLeft:50,
        top:15,
        
        
        position:'absolute',

      },
      pswdIC: {
        marginLeft:50,
        top:17,
        
        
        position:'absolute',

      },
      logo: {
        alignSelf: 'center',
        justifyContent:'center',
        marginBottom:48,

      },
      input: 
        {
          height: 50,
          width: 330,
          marginLeft:35,
          marginBottom:24,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius:10,
          //placeholderTextColor: 'gray',
          alignContent: 'center',
          //textAlign:'center',
          paddingLeft:60,
          backgroundColor: '#D9D9D9',
          justifyContent: 'center',
        },
        input1: 
        {
          height: 50,
          width: 330,
          marginLeft:35,
          marginBottom:48,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius:10,
          //placeholderTextColor: 'gray',
          alignContent: 'center',
          //textAlign:'center',
          paddingLeft:60,
          backgroundColor: '#D9D9D9',
          justifyContent: 'center',
        },
        mdpForgot: {
          marginLeft:50,
          marginBottom:24,
          color:'white',
        },
        boutton: {
          
          width:250,
          height:50,
          marginBottom: 24,
          alignSelf:'center',
          textAlign:'center',
          alignContent:'center',
          backgroundColor:'#00ECED',
          borderRadius:10,
          justifyContent: 'center',

          justifyContent:'center',
        },
        logText:
        {
          alignSelf:'center',

        },
        inscrSect: {
          flexDirection: "row",
          justifyContent: 'center',

        },
        inscrText1: {
          color:'white',
          //fontFamily:'Poppins',

        },
        inscrText2: {
          color:'#00ECED',
          //fontFamily:'Poppins',

        },
        googleIC: {
          
          

        },
      


    })





    
    
    