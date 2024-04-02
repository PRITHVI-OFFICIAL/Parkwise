import React, { useState,useLayoutEffect } from 'react';
import { Alert, StyleSheet, View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, database } from "../config/firebase";
import {collection,addDoc,orderBy,query,onSnapshot,setDoc,doc,getDoc,where, updateDoc} from 'firebase/firestore';
import SlotRow from '../components/SlotRow';
import colors from '../colors';

export default function Home1() {
 
 const navigation=useNavigation();
 
  return (
    <View style={styles.container}>
        <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10}}>Admin Dashboard</Text>
    
    <View style={{height:150,backgroundColor:colors.primary,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
    <Image style={{height:100,width:100}} source={require('../assets/VATTENLOGO.png')} />
    </View>

    <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:15}}>Services</Text> 
    <View style={{padding:15}}>
      
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>

 

<TouchableOpacity onPress={()=>navigation.navigate('Gismap')}>
<View style={{height:100,width:150,backgroundColor:colors.primary,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:15,color:'white'}}>GIS Maping</Text>
</View>
</TouchableOpacity>



<TouchableOpacity onPress={()=>navigation.navigate('Leakage')}>
<View style={{height:100,width:150,backgroundColor:colors.primary,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:15,color:'white'}}>Leakage</Text>
</View>
</TouchableOpacity>



<View>

  

</View>
</View>


<View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>

<TouchableOpacity style={{}} onPress={()=>navigation.navigate('TotalHouse')}>
<View style={{height:100,width:150,backgroundColor:colors.primary,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:15,color:'white'}}>Total Housing</Text>
</View> 
</TouchableOpacity>


<View>
</View>
</View>
    </View>
   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 40,
  },
});