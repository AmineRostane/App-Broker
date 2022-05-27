import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View,TextInput,} from 'react-native';
import {Login} from './routes/Login'
import Home from './icons/home.svg'
import Svg from 'react-native-svg';
import { SvgUri } from 'react-native-svg';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2,setTextInputValue2] = React.useState('');
  return (
    
    <>
    <View style={styles.container}>
    <View>
      <Image style={styles.logo} source={require('./icons/BrokerLogo.png')} />
    </View>
    <View style={styles.sectionStyling}>
      
        <TextInput
          style={styles.input}
          onChangeText={text => setTextInputValue(text)}
          value={textInputValue}
          placeholder="email@email.com" />
          <Image style={styles.mailIC} source={require('./icons/mail.png')} />
      </View>
      <View>
        <TextInput
        secureTextEntry={true}
          style={styles.input}
          value={textInputValue2}
          onChangeText={text2 => setTextInputValue2(text2)}
          
           />
      </View>
      <View>
        <Text style={styles.mdpForgot}>Mot de passe oublié ?</Text>
        
      </View>
      <View>
        <TouchableOpacity  style={styles.boutton}  onPress={()=>{}}>
        <Text style={styles.logText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity  style={styles.boutton}  onPress={()=>{}}>
        <Text style={styles.logText}>Login with Google</Text>
        </TouchableOpacity>
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
        marginTop:40,
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

          justifyContent:'center',
        },
        logText:
        {
          alignSelf:'center',

        }
      


    })









    
    
    /*<View style={styles.container}>
      <View style={styles.header}>
       <View style={styles.navbar}>
         <View style={styles.home}>
           <Text style={styles.navName}>Home</Text>
         </View>
         <View style={styles.balance}>
         <Text  style={styles.navName}>Balance</Text>
         </View>
         <View style={styles.market}>
         <Text  style={styles.navName}>Market</Text>
         </View>

       </View>

      </View>
      <View style={styles.body}>

      </View>
      <View style={styles.footer}>
        <View style={styles.iconsNav}>
        <View style={styles.homeic}>
        
            
          
        </View>
         <View style={styles.bell}></View>
         <View style={styles.chart}></View>
         <View style={styles.profile}></View>

        </View>

      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical: 20,
    paddingBottom: 0,
    backgroundColor: '#1a1a1a',
    flexDirection: "column",
    justifyContent:'center',
    
  },
  header: {
    flex: 0.5,
    padding:20,
    backgroundColor: '#1a1a1a',
    //flexDirection: "row",

  },
  navbar: {
    flex:1,
    flexDirection: "row",

},
  
  home: {
    flex:1,
    padding:20,
    //backgroundColor: 'pink',
    borderRadius: 10,
    justifyContent: 'center',

},
balance: {
  flex:1,
  padding:20,
  //backgroundColor: 'green',
  borderRadius: 10,
    justifyContent: 'center',

},
market: {
  flex:1,
  padding:20,
  //backgroundColor: 'white',
  borderRadius: 10,
    justifyContent: 'center',

},

body: {
  flex: 4,
  padding: 100,
  backgroundColor: '#1a1a1a',
},
footer: {
  flex:0.3,
  padding:20,
  backgroundColor:'#1a1a1a',
},
iconsNav: {
  flex:1,
  flexDirection: "row",
},
homeic: {
  flex:1,
  //padding:20,
  backgroundColor: 'blue',

},
bell: {
  flex:1,
  backgroundColor: 'red',

},
chart: {
  flex:1,
  backgroundColor: 'green',

},
profile: {
  flex:1,
  backgroundColor: 'black',

},
navName: {
  textAlign: 'center',
  color: 'white',
}
});
*/