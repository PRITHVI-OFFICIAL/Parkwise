import React from 'react';
import MapView,{Marker,Callout} from 'react-native-maps';
import { StyleSheet, View ,Text} from 'react-native';

export default function Gismap() {

  mapStyle=[
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

  
  return (
    <View style={styles.container}>
    <MapView style={styles.map} initialRegion={{
    latitude: 12.946192536553657,
    longitude: 80.14925624004009,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  customMapStyle={mapStyle}

  >

    <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946212675858524, longitude: 80.14926739386745}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT002</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Yashwanth Krishnan B</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> PAID</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> GOOD</Text>
            </View>
            
          </Callout>

        </Marker>


        <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946275412556815, longitude: 80.14930293313823}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT001</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Varsha S</Text>
            <Text style={{color:'red'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> NOT PAID</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> GOOD</Text>
            </View>
            
          </Callout>

        </Marker>


        <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946150004603558, longitude: 80.14933525538675}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT003</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Pravin Kumar P</Text>
            <Text style={{color:'red'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> NOT PAID</Text>
            <Text style={{color:'red'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> NOT GOOD</Text>
            </View>
            
          </Callout>

        </Marker>

        <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946017, longitude: 80.149276}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT004</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Srinithi S</Text>
            <Text style={{color:'orange'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> PARTIAL PAID</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> GOOD</Text>
            </View>
            
          </Callout>

        </Marker>


 

        <Marker
          pinColor='blue'
         
         coordinate={{latitude:  12.945862, longitude: 80.149189}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            <View>
            <Text style={{fontWeight:"bold"}}>Branch ID : BI002</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Street Name:</Text>  Nelayappar 2nd Street</Text>
            <Text style={{color:'orange'}}><Text style={{fontWeight:"bold"}}>Total Flow :</Text> 100L</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Leakage Status : </Text>NO </Text>
           
            </View>
            
          </Callout>

        </Marker>

        {/* 12.946275412556815, 80.14930293313823 */}
        {/* 12.946150004603558, 80.14933525538675 */}
        {/* 12.946017, 80.149276 */}
        {/* 12.945856, 80.149286 */}
        {/* 12.945862, 80.149189 */}


  </MapView>
  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});