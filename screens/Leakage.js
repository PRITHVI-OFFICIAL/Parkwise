import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';




export default function Leakage() {

  return (
    <View style={{padding:20,flex:1}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>Total House</Text>
        <Text style={{fontSize:15,marginTop:20}}>1.    Branch ID : BI002          Leakage Detected</Text>
        <Text style={{fontSize:15,marginTop:20}}>1.    Branch ID : BI010          Leakage Detected</Text>

        
    </View>
   
  );
}
const styles=StyleSheet.create({

    card:{
        margin:15,
        backgroundColor: '#F6F7FB', 
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:10,
        paddingRight:10,
    }
})

