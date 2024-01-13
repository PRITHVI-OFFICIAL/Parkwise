import React, { useState,useLayoutEffect } from 'react';
import { Alert, StyleSheet, View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, database } from "../config/firebase";
import {collection,addDoc,orderBy,query,onSnapshot,setDoc,doc,getDoc,where, updateDoc} from 'firebase/firestore';
import SlotRow from '../components/SlotRow';
import colors from '../colors';

export default function Home() {
  const navigation = useNavigation();
  const [isSeatBooked, setIsSeatBooked] = useState(false);
  const[slot,setSlot]=useState([]);
  const [bookedCount,setBookedCount]=useState(0);
  const [area,SetArea]=useState("");

  const currentmail=auth.currentUser.email;
const id=currentmail.split("@")[0];

  const handleBookSeat = () => {
    Alert.alert(
      'Book Seat',
      'Are you sure you want to book this seat?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => setIsSeatBooked(true) },
      ],
      { cancelable: false }
    );
  };

const collectionRef = collection(database, "Slot");

useLayoutEffect(() => {
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    const slotData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      booked: doc.data().booked
    }));

    const bookedCount = slotData.reduce((count, slot) => {
      return count + (slot.booked ? 1 : 0);
    }, 0);

    setSlot(slotData);
    setBookedCount(bookedCount); // Assuming you have a state variable named bookedCount
    console.log(querySnapshot.size);
  });

  return unsubscribe;
}, []);


const collectionRef1 = collection(database, "Area");
useLayoutEffect(() => {

    const unsubscribe = onSnapshot(collectionRef1, querySnapshot => {
      
        querySnapshot.docs.map(doc => 
          (
          
            SetArea(doc.data().place)
        ))
      
      
      console.log(querySnapshot.size);
    });        
  
  return unsubscribe;
  }, 
  
  []); 

console.log(slot.length,"--<");
console.log(area);
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 21,marginBottom:5 }}>Welcome to Parkwise</Text>
     <View style={{marginBottom:15,flexDirection:'row',justifyContent:'space-between'}}>
     <Text style={{ fontSize: 16,color:'grey'}}>{area}</Text> 
     <Text style={{ fontSize: 16,color:'grey'}}>F-1</Text>
     </View>

      <ScrollView>
      <View style={{ backgroundColor: colors.primary, height: 100,borderTopStartRadius:10,borderTopRightRadius:10,padding:20,justifyContent:'space-between',flexDirection:'row',}}>

<View style={{backgroundColor:'orange',width:60,height:60,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>{slot.length}</Text>  
</View> 

<View style={{backgroundColor:'#50C878',width:60,height:60,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>{bookedCount}</Text>  
</View> 
<View style={{backgroundColor:'red',width:60,height:60,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>{slot.length-bookedCount}</Text>  
</View>
</View>
<View style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: '#909090', paddingTop: 30 }}>
  {/* 1st Row */}
 
  {slot.map((item, index) => (
index % 2 === 0 && (

<View>
<SlotRow slot1={item?.booked} slot2={slot[index+1]?.booked} slotid1={slot[index]?.id} slotid2={slot[index+1]?.id} email={id} key={index}/>
 {
  (index+2)!=slot.length && (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ borderWidth: 0.9, borderStyle: 'dashed', borderColor: '#909090', marginBottom: 5, width: '45%' }}></View>
      <View style={{ borderWidth: 0.9, borderStyle: 'dashed', borderColor: '#909090', marginBottom: 5, width: '45%' }}></View>
    </View>
   )
 }
</View>


)
))}



{/* <View>
<SlotRow slot1={true} slot2={false} slotid1={slot[0].id} slotid2={slot[1].id}/>
 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ borderWidth: 0.9, borderStyle: 'dashed', borderColor: '#909090', marginBottom: 5, width: '45%' }}></View>
    <View style={{ borderWidth: 0.9, borderStyle: 'dashed', borderColor: '#909090', marginBottom: 5, width: '45%' }}></View>
  </View>
</View> */}
</View>
<View style={{height:50,flexDirection:'row',backgroundColor:colors.primary}}>

<View style={{width:'50%',height:50,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'white'}}>ENTRY</Text>
</View> 
<View style={{width:'55%',height:50,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'white'}}>EXIT</Text>
</View>

</View>
      </ScrollView>
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
   // <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
    //   <TouchableOpacity onPress={handleBookSeat} disabled={isSeatBooked}>
    //     <View
    //       style={{
    //         width: 120,
    //         height: 60,
    //         borderWidth: 1,
    //         borderColor: '#1a73e8',
    //         borderRadius: 8,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         backgroundColor: isSeatBooked ? '#1a73e8' : 'transparent',
    //       }}
    //     >
    //       {isSeatBooked ? (
    //         <Image source={require('../assets/car.png')} style={{ width: 70, height: 70, transform: [{ rotate: '270deg' }] }} />
    //       ) : (
    //         <Text style={{ fontWeight: 'bold' }}>{item.id}</Text>
    //       )}
    //     </View>
    //   </TouchableOpacity>
    //   <View style={{ height: '100%', width: 1, backgroundColor: '#909090' }}></View>
    //   <TouchableOpacity onPress={handleBookSeat} disabled={isSeatBooked}>
    //     <View
    //       style={{
    //         width: 120,
    //         height: 60,
    //         borderWidth: 1,
    //         borderColor: '#1a73e8',
    //         borderRadius: 8,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         backgroundColor: isSeatBooked ? '#1a73e8' : 'transparent',
    //       }}
    //     >
    //       {isSeatBooked ? (
    //         <Image source={require('../assets/car.png')} style={{ width: 70, height: 70, transform: [{ rotate: '90deg' }] }} />
    //       ) : (
    //         <Text style={{ fontWeight: 'bold' }}>{item.id}</Text>
    //       )}
    //     </View>
    //   </TouchableOpacity>
    // </View>