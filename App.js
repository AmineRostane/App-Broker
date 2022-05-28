import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View,TextInput,Dimensions} from 'react-native';
import Login from './routes/Login'
import Drawer from './drawer';
import Home from './icons/home.svg'
import Svg from 'react-native-svg';
import { SvgUri } from 'react-native-svg';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';




export default function App({navigation}) {
  
  
  

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
       <View style={styles.navbar}>
         <View style={styles.home}>
           <Text style={styles.navName} >Home</Text>
         </View>
         <View style={styles.balance}>
         <Text  style={styles.navNameSel}>Balance</Text>
         </View>
         <View style={styles.market}>
         <Text  style={styles.navName}>Market</Text>
         </View>

       </View>

      </View>
      <View style={styles.body}>
        <View style={styles.stock}>
          <View style={styles.current}>
            <Text>Current Balance</Text>
            <Text>put price</Text>

          </View>
          <View style={styles.profit}>
          <Text>Today’s profit</Text>
            <Text>put price</Text>
          </View>
          


        </View>
        <View style={styles.logo}>
        <Image style={styles.logo} source={require('./icons/logoBlack.png')} />
        </View>

      </View>
      <View>
      <Text style={styles.title}>Assets</Text>
      </View>
      
      <View style={styles.body2}></View>
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
    paddingVertical: 30,
    paddingBottom: 0,
    backgroundColor: '#1a1a1a',
    flexDirection: "column",
    justifyContent:'center',
    
  },
  header: {
    flex: 0.5,
    height:114,
    paddingTop:20,
    marginBottom:0,
    backgroundColor: '#1a1a1a',
    //flexDirection: "row",

  },
  navbar: {
    flex:1,
    marginTop:24,
    height: 48,
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
  
  borderRadius: 10,
  backgroundColor: '#00ECED',
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
  flex: 1,
  margin:30,
  borderRadius:30,
  height:340,
  //padding: 50,
  backgroundColor: '#00ECED',
  //justifyContent:'center',
  flexDirection: "row",
},
stock: {
  flexDirection: 'column',
},
current: {
  
  padding:30,

},
profit: {
  
  paddingLeft:30,


},
logo: {
  marginTop:55,
  marginLeft:25,

},
body2: {
  flex: 1,
  
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
},
navNameSel: {
  textAlign: 'center',
  color: 'black',
},
title: {
  color:'white',
  marginLeft:20,
}
});
