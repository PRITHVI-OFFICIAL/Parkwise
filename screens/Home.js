import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text, Button,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>

      <View style={{height:200,justifyContent:"center",alignItems:"center"}}>

        <Image source={{uri:'https://shorturl.at/afmG1'}}  style={{height:180,width:180}}/>
      </View>
      <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:5}}>Admin Dashboard</Text>

      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>

      <TouchableOpacity onPress={()=>navigation.navigate('TotalHouse')}>
      <View style={styles.box}>
      
      <Text style={{fontWeight:"bold",fontSize:18,color:"white",textAlign:'center'}}>Total Houses</Text>
      <Text style={{fontWeight:"bold",fontSize:30,color:"white",textAlign:'center',marginTop:10}}>3</Text>

      </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>navigation.navigate('Leakage')}>

      <View style={styles.box}>

<Text style={{fontWeight:"bold",fontSize:18,color:"white",textAlign:"center"}}>Leakage Alerts</Text>
<Text style={{fontWeight:"bold",fontSize:30,color:"white",textAlign:'center',marginTop:10}}>2</Text>

</View>

      </TouchableOpacity>
      
      </View>

      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
      <View style={styles.box}>

      <Text style={{fontWeight:"bold",fontSize:18,color:"white",textAlign:"center"}}>Complaints</Text>
      <Text style={{fontWeight:"bold",fontSize:30,color:"white",textAlign:'center',marginTop:10}}>2</Text>

      </View>

      <View style={styles.box}>

      <Text style={{fontWeight:"bold",fontSize:18,color:"white",textAlign:"center"}}>Resolved</Text>
      <Text style={{fontWeight:"bold",fontSize:30,color:"white",textAlign:'center',marginTop:10}}>1</Text>


      </View>
      </View>
      <View style={{marginTop:40}}></View>

      {/* 12.960379137666333, 80.05738831510715 */}

      {/* <View style={{height:70,width:180,backgroundColor:"blue",borderRadius:20,justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
        <Text style={{fontWeight:"bold",color:"white"}}>Analyze Distribution Lines</Text>
      </View> */}

      <Button title="Analyze Distribution Lines" onPress={()=>navigation.navigate('Gismap')} color="blue"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    //backgroundColor:"blue"
   
  },
  box:{
    width:180,
    height:120,
    backgroundColor:"blue", 
    borderRadius:10,
    padding:15
  }
  
});